import fs from 'fs'
import path from 'path'
import template from './template'
import createTemplateValues from './createTemplateValues'

export default (input: string, baseURL = '') => {
  const { api, imports } = createTemplateValues(input)
  const hasTypes =
    fs.existsSync(path.join(input, '@types')) || fs.existsSync(path.join(input, '@types.ts'))
  const hasUtils =
    fs.existsSync(path.join(input, '@utils')) || fs.existsSync(path.join(input, '@utils.ts'))

  const text = template
    .replace(
      '<% types %>',
      hasTypes
        ? `import * as ApiTypes from './@types'
`
        : ''
    )
    .replace('<% ApiTypes %>', hasTypes ? ', ApiTypes' : '')
    .replace(
      '<% utils %>',
      hasUtils
        ? `import * as apiUtils from './@utils'
`
        : ''
    )
    .replace('<% apiUtils %>', hasUtils ? ', apiUtils' : '')
    .replace('<% imports %>', imports.map(i => i.replace(input, '.')).join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(input, '$api.ts') }
}
