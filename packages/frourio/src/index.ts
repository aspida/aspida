import { LowerHttpMethod, AspidaMethods, HttpMethod, AspidaMethodParams } from 'aspida'
import express, { RequestHandler, Request } from 'express'
import { validateOrReject } from 'class-validator'

type ExcludeBlob<T extends AspidaMethodParams> = T['reqFormat'] extends FormData
  ? Pick<
      T['reqBody'],
      { [K in keyof T['reqBody']]-?: T['reqBody'][K] extends Blob ? never : K }[keyof T['reqBody']]
    >
  : T['reqBody']

type RequestParams<T extends AspidaMethodParams> = {
  path: string
  method: HttpMethod
  query: T['query']
  body: ExcludeBlob<T>
  headers: T['reqHeaders']
  originalRequest: Request
}

type Status = {
  ok: 200 | 201 | 202 | 203 | 204 | 205 | 206
  other:
    | 301
    | 302
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405
    | 406
    | 409
    | 500
    | 501
    | 502
    | 503
    | 504
    | 505
}

type SubAllResponse<T, U> = {
  status: Status['ok']
  body?: T
  headers?: U
}

type DataResponse<T, U> = {
  status: Status['ok']
  body: T
  headers?: U
}

type HeadersResponse<T, U> = {
  status: Status['ok']
  body?: T
  headers: U
}

type AllResponse<T, U> = {
  status: Status['ok']
  body: T
  headers: U
}

type OtherResponse = {
  status: Status['other']
  body?: any
  headers?: any
}

type ServerResponse<K extends AspidaMethodParams> =
  | (K['resBody'] extends {}
      ? K['resHeaders'] extends {}
        ? AllResponse<K['resBody'], K['resHeaders']>
        : DataResponse<
            K['resBody'],
            K['resHeaders'] extends {} | undefined ? K['resHeaders'] : undefined
          >
      : K['resHeaders'] extends {}
      ? HeadersResponse<
          K['resBody'] extends {} | undefined ? K['resBody'] : undefined,
          K['resHeaders']
        >
      : SubAllResponse<
          K['resBody'] extends {} | undefined ? K['resBody'] : undefined,
          K['resHeaders'] extends {} | undefined ? K['resHeaders'] : undefined
        >)
  | OtherResponse

type ServerValues = {
  params?: Record<string, any>
  user?: any
}

type FileType<T extends AspidaMethodParams> = T['reqFormat'] extends FormData
  ? { files: Express.Multer.File[] }
  : {}

export type ServerMethods<T extends AspidaMethods, U extends ServerValues> = {
  [K in keyof T]: (
    req: RequestParams<T[K]> & U & FileType<T[K]>
  ) => ServerResponse<T[K]> | Promise<ServerResponse<T[K]>>
}

export const createController = <T extends AspidaMethods, U extends ServerValues = {}>(
  methods: ServerMethods<T, U>
) => methods

export const createMiddleware = (middleware: RequestHandler | RequestHandler[]) => middleware

type Validator = {
  required: boolean
  Class: any
}

type Validators = {
  query?: Validator
  body?: Validator
  headers?: Validator
}

export type ControllerTree = {
  name: string
  controller?: ServerMethods<any, any>
  ctrlMiddleware?: RequestHandler | RequestHandler[]
  uploader?: string[]
  validator?: { [K in LowerHttpMethod]?: Validators }
  middleware?: RequestHandler | RequestHandler[]
  children?: {
    names?: ControllerTree[]
    value?: ControllerTree
  }
}

const methodsToHandler = (
  validator: Validators | undefined,
  methodCallback: ServerMethods<any, any>[LowerHttpMethod],
  numberTypeParams: string[]
): RequestHandler => async (req, res) => {
  try {
    await Promise.all([
      validator?.query &&
        (Object.keys(req.query).length || validator.query.required ? true : undefined) &&
        validateOrReject(Object.assign(new validator.query.Class(), req.query)),
      validator?.headers &&
        (Object.keys(req.headers).length || validator.headers.required ? true : undefined) &&
        validateOrReject(Object.assign(new validator.headers.Class(), req.headers)),
      validator?.body &&
        (Object.keys(req.body).length || validator.body.required ? true : undefined) &&
        validateOrReject(Object.assign(new validator.body.Class(), req.body))
    ])
  } catch (e) {
    res.sendStatus(400)
    return
  }

  try {
    const result = methodCallback({
      query: req.query,
      path: req.path,
      method: req.method as HttpMethod,
      body: req.body,
      headers: req.headers,
      originalRequest: req,
      params: numberTypeParams.reduce(
        (p, c) => ({
          ...p,
          [c]: +p[c]
        }),
        req.params as Record<string, string | number>
      ),
      user: (req as any).user,
      files: req.files
    })

    const { status, body, headers } = result instanceof Promise ? await result : result

    for (const key in headers) {
      res.setHeader(key, headers[key])
    }

    res.status(status).send(body)
  } catch (e) {
    res.sendStatus(500)
  }
}

export const createRouter = (
  ctrl: ControllerTree,
  uploader: RequestHandler,
  numberTypeParams: string[] = []
) => {
  const router = express.Router({ mergeParams: true })

  if (ctrl.middleware) {
    ;(Array.isArray(ctrl.middleware) ? ctrl.middleware : [ctrl.middleware]).forEach(handler => {
      router.use(handler)
    })
  }

  if (ctrl.controller) {
    const ctrlMiddlewareList = Array.isArray(ctrl.ctrlMiddleware)
      ? ctrl.ctrlMiddleware
      : ctrl.ctrlMiddleware
      ? [ctrl.ctrlMiddleware]
      : []

    for (const method in ctrl.controller) {
      const handler = methodsToHandler(
        ctrl.validator?.[method as LowerHttpMethod],
        ctrl.controller[method],
        numberTypeParams
      )

      ;(router.route('/') as any)[method](
        ctrl.uploader?.includes(method)
          ? [uploader, ...ctrlMiddlewareList, handler]
          : [...ctrlMiddlewareList, handler]
      )
    }
  }

  if (ctrl.children) {
    // eslint-disable-next-line no-unused-expressions
    ctrl.children.names?.forEach(n => {
      router.use(n.name, createRouter(n, uploader, numberTypeParams))
    })

    if (ctrl.children.value) {
      const pathName = ctrl.children.value.name.replace('_', ':').split('@')
      router.use(
        pathName[0],
        createRouter(
          ctrl.children.value,
          uploader,
          pathName[1] === 'number' ? [...numberTypeParams, pathName[0].slice(2)] : numberTypeParams
        )
      )
    }
  }

  return router
}
