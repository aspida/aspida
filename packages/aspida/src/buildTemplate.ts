import fs from 'fs'
import path from 'path'
import { BaseConfig } from './getConfig'
import createTemplateValues from './createTemplateValues'

export interface Template {
  text: string
  filePath: string
}

export default ({ input, baseURL, trailingSlash }: BaseConfig): Template => {
  const { api, imports } = createTemplateValues(input, trailingSlash)
  const hasTypes =
    fs.existsSync(path.join(input, '@types')) || fs.existsSync(path.join(input, '@types.ts'))
  const hasUtils =
    fs.existsSync(path.join(input, '@utils')) || fs.existsSync(path.join(input, '@utils.ts'))
  const exportsList = [...(hasTypes ? ['ApiTypes'] : []), ...(hasUtils ? ['apiUtils'] : [])]

  const text = `/* eslint-disable */
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
    .replace('<% types %>', hasTypes ? `import * as ApiTypes from './@types'\n` : '')
    .replace('<% utils %>', hasUtils ? `import * as apiUtils from './@utils'\n` : '')
    .replace('<% imports %>', imports.map(i => i.replace(input, '.')).join('\n'))
    .replace('<% exports %>', exportsList.length ? `\nexport { ${exportsList.join(', ')} }` : '')
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(input, '$api.ts') }
}
