const moduleName = "'axios-mock-server'"
const eslintComment = '/* eslint-disable */'
const createImportPath = (filePath: string, inputDir: string) =>
  filePath
    .replace(new RegExp(`^(.\\/)?${inputDir.replace(/^.\//, '').replace(/\/$/, '')}`), '')
    .replace(/\.(ts|js)$/, '')

const createCondition = (filePath: string, inputDir: string, methods: string) => `
  {
    path: '${createImportPath(filePath, inputDir).replace(/(\/index)$/, '') || '/'}',
    methods: ${methods}
  }`

export default (
  inputDir: string,
  target: 'es6' | 'cjs',
  isTS: boolean,
  pathList: string[],
  baseURL = ''
) =>
  target === 'es6'
    ? `${eslintComment}
${
  isTS
    ? `import { AxiosInstance } from 'axios'
`
    : ''
}import mockServer from ${moduleName}
${pathList
  .map(
    (filePath, i) => `import mock${i} from '.${createImportPath(filePath, inputDir)}'
`
  )
  .join('')}
export default (client${
        isTS ? '?: AxiosInstance' : ''
      }) => mockServer([${pathList
        .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`))
        .join(',')}
], client, '${baseURL}')
`
    : `${eslintComment}
${
  isTS
    ? `import { AxiosInstance } = require('axios')
`
    : ''
}module.exports = (client${
        isTS ? '?: AxiosInstance' : ''
      }) => require(${moduleName})([${pathList
        .map(filePath =>
          createCondition(filePath, inputDir, `require('.${createImportPath(filePath, inputDir)}')`)
        )
        .join(',')}
], client, '${baseURL}')
`
