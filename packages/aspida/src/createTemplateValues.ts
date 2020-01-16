import fs from 'fs'
import path from 'path'
import createMethods from './createMethodsString'

export default (input: string) => {
  const imports: string[] = []
  let valCount = 0

  const createApiString = (
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
        if (file.startsWith('$') || file.startsWith('@')) return

        let valFn = `${indent}${file
          .replace(/\.ts$/, '')
          .replace(/(-|\.|!| |'|\*|\(|\))/g, '_')
          .replace(/^(\d)/, '$$$1')}: {
<% next %>
${indent}}`
        let newUrl = `${url}/${file.replace(/\.ts$/, '')}`

        if (file.startsWith('_')) {
          let [valName, valType = 'number | string'] = file.replace(/\.ts$/, '').split('@')

          if (/^[A-Z]/.test(valType) && valType.indexOf(valType) > -1) {
            valType = `ApiTypes.${valType}`
          }

          valFn = `${indent}${valName}: (val${valCount}: ${valType}) => ({
<% next %>
${indent}})`

          newUrl = `${url}/\${val${valCount}}`
          valCount += 1
        }

        const target = path.posix.join(mockDir, file)

        if (fs.statSync(target).isFile() && file !== 'index.ts') {
          if (path.extname(file) !== '.ts') return

          const importName = `Methods${imports.length}`
          imports.push(
            `import { Methods as ${importName} } from '${importBasePath}/${file.replace(
              /\.ts$/,
              ''
            )}'`
          )

          props.push(valFn.replace('<% next %>', createMethods(target, indent, importName, newUrl)))
        } else if (fs.statSync(target).isDirectory()) {
          const indexPath = path.posix.join(target, 'index.ts')
          let methods

          if (fs.existsSync(indexPath)) {
            const importName = `Methods${imports.length}`
            imports.push(
              `import { Methods as ${importName} } from '${importBasePath}/${file}/index'`
            )
            methods = createMethods(indexPath, indent, importName, newUrl)
          }

          props.push(
            createApiString(
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

  const rootIndexPath = path.posix.join(input, 'index.ts')
  const rootIndent = '  '
  let rootMethods

  if (fs.existsSync(rootIndexPath)) {
    const importName = 'Methods0'
    imports.push(`import { Methods as ${importName} } from './index'`)
    rootMethods = createMethods(rootIndexPath, rootIndent, importName, '/')
  }

  return {
    api: createApiString(
      input,
      '.',
      rootIndent,
      '',
      `{
<% props %>
  }`,
      rootMethods
    ),
    imports
  }
}
