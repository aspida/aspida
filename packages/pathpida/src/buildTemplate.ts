import fs from 'fs'
import path from 'path'
import { Config } from './getConfig'
import createTemplateValues from './createTemplateValues'

export interface Template {
  text: string
  filePath: string
}

const dataToURLString = (fs
  .readFileSync(path.join(__dirname, '../../aspida/src/index.ts'), 'utf8')
  .match(/pathpida:dataToURLString ->([\s\S]+?)\/\/ <- pathpida:dataToURLString/) || [])[1].replace(
  'export ',
  ''
)

export default ({ input, baseURL, output, trailingSlash }: Config): Template => {
  const { api, imports } = createTemplateValues(input, trailingSlash)

  const text = `/* eslint-disable */
${imports.map(i => i.replace(input, '.')).join('\n')}${
    api.includes('dataToURLString') ? dataToURLString : ''
  }
const path = (baseURL?: string) => {
  const prefix = (baseURL === undefined ? '${baseURL}' : baseURL).replace(/\\/$/, '')

  return ${api}
}

export type PathInstance = ReturnType<typeof path>
export default path
`

  return { text, filePath: path.posix.join(output, '$path.ts') }
}
