import { AspidaClient, AspidaRequest, HttpMethod } from 'aspida'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default (client: AxiosInstance = axios, config?: AxiosRequestConfig): AspidaClient => ({
  fetch(url: string, method: HttpMethod, request?: AspidaRequest) {
    const send = (responseType?: 'arraybuffer' | 'blob' | 'json' | 'text') => async () => {
      const { status, headers, data } = await client.request({
        ...config,
        url,
        method,
        responseType,
        data: request?.body,
        params: request?.query,
        headers: { ...config?.headers, ...request?.headers }
      })

      return { status, headers, body: data, data }
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
