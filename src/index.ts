import { AxiosInstance } from 'axios'
import { MockRoute, HttpMethod, MockResponse, MockMethods } from './types'
import MockServer from './MockServer'
import asyncResponse from './asyncResponse'

export { asyncResponse, MockServer, MockRoute, HttpMethod, MockResponse, MockMethods }

export default (route?: MockRoute, client?: AxiosInstance) => new MockServer(route, client)
