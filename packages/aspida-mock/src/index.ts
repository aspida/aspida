import { AspidaMethods, HttpMethod, dataToURLString } from 'aspida'
import { MockMethods, MockResponse } from './types'
import callMockHandler from './callMockHandler'

export const mockMethods = <T extends AspidaMethods>(methods: MockMethods<T>) => methods

export const printLog = (config: MockRequestConfig, status: number) => {
  const searchString = dataToURLString(config.query || {})

  console.log(
    `[mock] ${config.method}: ${config.path}${searchString ? `?${searchString}` : ''} => ${status}`
  )
}

export interface MockRoute<T extends AspidaMethods = AspidaMethods> {
  path: string
  methods: MockMethods<T>
}

export interface MockConfig {
  log?: boolean
  delayMSec?: number
}

export interface MockClient {
  attachMock<T>(this: T, route: MockRoute[], config?: MockConfig): T
  detachMock<T>(this: T): T
}

export interface MockRequestConfig {
  path: string
  method: HttpMethod
  reqData?: any
  reqHeaders?: any
  query?: any
}

export { MockResponse, callMockHandler }
