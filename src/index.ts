import { AxiosInstance } from 'axios'
import { MockRoute, HttpMethod, MockResponse, MockMethods } from './types'
import MockServer from './MockServer'
import toDataURI from './toDataURI'
import asyncResponse from './asyncResponse'

export { toDataURI, asyncResponse, MockServer, MockRoute, HttpMethod, MockResponse, MockMethods }

export default (route?: MockRoute, client?: AxiosInstance) => new MockServer(route, client)
