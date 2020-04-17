const createImportPath = (filePath: string, inputDir: string) =>
  filePath
    .replace(new RegExp(`^(.\\/)?${inputDir.replace(/^.\//, '').replace(/\/$/, '')}`), '')
    .replace(/'/g, "\\'")
    .replace(/\.ts$/, '')

const createCondition = (
  filePath: string,
  inputDir: string,
  methods: string,
  trailingSlash: boolean
) => `
  { path: '${createImportPath(filePath, inputDir).replace(/(\/index)$/, '') || ''}${
  trailingSlash ? '/' : ''
}', methods: ${methods} }`

export default (
  inputDir: string,
  trailingSlash: boolean,
  hasMiddleware: boolean,
  pathList: string[]
) =>
  `/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
${hasMiddleware ? "import baseMiddleware from './@middleware'\n" : ''}import api from './$api'
${pathList
  .map((filePath, i) => `import mock${i} from '.${createImportPath(filePath, inputDir)}'\n`)
  .join('')}
export const mockRoutes = () => [${pathList
    .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`, trailingSlash))
    .join(',')}
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {${
    hasMiddleware
      ? '\n  const middleware = [...baseMiddleware, ...(config && config.middleware || [])]'
      : ''
  }
  client.attachRoutes(mockRoutes(), ${hasMiddleware ? '{ ...config, middleware }' : 'config'})

  return api(client)
}\n`
