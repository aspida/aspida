import { HttpMethod, AspidaParams, RequestType } from 'aspida'
import {
  MockClient,
  MockRoute,
  MockConfig,
  callMockHandler,
  printLog,
  hasMockHandler
} from 'aspida-mock'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosAdapter } from 'axios'
import settle from 'axios/lib/core/settle'
import aspidaClientFactory from './'
import toMockConfig from './toMockConfig'
import toAxiosResponse from './toAxiosResponse'

export default (
  client: AxiosInstance = axios,
  config?: AxiosRequestConfig
): MockClient<AxiosRequestConfig> => {
  const aspidaClient = aspidaClientFactory(client, config)
  let originalAdapter: AxiosAdapter | undefined
  let originalTransformRequest: AxiosRequestConfig['transformRequest'] | undefined
  let mockRoutes: MockRoute[] | undefined

  return {
    baseURL: config?.baseURL || axios.defaults.baseURL,

    fetch: (
      baseURL: string,
      url: string,
      method: HttpMethod,
      params?: AspidaParams<AxiosRequestConfig>,
      type?: RequestType
    ) =>
      aspidaClient.fetch(
        baseURL,
        url,
        method,
        params,
        mockRoutes && hasMockHandler(url, method, mockRoutes) ? 'any' : type
      ),

    attachRoutes(routes: MockRoute[], mockConfig?: MockConfig) {
      originalAdapter = client.defaults.adapter
      originalTransformRequest = client.defaults.transformRequest
      mockRoutes = routes

      client.defaults.adapter = config =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve, reject) => {
          const customConfig = toMockConfig(config)

          try {
            const result = await callMockHandler(customConfig, routes, mockConfig?.middleware)

            if (!result && originalAdapter) {
              originalAdapter(config).then(resolve, reject)
              return
            }

            const res = result ? toAxiosResponse(result, customConfig) : { status: 404, config }

            if (mockConfig?.log) printLog(customConfig, res.status)

            setTimeout(() => settle(resolve, reject, res), mockConfig?.delayMSec)
          } catch (e) {
            reject(e)
          }
        })

      client.defaults.transformRequest = data => data
    },

    detachRoutes() {
      client.defaults.adapter = originalAdapter
      client.defaults.transformRequest = originalTransformRequest
      originalAdapter = undefined
      mockRoutes = undefined
    }
  }
}
