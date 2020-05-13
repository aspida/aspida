import { AspidaClient, AspidaMethods, HttpMethod, dataToURLString } from 'aspida'
import { MockMethods, MockResponse, PartialResponse } from './types'
import callMockHandler, { hasMockHandler } from './callMockHandler'
import { createValues } from './utils'

export const mockMethods = <T extends AspidaMethods>(methods: MockMethods<T>) => methods

export const printLog = (config: MockRequestConfig, status: number) => {
  const searchString = dataToURLString(config.query || {})

  console.log(
    `[mock] ${config.method}: ${config.path}${searchString ? `?${searchString}` : ''} => ${status}`
  )
}

export type MockRoute = {
  path: string
  methods: MockMethods<any>
}

export type MockClient<U> = AspidaClient<U> & {
  attachRoutes(routes: MockRoute[], config?: MockConfig): void
  detachRoutes(): void
}

export type MockRequestConfig = {
  path: string
  method: HttpMethod
  reqBody: any | undefined
  reqHeaders: any | undefined
  query: any | undefined
}

export type MockRequestConfigAndValues = MockRequestConfig & {
  values: ReturnType<typeof createValues>
}

export type MiddlewareHandler = (
  req: MockRequestConfigAndValues,
  res: (res?: PartialResponse) => void,
  next: (req?: MockRequestConfigAndValues) => void
) => void | Promise<void>

export const mockMiddleware = (middleware: MiddlewareHandler[]) => middleware

export type MockConfig = {
  log?: boolean
  delayMSec?: number
  middleware?: MiddlewareHandler[]
}

export { MockResponse, callMockHandler, hasMockHandler }
