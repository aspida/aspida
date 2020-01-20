import fs from 'fs'
import path from 'path'
import createMethods from './createMethodsString'

export default (input: string, trailingSlash: boolean) => {
  const imports: string[] = []
  const getImportName = (file: string) => {
    const queryRegExp = /export interface Query {[\s\S]+?\n}\n/
    const fileData = fs.readFileSync(file, 'utf8')
    let importName = ''
    if (queryRegExp.test(fileData)) {
      importName = `Query${imports.length}`
      imports.push(
        fileData
          .match(queryRegExp)![0]
          .replace('export ', '')
          .replace('Query', importName)
      )
    }
    return importName
  }

  let valCount = 0

  const createQueryString = (
    mockDir: string,
    importBasePath: string,
    indent: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ) => {
    const props: string[] = []

    indent += '  '

    fs.readdirSync(mockDir)
      .sort()
      .forEach(file => {
        const basename = path.basename(file, path.extname(file))
        let valFn = `${indent}${basename
          .replace(/(-|\.|!| |'|\*|\(|\))/g, '_')
          .replace(/^(\d)/, '$$$1')}: {\n<% next %>\n${indent}}`
        let newUrl = `${url}/${basename}`

        if (file.startsWith('_')) {
          valFn = `${indent}${basename}: (val${valCount}: number | string) => ({\n<% next %>\n${indent}})`

          newUrl = `${url}/\${val${valCount}}`
          valCount += 1
        }

        const target = path.posix.join(mockDir, file)

        if (fs.statSync(target).isFile() && basename !== 'index') {
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
