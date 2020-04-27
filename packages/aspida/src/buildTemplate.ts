import path from 'path'
import { BaseConfig } from './getConfig'
import createTemplateValues from './createTemplateValues'

export type Template = {
  text: string
  filePath: string
}

export default ({ input, baseURL, trailingSlash }: BaseConfig): Template => {
  const { api, imports } = createTemplateValues(input, trailingSlash)
  const text = `/* eslint-disable */
import { AspidaClient } from 'aspida'
<% types %><% imports %>

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? '<% baseURL %>' : client.baseURL).replace(/\\/$/, '')

  return <% api %>
}

export type ApiInstance = ReturnType<typeof api>
export default api
`
    .replace(
      '<% types %>',
      api.includes(': ApiTypes.') ? `import * as ApiTypes from './@types'\n` : ''
    )
    .replace('<% imports %>', imports.map(i => i.replace(input, '.')).join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(input, '$api.ts') }
}
