export default `/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
'<% imports %>'

export const baseURL = '<% baseURL %>'

const api = (client: AxiosInstance = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\\/$/, '')

  return '<% api %>'
}

export type ApiInstance = ReturnType<typeof api>

export default api
`
