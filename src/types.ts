import { AxiosRequestConfig } from 'axios'
import createValues from './createValues'

export const httpMethods = ['get', 'post', 'put', 'delete', 'head', 'patch'] as const

export type HttpMethod = typeof httpMethods[number]

export type MockResponse = [number, any?, { [key: string]: any }?]

export type MockMethods = {
  [T in HttpMethod]?: ({
    config,
    values,
    data
  }: {
    config: AxiosRequestConfig
    values: ReturnType<typeof createValues>
    data: any
  }) => MockResponse | Promise<MockResponse>
}

type Handler = [RegExp, string, MockMethods[HttpMethod]]
export type HandlersSet = { [key in HttpMethod]?: Handler[] }

export type MockRoute = ({
  path: string
  methods: MockMethods
})[]
