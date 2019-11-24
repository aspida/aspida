import { AxiosRequestConfig } from 'axios'
import createValues from './createValues'
import compositeParams from './compositeParams'

export const httpMethods = ['get', 'post', 'put', 'delete', 'head', 'patch'] as const

export type HttpMethod = typeof httpMethods[number]

export type MockResponse =
  | [number, any?, { [key: string]: any }?]
  | { status: number; data?: any; headers?: { [key: string]: any } }

export type MockMethods = {
  [T in HttpMethod]?: ({
    config,
    values,
    params,
    data
  }: {
    config: AxiosRequestConfig
    values: ReturnType<typeof createValues>
    params: ReturnType<typeof compositeParams>
    data: any
  }) => MockResponse | Promise<MockResponse>
}

type Handler = [RegExp, string, MockMethods[HttpMethod]]
export type HandlersSet = { [key in HttpMethod]?: Handler[] }

export type MockRoute = {
  path: string
  methods: MockMethods
}[]
