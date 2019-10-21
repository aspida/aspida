import 'url-search-params-polyfill'

import { AxiosInstance } from 'axios'
import { MockRoute, HttpMethod, MockResponse, MockMethods } from './types'
import MockServer from './MockServer'
import asyncResponse from './asyncResponse'

export { asyncResponse, MockServer, MockRoute, HttpMethod, MockResponse, MockMethods }

export default (route?: MockRoute, client?: AxiosInstance, baseURL = '') =>
  new MockServer(route, client, baseURL)

/* eslint-disable dot-notation */
module.exports = exports['default']
module.exports.default = exports['default']
module.exports.asyncResponse = asyncResponse
