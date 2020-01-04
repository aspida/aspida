export default `/* eslint-disable */
import { AspidaClient, optionToRequest } from 'aspida'
<% types %><% utils %><% imports %>

const apiBaseURL = '<% baseURL %>'

const api = (client: AspidaClient) => {
  const prefix = (client.baseURL === undefined ? apiBaseURL : client.baseURL).replace(/\\/$/, '')

  return <% api %>
}

type ApiInstance = ReturnType<typeof api>

export { ApiInstance, apiBaseURL<% ApiTypes %><% apiUtils %> }
export default api
`
