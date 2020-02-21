import { HttpMethod, LowerHttpMethod, AspidaMethods, AspidaMethodParams } from 'aspida'

type RequestParams<T extends AspidaMethods[LowerHttpMethod]> = T extends AspidaMethodParams
  ? {
      path: string
      method: HttpMethod
      values: Record<string, string | number>
      query: T['query'] extends Record<string, any> | undefined ? T['query'] : undefined
      reqBody: T['reqBody'] extends Record<string, any> | undefined ? T['reqBody'] : undefined
      reqHeaders: T['reqHeaders'] extends Record<string, any> | undefined
        ? T['reqHeaders']
        : undefined
    }
  : {
      path: string
      method: HttpMethod
      values: Record<string, string | number>
      query: undefined
      reqBody: undefined
      reqHeaders: undefined
    }

type Status = {
  ok: 200 | 201 | 203 | 204 | 205 | 206
  err: 400 | 401 | 402 | 403 | 404 | 405 | 500 | 501 | 502 | 503 | 504 | 505
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

type ErrorResponse = {
  status: Status['err']
  resBody?: any
  resHeaders?: any
}

export type PartialResponse =
  | {
      status: Status['ok']
      resBody?: any
      resHeaders?: any
    }
  | ErrorResponse

export type MockResponse<
  K extends AspidaMethods[LowerHttpMethod] = { resHeaders: {}; resBody: {} }
> = K extends AspidaMethodParams
  ?
      | (K['resBody'] extends Record<string, any> | undefined
          ? K['resHeaders'] extends Record<string, any> | undefined
            ? AllResponse<K['resBody'], K['resHeaders']>
            : DataResponse<K['resBody']>
          : K['resHeaders'] extends Record<string, any> | undefined
          ? HeadersResponse<K['resHeaders']>
          : StatusResponse)
      | ErrorResponse
  : {}

export type MockMethods<T extends AspidaMethods> = {
  [K in keyof T]?: T[K] extends undefined
    ? undefined
    : ({
        path,
        method,
        values,
        query,
        reqBody,
        reqHeaders
      }: RequestParams<T[K]>) => MockResponse<T[K]> | Promise<MockResponse<T[K]>>
}
