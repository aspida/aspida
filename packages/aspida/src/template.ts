export default `/* eslint-disable */
import { AspidaClient } from 'aspida'
<% types %><% utils %><% imports %>

const api = <U>(client: AspidaClient<U>) => {
  const prefix = (client.baseURL === undefined ? '<% baseURL %>' : client.baseURL).replace(/\\/$/, '')

  return <% api %>
}
<% exports %>
export type ApiInstance = ReturnType<typeof api>
export default api
`
