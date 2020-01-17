import { AxiosResponse } from 'axios'
import { MockRequestConfig } from './'
import { MockResponse } from './types'

export default (mockRes: MockResponse, config: MockRequestConfig): AxiosResponse => ({
  status: mockRes.status,
  statusText: `${mockRes.status}`,
  data: mockRes.resData,
  headers: mockRes.resHeaders,
  config: {
    url: config.path,
    method: config.method,
    params: config.query,
    data: config.reqData,
    headers: config.reqHeaders
  }
})
