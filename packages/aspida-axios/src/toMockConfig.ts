import { HttpMethod } from 'aspida'
import { MockRequestConfig } from 'aspida-mock'
import { AxiosRequestConfig } from 'axios'

export default (config: AxiosRequestConfig): MockRequestConfig => ({
  path: config.url || '',
  method: (config.method || 'get').toUpperCase() as HttpMethod,
  query: config.params,
  reqBody: config.data,
  reqHeaders: config.headers
})
