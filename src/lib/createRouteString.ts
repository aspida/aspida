const createCondition = (filePath: string, inputDir: string, methods: string) => `
  {
    path: '${filePath.replace(new RegExp(`^${inputDir}`), '').replace(/\.(ts|js)$/, '')}',
    methods: ${methods}
  }`

export default (inputDir: string, target: 'es6' | 'cjs', pathList: string[]) =>
  target === 'es6'
    ? `${pathList
        .map(
          (filePath, i) => `import mock${i} from '${filePath}'
`
        )
        .join('')}
export default [${pathList
        .map((filePath, i) => createCondition(filePath, inputDir, `mock${i}`))
        .join(',')}
]`
    : `module.exports = [${pathList
        .map(filePath => createCondition(filePath, inputDir, `require('${filePath}')`))
        .join(',')}
]`
