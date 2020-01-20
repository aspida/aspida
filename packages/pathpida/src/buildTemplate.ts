import path from 'path'
import { Config } from './getConfig'
import createTemplateValues from './createTemplateValues'

export interface Template {
  text: string
  filePath: string
}

export default ({ input, baseURL, output, trailingSlash }: Config): Template => {
  const { api, imports } = createTemplateValues(input, trailingSlash)

  const text = `/* eslint-disable */${
    api.includes('dataToURLString') ? "\nimport { dataToURLString } from 'aspida'\n" : ''
  }
${imports.map(i => i.replace(input, '.')).join('\n')}
const path = (baseURL?: string) => {
  const prefix = (baseURL === undefined ? '${baseURL}' : baseURL).replace(/\\/$/, '')

  return ${api}
}

export type PathInstance = ReturnType<typeof path>
export default path
`

  return { text, filePath: path.posix.join(output, '$path.ts') }
}
