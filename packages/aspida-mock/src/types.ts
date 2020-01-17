import { LowerHttpMethod, AspidaMethods, AspidaMethodParams } from 'aspida'

type RequestParams<T extends AspidaMethods[LowerHttpMethod]> = T extends AspidaMethodParams
  ? {
      values: { [key: string]: string | number }
      query: T['query'] extends Record<string, any> | undefined ? T['query'] : undefined
      reqData: T['reqData'] extends Record<string, any> | undefined ? T['reqData'] : undefined
      reqHeaders: T['reqHeaders'] extends Record<string, any> | undefined
        ? T['reqHeaders']
        : undefined
    }
  : {
      values: undefined
      query: undefined
      reqData: undefined
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
  resData: T
}

type HeadersResponse<T> = {
  status: Status['ok']
  resHeaders: T
}

type AllResponse<T, U> = {
  status: Status['ok']
  resData: T
  resHeaders: U
}

type ErrorResponse = {
  status: Status['err']
  resData?: any
  resHeaders?: any
}

export type MockResponse<
  K extends AspidaMethods[LowerHttpMethod] = { resHeaders: {}; resData: {} }
> = K extends AspidaMethodParams
  ?
      | (K['resData'] extends Record<string, any> | undefined
          ? K['resHeaders'] extends Record<string, any> | undefined
            ? AllResponse<K['resData'], K['resHeaders']>
            : DataResponse<K['resData']>
          : K['resHeaders'] extends Record<string, any> | undefined
          ? HeadersResponse<K['resHeaders']>
          : StatusResponse)
      | ErrorResponse
  : {}

export type MockMethods<T extends AspidaMethods> = {
  [K in keyof T]?: T[K] extends undefined
    ? undefined
    : ({
        values,
        query,
        reqData,
        reqHeaders
      }: RequestParams<T[K]>) => MockResponse<T[K]> | Promise<MockResponse<T[K]>>
}
