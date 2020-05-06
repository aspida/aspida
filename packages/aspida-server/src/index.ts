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

export const createMiddleware = (middleware: RequestHandler[]) => middleware

export type ControllerTree = {
  name: string
  controller?: ServerMethods<any, any> | (RequestHandler | ServerMethods<any, any>)[]
  middleware?: RequestHandler[]
  children?: {
    names?: ControllerTree[]
    value?: ControllerTree
  }
}

const methodsToHandler = (methods: ServerMethods<any, any>): RequestHandler => async (req, res) => {
  if (!methods[req.method.toLowerCase()]) {
    res.status(404).send(`Cannot ${req.method} ${req.path}`)
    return
  }

  const result: any = await methods[req.method.toLowerCase()]({
    query: req.query,
    path: req.path,
    method: req.method as HttpMethod,
    reqBody: {},
    reqHeaders: {},
    params: req.params,
    user: (req as any).user
  })

  Object.entries((result.resHeaders as Record<string, any>) ?? {}).forEach(([key, val]) => {
    res.setHeader(key, val)
  })
  res.status(result.status).send(result.resBody)
}

/* eslint-disable no-unused-expressions */
export const createRouter = (ctrl: ControllerTree) => {
  const router = express.Router({ mergeParams: true })

  ctrl.middleware?.forEach(handler => {
    router.use(handler)
  })

  if (ctrl.controller) {
    const methods = (Array.isArray(ctrl.controller) ? ctrl.controller : [ctrl.controller]).map(m =>
      typeof m === 'object' ? methodsToHandler(m) : m
    )
    router.route('/').all(methods)
  }

  if (ctrl.children) {
    ctrl.children.names?.forEach(n => {
      router.use(n.name, createRouter(n))
    })

    if (ctrl.children.value) {
      router.use(ctrl.children.value.name.replace('_', ':'), createRouter(ctrl.children.value))
    }
  }

  return router
}
