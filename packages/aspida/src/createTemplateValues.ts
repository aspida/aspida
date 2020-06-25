import path from 'path'
import createMethods from './createMethodsString'
import { Method } from './parseInterface'
import { DirentTree } from './getDirentTree'

export default (direntTree: DirentTree, trailingSlash: boolean) => {
  const imports: string[] = []
  const pathes: string[] = []
  const getMethodsString = (
    file: string,
    methods: Method[],
    indent: string,
    newPrefix: string,
    newUrl: string
  ) => {
    const importName = `Methods${imports.length}`
    imports.push(`import { Methods as ${importName} } from '${file.replace(/'/g, "\\'")}'`)
    let newPath = `'${newUrl}${trailingSlash ? '/' : ''}'`
    if (newPath.length > 2) {
      if (!pathes.includes(newPath)) pathes.push(newPath)
      newPath = `PATH${pathes.indexOf(newPath)}`
    }

    return createMethods(methods, indent, importName, newPrefix, newPath)
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
        const file = dirent.name
        const basename = path.basename(file, '.ts')
        const hasVal = file.startsWith('_')
        let valFn = `${indent}${basename
          .replace(/[^a-zA-Z0-9$_]/g, '_')
          .replace(/^(\d)/, '$$$1')}: {\n<% next %>\n${indent}}`
        let newPrefix = prefix
        let newUrl = `${url}/${basename}`

        if (hasVal) {
          let [valName, valType = 'number | string'] = basename.split('@')

          if (/^[A-Z]/.test(valType)) {
            valType = `ApiTypes.${valType}`
          }

          const prevUrl = `'${url}${trailingSlash ? '/' : ''}'`
          if (url.length && !pathes.includes(prevUrl)) pathes.push(prevUrl)

          const duplicatedNames = tree.children.filter(d => d.name.startsWith(valName))
          const prefixVal = `\`\${${prefix}}${
            url.length ? `\${PATH${pathes.indexOf(prevUrl)}}` : ''
          }${url.length && trailingSlash ? '' : '/'}\${val${valCount}}${valName.replace(
            /^[^.]+/,
            ''
          )}\``

          newPrefix = `prefix${valCount}`
          newUrl = ''
          valFn = `${indent}${valName.replace(/\./g, '_')}${
            duplicatedNames.length > 1 ? `_${duplicatedNames.indexOf(dirent)}` : ''
          }: (val${valCount}: ${valType}) => {\n${indent}  const ${newPrefix} = ${prefixVal}\n\n${indent}  return {\n<% next %>\n${indent}  }\n${indent}}`
          valCount += 1
        }

        if (dirent.isDir) {
          const methodsOfIndexTsFile =
            tree.children.find(c => c.name === `${file}.ts`) ??
            dirent.tree.children.find(c => c.name === 'index.ts')

          return createApiString(
            dirent.tree,
            `${importBasePath}/${file}`,
            `${indent}${hasVal ? '  ' : ''}  `,
            newPrefix,
            newUrl,
            valFn.replace('<% next %>', '<% props %>'),
            methodsOfIndexTsFile?.isDir === false
              ? getMethodsString(
                  `${importBasePath}/${file}`,
                  methodsOfIndexTsFile.methods,
                  `${indent}${hasVal ? '  ' : ''}`,
                  newPrefix,
                  newUrl
                )
              : undefined
          )
        } else if (file !== 'index.ts' && tree.children.every(d => d.name !== basename)) {
          return valFn.replace(
            '<% next %>',
            getMethodsString(
              `${importBasePath}/${basename}`,
              dirent.methods,
              `${indent}${hasVal ? '  ' : ''}`,
              newPrefix,
              newUrl
            )
          )
        }
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
    'prefix',
    '',
    `{\n<% props %>\n  }`,
    rootIndexData && !rootIndexData.isDir
      ? getMethodsString('./index', rootIndexData.methods, '  ', 'prefix', '')
      : undefined
  )

  while (emptyMethodsRegExp.test(api)) {
    api = api.replace(emptyMethodsRegExp, '')
  }

  return { api, imports, pathes }
}
