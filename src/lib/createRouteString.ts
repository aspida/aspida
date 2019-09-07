const createImportPath = (filePath: string, inputDir: string) =>
  filePath.replace(new RegExp(`^${inputDir}`), '').replace(/(\/index)?\.(ts|js)$/, '')
const createCondition = (filePath: string, inputDir: string, methods: string) => `
  {
    path: '${createImportPath(filePath, inputDir)}',
    methods: ${methods}
  }`

export default (inputDir: string, target: 'es6' | 'cjs', pathList: string[]) =>
  target === 'es6'
    ? `${pathList
        .map(
          (filePath, i) => `import mock${i} from '.${createImportPath(filePath, inputDir)}'
`
        )
        .join('')}
export default [${pathList
        .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`))
        .join(',')}
]
`
    : `module.exports = [${pathList
        .map(filePath =>
          createCondition(filePath, inputDir, `require('.${createImportPath(filePath, inputDir)}')`)
        )
        .join(',')}
]
`
