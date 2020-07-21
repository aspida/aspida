import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { MockResponse } from 'aspida-mock'

export default (mockRes: MockResponse, config: AxiosRequestConfig): AxiosResponse => ({
  status: mockRes.status,
  statusText: `${mockRes.status}`,
  data: mockRes.resBody,
  headers: mockRes.resHeaders,
  config
})
