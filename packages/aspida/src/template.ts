export default `/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
<% types %><% utils %><% imports %>

const apiBaseURL = '<% baseURL %>'

const api = (client: AxiosInstance = axios) => {
  const prefix = (client.defaults.baseURL ? '' : apiBaseURL).replace(/\\/$/, '')

  return <% api %>
}

type ApiInstance = ReturnType<typeof api>

export { ApiInstance, apiBaseURL<% ApiTypes %><% apiUtils %> }
export default api
`
