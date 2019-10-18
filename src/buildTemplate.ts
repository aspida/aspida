import path from 'path'
import template from './template'
import createTemplateValues from './createTemplateValues'

export default (input: string, baseURL = '') => {
  const { api, imports } = createTemplateValues(input)

  const text = template
    .replace("'<% imports %>'", imports.map(i => i.replace(input, '.')).join('\n'))
    .replace("'<% api %>'", api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(input, '$api.ts') }
}
