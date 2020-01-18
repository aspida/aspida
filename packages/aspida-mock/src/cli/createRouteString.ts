const createImportPath = (filePath: string, inputDir: string) =>
  filePath
    .replace(new RegExp(`^(.\\/)?${inputDir.replace(/^.\//, '').replace(/\/$/, '')}`), '')
    .replace(/\.ts$/, '')

const createCondition = (filePath: string, inputDir: string, methods: string) => `
    {
      path: '${createImportPath(filePath, inputDir).replace(/(\/index)$/, '') || '/'}',
      methods: ${methods}
    }`

export default (inputDir: string, pathList: string[]) =>
  `/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import api from './$api'
${pathList
  .map((filePath, i) => `import mock${i} from '.${createImportPath(filePath, inputDir)}'\n`)
  .join('')}
export default <U>(client: MockClient<U>, config?: MockConfig) => {
  client.attachRoutes([${pathList
    .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`))
    .join(',')}
  ], config)

  return api(client)
}\n`
