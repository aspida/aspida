/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios'
'<% imports %>'

export const baseURL = '<% baseURL %>'

export default (client = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\/$/, '')

  return '<% api %>'
}
