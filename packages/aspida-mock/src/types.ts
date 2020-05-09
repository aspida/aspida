import { HttpMethod, AspidaMethods, AspidaMethodParams } from 'aspida'

type RequestParams<T extends AspidaMethodParams> = {
  path: string
  method: HttpMethod
  values: Record<string, string | number>
} & Pick<T, 'query' | 'reqBody' | 'reqHeaders'>

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
  resBody?: T
  resHeaders?: U
}

type DataResponse<T, U> = {
  status: Status['ok']
  resBody: T
  resHeaders?: U
}

type HeadersResponse<T, U> = {
  status: Status['ok']
  resBody?: T
  resHeaders: U
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

export type PartialResponse = SubAllResponse<any, any> | OtherResponse

export type MockResponse<K extends AspidaMethodParams = { resBody: {}; resHeaders: {} }> =
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

export type MockMethods<T extends AspidaMethods> = {
  [K in keyof T]?: (req: RequestParams<T[K]>) => MockResponse<T[K]> | Promise<MockResponse<T[K]>>
}
