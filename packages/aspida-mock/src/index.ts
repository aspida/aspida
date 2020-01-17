import { AspidaMethods, HttpMethod } from 'aspida'
import { MockMethods } from './types'

export const mockMethods = <T extends AspidaMethods>(methods: MockMethods<T>) => methods

export interface MockRoute<T extends AspidaMethods = AspidaMethods> {
  path: string
  methods: MockMethods<T>
}

export interface MockConfig {
  log?: boolean
  delay?: number
}

export interface MockClient {
  initMock<T>(this: T, route: MockRoute[], config?: MockConfig): T
  resetMock<T>(this: T): T
}

export interface MockRequestConfig {
  path: string
  method: HttpMethod
  reqData?: any
  reqHeaders?: any
  query?: any
}
