import { AspidaClient, optionToRequest, HttpMethod, AspidaParams, RequestType } from 'aspida'
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
      const { status, headers, data } = res as any

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
})
