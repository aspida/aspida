import { AspidaClient, optionToRequest, HttpMethod, AspidaParams, RequestType } from 'aspida'
import { MockClient, MockRoute, MockConfig, callMockHandler, printLog } from 'aspida-mock'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosAdapter } from 'axios'
import settle from 'axios/lib/core/settle'
import toMockConfig from './toMockConfig'
import toAxiosResponse from './toAxiosResponse'

export default (
  client: AxiosInstance = axios,
  config?: AxiosRequestConfig
): MockClient & AspidaClient<AxiosRequestConfig> => {
  let originalAdapter: AxiosAdapter | undefined
  let mocking = false

  const fetchCallback = (
    baseURL: string,
    url: string,
    method: HttpMethod,
    params?: AspidaParams<AxiosRequestConfig>,
    type?: RequestType
  ) => {
    const send = (responseType?: 'arraybuffer' | 'blob' | 'json' | 'text') => async () => {
      const request = optionToRequest(params, type)
      const res = await client.request({
        url,
        baseURL,
        method,
        responseType,
        ...config,
        ...request?.config,
        data: request?.body,
        params: request?.query,
        headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers }
      })
      const { status, headers, data } = res

      return { status, headers, data, originalResponse: res }
    }

    return {
      send: send(),
      json: send('json'),
      text: send('text'),
      arrayBuffer: send('arraybuffer'),
      blob: send('blob'),
      formData: send()
    }
  }

  const mockCallback = (
    baseURL: string,
    url: string,
    method: HttpMethod,
    params?: AspidaParams<AxiosRequestConfig>
  ) => fetchCallback(baseURL, url, method, params, 'any')

  return {
    baseURL: config?.baseURL || axios.defaults.baseURL,
    get fetch() {
      return mocking ? mockCallback : fetchCallback
    },
    attachMock(routes: MockRoute[], mockConfig?: MockConfig) {
      mocking = true
      originalAdapter = client.defaults.adapter

      client.defaults.adapter = config =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve, reject) => {
          const customConfig = toMockConfig(config)

          try {
            const result = await callMockHandler(customConfig, routes)

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
      return this
    },
    detachMock() {
      mocking = false
      client.defaults.adapter = originalAdapter
      return this
    }
  }
}
