import { HttpMethod } from 'aspida'
import { AxiosRequestConfig } from 'axios'
import { MockRequestConfig } from 'aspida-mock'

export default (config: AxiosRequestConfig): MockRequestConfig => ({
  path: config.url || '',
  method: (config.method!.toUpperCase() as HttpMethod) || 'GET',
  query: config.params,
  reqData: config.data,
  reqHeaders: config.headers
})
