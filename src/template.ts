export default `/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
'<% imports %>'

export const baseURL = '<% baseURL %>'

export default (client: AxiosInstance = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\\/$/, '')

  return '<% api %>'
}
`
