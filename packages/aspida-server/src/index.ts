import { LowerHttpMethod, AspidaMethods, HttpMethod, AspidaMethodParams } from 'aspida'
import express, { RequestHandler } from 'express'

type ServerValues = {
  params?: Record<string, any>
  user?: any
}

type RequestParams<
  T extends AspidaMethods[LowerHttpMethod],
  U extends ServerValues
> = T extends AspidaMethodParams
  ? {
      path: string
      method: HttpMethod
      params: U['params']
      user: U['user']
      query: T['query'] extends Record<string, any> | undefined ? T['query'] : undefined
      reqBody: T['reqBody'] extends Record<string, any> | undefined ? T['reqBody'] : undefined
      reqHeaders: T['reqHeaders'] extends Record<string, any> | undefined
        ? T['reqHeaders']
        : undefined
    }
  : never

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

type StatusResponse = {
  status: Status['ok']
}

type DataResponse<T> = {
  status: Status['ok']
  resBody: T
}

type HeadersResponse<T> = {
  status: Status['ok']
  resHeaders: T
}

type AllResponse<T, U> = {
  status: Status['ok']
  resBody: T
  resHeaders: U
}

type OtherResponse = {
  status: Status['other']
  resBody?: any
  resHeaders?: any
}

type ServerResponse<K extends AspidaMethodParams> =
  | (K['resBody'] extends Record<string, any> | undefined
      ? K['resHeaders'] extends Record<string, any> | undefined
        ? AllResponse<K['resBody'], K['resHeaders']>
        : DataResponse<K['resBody']>
      : K['resHeaders'] extends Record<string, any> | undefined
      ? HeadersResponse<K['resHeaders']>
      : StatusResponse)
  | OtherResponse

export type ServerMethods<T extends AspidaMethods, U extends ServerValues> = {
  [K in keyof T]: (req: RequestParams<T[K], U>) => Promise<ServerResponse<T[K]>>
}

export const createController = <T extends AspidaMethods, U extends ServerValues = {}>(
  methods: ServerMethods<T, U> | (RequestHandler | ServerMethods<T, U>)[]
) => methods

export const createMiddleware = (middleware: RequestHandler | RequestHandler[]) => middleware

export type ControllerTree = {
  name: string
  controller?: ServerMethods<any, any> | (RequestHandler | ServerMethods<any, any>)[]
  middleware?: RequestHandler | RequestHandler[]
  children?: {
    names?: ControllerTree[]
    value?: ControllerTree
  }
}

const methodsToHandler = (
  methodCallback: ServerMethods<any, any>[LowerHttpMethod],
  numberTypeParams: string[]
): RequestHandler => async (req, res) => {
  const result = (await methodCallback({
    query: req.query,
    path: req.path,
    method: req.method as HttpMethod,
    reqBody: {},
    reqHeaders: {},
    params: numberTypeParams.reduce(
      (p, c) => ({
        ...p,
        [c]: +p[c]
      }),
      req.params as Record<string, string | number>
    ),
    user: (req as any).user
  }).catch(() => ({ status: 500, resBody: 'Internal Server Error' }))) as AllResponse<any, any>

  for (const key in result.resHeaders) {
    res.setHeader(key, result.resHeaders[key])
  }

  res.status(result.status).json(result.resBody)
}

export const createRouter = (ctrl: ControllerTree, numberTypeParams: string[] = []) => {
  const router = express.Router({ mergeParams: true })

  if (ctrl.middleware) {
    ;(Array.isArray(ctrl.middleware) ? ctrl.middleware : [ctrl.middleware]).forEach(handler => {
      router.use(handler)
    })
  }

  if (ctrl.controller) {
    if (Array.isArray(ctrl.controller)) {
      const controllers = [...ctrl.controller]
      const targetMethods = controllers.pop() as ServerMethods<any, any>
      for (const method in targetMethods) {
        ;(router.route('/') as any)[method]([
          ...controllers,
          methodsToHandler(targetMethods[method], numberTypeParams)
        ])
      }
    } else {
      for (const method in ctrl.controller) {
        ;(router.route('/') as any)[method](
          methodsToHandler(ctrl.controller[method], numberTypeParams)
        )
      }
    }
  }

  if (ctrl.children) {
    // eslint-disable-next-line no-unused-expressions
    ctrl.children.names?.forEach(n => {
      router.use(n.name, createRouter(n, numberTypeParams))
    })

    if (ctrl.children.value) {
      const pathName = ctrl.children.value.name.replace('_', ':').split('@')
      router.use(
        pathName[0],
        createRouter(
          ctrl.children.value,
          pathName[1] === 'number' ? [...numberTypeParams, pathName[0].slice(2)] : numberTypeParams
        )
      )
    }
  }

  return router
}
