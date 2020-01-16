const createImportPath = (filePath: string, inputDir: string) =>
  filePath
    .replace(new RegExp(`^(.\\/)?${inputDir.replace(/^.\//, '').replace(/\/$/, '')}`), '')
    .replace(/\.(ts|js)$/, '')

const createCondition = (filePath: string, inputDir: string, methods: string) => `
  {
    path: '${createImportPath(filePath, inputDir).replace(/(\/index)$/, '') || '/'}',
    methods: ${methods}
  }`

export default (inputDir: string, pathList: string[]) =>
  `/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'aspida-mock'
${pathList
  .map(
    (filePath, i) => `import mock${i} from '.${createImportPath(filePath, inputDir)}'
`
  )
  .join('')}
export default (client?: AxiosInstance) => mockServer([${pathList
    .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`))
    .join(',')}
], client)
`
