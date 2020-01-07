import { AxiosRequestConfig } from 'axios'
import { MockResponse } from './types'

const copyData = (data?: any) =>
  data && typeof data !== 'string' ? JSON.parse(JSON.stringify(data)) : data
const arrayToObj = (mockRes: MockResponse) =>
  Array.isArray(mockRes) ? { status: mockRes[0], data: mockRes[1], headers: mockRes[2] } : mockRes

export default (mockRes: MockResponse, config: AxiosRequestConfig) => {
  const { status, data, headers } = arrayToObj(mockRes)

  return {
    status,
    data: copyData(data),
    headers,
    config
  }
}
