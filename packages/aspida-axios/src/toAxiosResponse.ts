import { MockResponse } from 'aspida-mock'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export default (mockRes: MockResponse, config: AxiosRequestConfig): AxiosResponse => ({
  status: mockRes.status,
  statusText: `${mockRes.status}`,
  data: mockRes.resBody,
  headers: mockRes.resHeaders,
  config
})
