import createMethods from './createMethodsString'
import createDocComment from './createDocComment'
import { DirentTree, FileData } from './getDirentTree'
import { Method } from './parseInterface'

export default (direntTree: DirentTree, basePath: string, trailingSlash: boolean) => {
  const imports: string[] = []
  const pathes: string[] = []
  const getMethodsString = (
    filepath: string,
    methods: Method[],
    indent: string,
    newPrefix: string,
    newUrl: string
  ) => {
    const importName = `Methods${imports.length}`
    imports.push(`import { Methods as ${importName} } from '${filepath.replace(/'/g, "\\'")}'`)
    let newPath = `'${newUrl}${trailingSlash ? '/' : ''}'`
    if (newPath.length > 2) {
      if (!pathes.includes(newPath)) pathes.push(newPath)
      newPath = `PATH${pathes.indexOf(newPath)}`
    }

    return createMethods(
      methods,
      indent,
      importName,
      newPrefix && newPath.length > 2 ? `\`\${${newPrefix}}\${${newPath}}\`` : newPrefix || newPath
    )
  }

  let valCount = 0

  const createApiString = (
    tree: DirentTree,
    importBasePath: string,
    indent: string,
    prefix: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ): string => {
    const props = tree.children
      .map(dirent => {
        const filename = dirent.name
        const basename = dirent.isDir ? filename : filename.replace(/\.ts$/, '')
        const hasVal = filename.startsWith('_')
        let valFn = `${indent}${decodeURIComponent(
          basename.replace(/[^a-zA-Z0-9$_]/g, '_').replace(/^(\d)/, '$$$1')
        )}: {\n<% next %>\n${indent}}`
        let newPrefix = prefix
        let newUrl = `${url}/${decodeURIComponent(basename)}`

        if (hasVal) {
          const valPathRegExp = /^_[a-zA-Z][a-zA-Z0-9]*(@number|@string)?((\.|%[0-9a-fA-F]{2})[a-zA-Z0-9]+)?$/
          if (!valPathRegExp.test(basename)) {
            throw new Error(
              `aspida \u001b[43m\u001b[31mERROR\u001b[0m '${basename}' does not match '${valPathRegExp.toString()}'.`
            )
          }

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const valName = basename.match(/^_[a-zA-Z][a-zA-Z0-9]*/)![0]
          const valType = basename.replace(valName, '').startsWith('@')
            ? basename.split('@')[1].slice(0, 6)
            : null
          const postfix = decodeURIComponent(
            basename.replace(valName, '').replace(valType ? `@${valType}` : '', '')
          )
          const prevUrl = `'${url}${trailingSlash ? '/' : ''}'`
          if (url.length && !pathes.includes(prevUrl)) pathes.push(prevUrl)

          const duplicatedNames = tree.children.filter(d => d.name.startsWith(valName))
          const prefixVal = `\`${prefix ? `\${${prefix}}` : ''}${
            url.length ? `\${PATH${pathes.indexOf(prevUrl)}}` : ''
          }${url.length && trailingSlash ? '' : '/'}\${val${valCount}}${postfix}\``

          newPrefix = `prefix${valCount}`
          newUrl = ''
          valFn = `${indent}${valName}${
            duplicatedNames.length > 1 && valType ? `_${valType}` : ''
          }${postfix.replace(/[^a-zA-Z0-9$_]/g, '_')}: (val${valCount}: ${
            valType ?? 'number | string'
          }) => {\n${indent}  const ${newPrefix} = ${prefixVal}\n\n${indent}  return {\n<% next %>\n${indent}  }\n${indent}}`
          valCount += 1
        }

        if (dirent.isDir) {
          const methodsOfIndexTsFile =
            tree.children.find(c => c.name === `${filename}.ts`) ??
            dirent.tree.children.find(c => c.name === 'index.ts')

          return createApiString(
            dirent.tree,
            `${importBasePath}/${filename}`,
            `${indent}${hasVal ? '  ' : ''}  `,
            newPrefix,
            newUrl,
            `${createDocComment(indent, (<FileData>methodsOfIndexTsFile)?.doc)}${valFn.replace(
              '<% next %>',
              '<% props %>'
            )}`,
            methodsOfIndexTsFile?.isDir === false
              ? getMethodsString(
                  `${importBasePath}/${filename}`,
                  methodsOfIndexTsFile.methods,
                  `${indent}${hasVal ? '  ' : ''}`,
                  newPrefix,
                  newUrl
                )
              : undefined
          )
        } else if (filename !== 'index.ts' && tree.children.every(d => d.name !== basename)) {
          return `${createDocComment(indent, dirent.doc)}${valFn.replace(
            '<% next %>',
            getMethodsString(
              `${importBasePath}/${basename}`,
              dirent.methods,
              `${indent}${hasVal ? '  ' : ''}`,
              newPrefix,
              newUrl
            )
          )}`
        }

        return null
      })
      .filter((p): p is string => !!p)

    return text.replace(
      '<% props %>',
      `${props.join(',\n')}${
        methodsOfIndexTsFile ? `${props.length ? ',\n' : ''}${methodsOfIndexTsFile}` : ''
      }`
    )
  }

  const emptyMethodsRegExp = /.+{\n\n? +},?\n/
  const rootIndexData = direntTree.children.find(c => c.name === 'index.ts')

  /* eslint-disable no-template-curly-in-string */
  let api = createApiString(
    direntTree,
    '.',
    '    ',
    '',
    basePath,
    `{\n<% props %>\n  }`,
    rootIndexData && !rootIndexData.isDir
      ? getMethodsString('.', rootIndexData.methods, '  ', '', basePath)
      : undefined
  )

  while (emptyMethodsRegExp.test(api)) {
    api = api.replace(emptyMethodsRegExp, '')
  }

  return { api, imports, pathes }
}
