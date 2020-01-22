import fs from 'fs'
import path from 'path'
import createMethods from './createMethodsString'

export default (input: string, trailingSlash: boolean) => {
  const imports: string[] = []
  const getMethodsString = (file: string, target: string, indent: string, newUrl: string) => {
    const importName = `Methods${imports.length}`
    imports.push(`import { Methods as ${importName} } from '${file}'`)
    return createMethods(target, indent, importName, newUrl, trailingSlash)
  }

  let valCount = 0

  const createApiString = (
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
      .forEach(file => {
        if (file.startsWith('$') || file.startsWith('@')) return

        const basename = path.basename(file, '.ts')
        let valFn = `${indent}${basename
          .replace(/(-|\.|!| |'|\*|\(|\))/g, '_')
          .replace(/^(\d)/, '$$$1')}: {\n<% next %>\n${indent}}`
        let newUrl = `${url}/${basename}`

        if (file.startsWith('_')) {
          let [valName, valType = 'number | string'] = basename.split('@')

          if (/^[A-Z]/.test(valType)) {
            valType = `ApiTypes.${valType}`
          }

          valFn = `${indent}${valName}: (val${valCount}: ${valType}) => ({\n<% next %>\n${indent}})`

          newUrl = `${url}/\${val${valCount}}`
          valCount += 1
        }

        const target = path.posix.join(targetDir, file)

        if (fs.statSync(target).isDirectory()) {
          const indexPath = path.posix.join(target, 'index.ts')

          props.push(
            createApiString(
              target,
              `${importBasePath}/${file}`,
              indent,
              newUrl,
              valFn.replace('<% next %>', '<% props %>'),
              fs.existsSync(indexPath)
                ? getMethodsString(`${importBasePath}/${file}/index`, indexPath, indent, newUrl)
                : undefined
            )
          )
        } else if (path.extname(file) === '.ts' && file !== 'index.ts') {
          props.push(
            valFn.replace(
              '<% next %>',
              getMethodsString(`${importBasePath}/${basename}`, target, indent, newUrl)
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

  return {
    api: createApiString(
      input,
      '.',
      rootIndent,
      '',
      `{\n<% props %>\n  }`,
      fs.existsSync(rootIndexPath)
        ? getMethodsString('./index', rootIndexPath, rootIndent, '')
        : undefined
    ),
    imports
  }
}
