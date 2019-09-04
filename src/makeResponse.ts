import { AxiosRequestConfig } from 'axios'
import { MockResponse } from './types'

export default ([status, data, headers]: MockResponse, config: AxiosRequestConfig) => ({
  status,
  data: data && data.toString() === '[object Object]' ? JSON.parse(JSON.stringify(data)) : data,
  headers,
  config
})
