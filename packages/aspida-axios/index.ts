import { AspidaClient, AspidaRequest, HttpMethod } from 'aspida'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default (client: AxiosInstance = axios, config?: AxiosRequestConfig): AspidaClient<AxiosRequestConfig> => ({
  baseURL: config?.baseURL || axios.defaults.baseURL,
  fetch<T>(baseURL: string, url: string, method: HttpMethod, request?: AspidaRequest<T, AxiosRequestConfig>) {
    const send = (responseType?: 'arraybuffer' | 'blob' | 'json' | 'text') => async () => {
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
})
