export default `/* eslint-disable */
import { AspidaClient, optionToRequest } from 'aspida'
<% types %><% utils %><% imports %>

const api = (client: AspidaClient, baseURL?: string) => {
  const prefix = (baseURL === undefined ? '<% baseURL %>' : baseURL).replace(/\\/$/, '')

  return <% api %>
}
<% exports %>
export type ApiInstance = ReturnType<typeof api>
export default api
`
