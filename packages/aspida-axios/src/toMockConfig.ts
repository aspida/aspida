import { HttpMethod } from 'aspida'
import { AxiosRequestConfig } from 'axios'
import { MockRequestConfig } from 'aspida-mock'

export default (config: AxiosRequestConfig): MockRequestConfig => ({
  path: config.url || '',
  method: (config.method || 'get').toUpperCase() as HttpMethod,
  query: config.params,
  reqBody: config.data,
  reqHeaders: config.headers
})
