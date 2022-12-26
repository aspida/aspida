import {
  AspidaClient,
  AspidaParams,
  dataToURLString,
  HttpMethod,
  optionToRequest,
  RequestType
} from 'aspida'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default (
  client: AxiosInstance = axios,
  config?: AxiosRequestConfig
): AspidaClient<AxiosRequestConfig> => ({
  baseURL: config?.baseURL || client.defaults.baseURL,
  fetch(
    baseURL: string,
    url: string,
    method: HttpMethod,
    params?: AspidaParams<AxiosRequestConfig>,
    type?: RequestType
  ) {
    const send = (responseType?: 'arraybuffer' | 'blob' | 'json' | 'text') => async () => {
      const request = optionToRequest(params, type)
      const res = await client.request({
        paramsSerializer: {
          serialize: params => dataToURLString(params)
        },
        ...config,
        url,
        baseURL,
        method,
        responseType,
        ...request?.config,
        data: request?.httpBody,
        params: request?.query,
        headers: {
          ...config?.headers,
          ...request?.config?.headers,
          ...request?.headers
        }
      })
      const { status, headers, data } = res as any

      return { status, headers, body: data, originalResponse: res }
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
})
