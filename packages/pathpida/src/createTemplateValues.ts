import fs from 'fs'
import path from 'path'
import createMethods from './createMethodsString'

export default (input: string, trailingSlash: boolean) => {
  const imports: string[] = []
  const getImportName = (file: string) => {
    const typeName = 'Query'
    const queryRegExp = new RegExp(`export (interface ${typeName} ?{|type ${typeName} ?= ?{)`)
    const fileData = fs.readFileSync(file, 'utf8')

    if (queryRegExp.test(fileData)) {
      const [, typeText, targetText] = fileData.split(queryRegExp)
      let cursor = 0
      let depth = 1

      while (depth && cursor <= targetText.length) {
        if (targetText[cursor] === '}') {
          depth -= 1
        } else if (targetText[cursor] === '{') {
          depth += 1
        }

        cursor += 1
      }

      const importName = `${typeName}${imports.length}`
      imports.push(`${typeText.replace(typeName, importName)}${targetText.slice(0, cursor)}\n`)
      return importName
    }
  }

  let valCount = 0

  const createQueryString = (
    targetDir: string,
    importBasePath: string,
    indent: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ) => {
    const props: string[] = []

    indent += '  '

    fs.readdirSync(targetDir)
      .sort()
      .forEach((file, _, arr) => {
        const basename = path.basename(file, path.extname(file))
        let valFn = `${indent}${basename
          .replace(/(-|\.|!| |'|\*|\(|\))/g, '_')
          .replace(/^(\d)/, '$$$1')}: {\n<% next %>\n${indent}}`
        let newUrl = `${url}/${basename}`

        const isNuxtLikeDynamicPath = basename.startsWith('_')

        if (isNuxtLikeDynamicPath || (basename.startsWith('[') && basename.endsWith(']'))) {
          valFn = `${indent}${
            isNuxtLikeDynamicPath ? basename : `_${basename.slice(1, -1)}`
          }: (val${valCount}: number | string) => ({\n<% next %>\n${indent}})`

          newUrl = `${url}/\${val${valCount}}`
          valCount += 1
        }

        const target = path.posix.join(targetDir, file)

        if (fs.statSync(target).isFile() && basename !== 'index' && !arr.includes(basename)) {
          props.push(
            valFn.replace(
              '<% next %>',
              createMethods(indent, getImportName(target), newUrl, trailingSlash)
            )
          )
        } else if (fs.statSync(target).isDirectory()) {
          const indexFile = fs
            .readdirSync(target)
            .find(name => path.basename(name, path.extname(name)) === 'index')
          let methods

          if (indexFile) {
            methods = createMethods(
              indent,
              getImportName(path.posix.join(target, indexFile)),
              newUrl,
              trailingSlash
            )
          }

          props.push(
            createQueryString(
              target,
              `${importBasePath}/${file}`,
              indent,
              newUrl,
              valFn.replace('<% next %>', '<% props %>'),
              methods
            )
          )
        }
      })

    return text.replace(
      '<% props %>',
      `${props.join(',\n')}${
        methodsOfIndexTsFile ? `${props.length ? ',\n' : ''}${methodsOfIndexTsFile}` : ''
      }`
    )
  }

  const rootIndexFile = fs
    .readdirSync(input)
    .find(name => path.basename(name, path.extname(name)) === 'index')
  const rootIndent = '  '
  let rootMethods

  if (rootIndexFile) {
    rootMethods = createMethods(
      rootIndent,
      getImportName(path.posix.join(input, rootIndexFile)),
      '',
      trailingSlash
    )
  }

  return {
    api: createQueryString(input, '.', rootIndent, '', `{\n<% props %>\n  }`, rootMethods),
    imports
  }
}
