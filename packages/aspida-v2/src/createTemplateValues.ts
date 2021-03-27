import createMethods from './createMethodsString'
import createDocComment from './createDocComment'
import type { DirentTree, FileData } from './getDirentTree'
import type { Method } from './parseInterface'

const toJSValidString = (text: string) =>
  text.replace(/[^a-zA-Z0-9$_]/g, '_').replace(/^(\d)/, '$$$1')

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
    imports.push(`import type { Methods as ${importName} } from '${filepath.replace(/'/g, "\\'")}'`)
    let newPath = `'${decodeURIComponent(newUrl)}${trailingSlash ? '/' : ''}'`
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

  const createApiString = (
    tree: DirentTree,
    importBasePath: string,
    indent: string,
    dirDeps: number,
    prefix: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ): string => {
    const props = tree.children
      .map(dirent => {
        const filename = dirent.name
        const basename = dirent.isDir ? filename : filename.replace(/\.ts$/, '')
        const hasVal = filename.startsWith('[')
        let valFn = `${indent}${toJSValidString(
          decodeURIComponent(basename)
        )}: {\n<% next %>\n${indent}}`
        let newPrefix = prefix
        let newUrl = `${url}/${basename}`

        if (hasVal) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const [slug, valName, valType] = basename.match(/^\[([a-zA-Z][a-zA-Z0-9_]*)@?(.+?)?]/)!
          const postfix = decodeURIComponent(basename.replace(slug, ''))
          const prevUrl = `'${decodeURIComponent(url)}${trailingSlash ? '/' : ''}'`
          if (url.length && !pathes.includes(prevUrl)) pathes.push(prevUrl)

          const duplicatedNames = tree.children.filter(d => d.name.startsWith(`[${valName}@`))
          const prefixVal = `\`${prefix ? `\${${prefix}}` : ''}${
            url.length ? `\${PATH${pathes.indexOf(prevUrl)}}` : ''
          }${url.length && trailingSlash ? '' : '/'}\${val${dirDeps}}${postfix}\``

          newPrefix = `prefix${dirDeps}`
          newUrl = ''
          valFn = `${indent}${toJSValidString(valName)}${
            duplicatedNames.length > 1 && valType ? `_${valType}` : ''
          }${toJSValidString(postfix)}: (val${dirDeps}: ${
            valType ?? 'number | string'
          }) => {\n${indent}  const ${newPrefix} = ${prefixVal}\n\n${indent}  return {\n<% next %>\n${indent}  }\n${indent}}`
        }

        if (dirent.isDir) {
          const methodsOfIndexTsFile =
            tree.children.find(c => c.name === `${filename}.ts`) ??
            dirent.tree.children.find(c => c.name === 'index.ts')

          return createApiString(
            dirent.tree,
            `${importBasePath}/${filename}`,
            `${indent}${hasVal ? '  ' : ''}  `,
            dirDeps + 1,
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
    0,
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
