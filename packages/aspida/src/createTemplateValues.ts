import path from 'path'
import createMethods from './createMethodsString'
import { Method } from './parseInterface'
import { DirentTree } from './getDirentTree'

export default (direntTree: DirentTree, trailingSlash: boolean) => {
  const imports: string[] = []
  const getMethodsString = (file: string, methods: Method[], indent: string, newUrl: string) => {
    const importName = `Methods${imports.length}`
    imports.push(`import { Methods as ${importName} } from '${file.replace(/'/g, "\\'")}'`)
    return createMethods(methods, indent, importName, newUrl, trailingSlash)
  }

  let valCount = 0

  const createApiString = (
    tree: DirentTree,
    importBasePath: string,
    indent: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ): string => {
    const props = tree.children
      .map(dirent => {
        const file = dirent.name
        const basename = path.basename(file, '.ts')
        let valFn = `${indent}${basename
          .replace(/[^a-zA-Z0-9$_]/g, '_')
          .replace(/^(\d)/, '$$$1')}: {\n<% next %>\n${indent}}`
        let newUrl = `${url}/${basename}`

        if (file.startsWith('_')) {
          let [valName, valType = 'number | string'] = basename.split('@')

          if (/^[A-Z]/.test(valType)) {
            valType = `ApiTypes.${valType}`
          }

          const duplicatedNames = tree.children.filter(d => d.name.startsWith(valName))

          valFn = `${indent}${valName.replace(/\./g, '_')}${
            duplicatedNames.length > 1 ? `_${duplicatedNames.indexOf(dirent)}` : ''
          }: (val${valCount}: ${valType}) => ({\n<% next %>\n${indent}})`
          newUrl = `${url}/\${val${valCount}}${valName.replace(/^[^.]+/, '')}`
          valCount += 1
        }

        if (dirent.isDir) {
          const methodsOfIndexTsFile =
            tree.children.find(c => c.name === `${file}.ts`) ??
            dirent.tree.children.find(c => c.name === 'index.ts')

          return createApiString(
            dirent.tree,
            `${importBasePath}/${file}`,
            `${indent}  `,
            newUrl,
            valFn.replace('<% next %>', '<% props %>'),
            methodsOfIndexTsFile?.isDir === false
              ? getMethodsString(
                  `${importBasePath}/${file}`,
                  methodsOfIndexTsFile.methods,
                  indent,
                  newUrl
                )
              : undefined
          )
        } else if (file !== 'index.ts' && tree.children.every(d => d.name !== basename)) {
          return valFn.replace(
            '<% next %>',
            getMethodsString(`${importBasePath}/${basename}`, dirent.methods, indent, newUrl)
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
  let api = createApiString(
    direntTree,
    '.',
    '    ',
    '',
    `{\n<% props %>\n  }`,
    rootIndexData && !rootIndexData.isDir
      ? getMethodsString('./index', rootIndexData.methods, '  ', '')
      : undefined
  )

  while (emptyMethodsRegExp.test(api)) {
    api = api.replace(emptyMethodsRegExp, '')
  }

  return { api, imports }
}
