import fs from 'fs'
import path from 'path'
import createMethods from './createMethodsString'
import parseInterface from './parseInterface'

export default (input: string, trailingSlash: boolean) => {
  const imports: string[] = []
  const getMethodsString = (file: string, target: string, indent: string, newUrl: string) => {
    const methodsInterface = parseInterface(fs.readFileSync(target, 'utf8'), 'Methods')
    if (!methodsInterface) return ''

    const importName = `Methods${imports.length}`
    imports.push(`import { Methods as ${importName} } from '${file}'`)
    return createMethods(methodsInterface, indent, importName, newUrl, trailingSlash)
  }

  let valCount = 0

  const createApiString = (
    targetDir: string,
    importBasePath: string,
    indent: string,
    url: string,
    text: string,
    methodsOfIndexTsFile?: string
  ): string => {
    indent += '  '

    const props = fs
      .readdirSync(targetDir)
      .sort()
      .map((file, _, dirList) => {
        if (file.startsWith('$') || file.startsWith('@')) return

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

          valFn = `${indent}${valName.replace(
            /\./g,
            '_'
          )}: (val${valCount}: ${valType}) => ({\n<% next %>\n${indent}})`
          newUrl = `${url}/\${val${valCount}}${valName.replace(/^[^.]+/, '')}`
          valCount += 1
        }

        const target = path.posix.join(targetDir, file)

        if (fs.statSync(target).isDirectory()) {
          const indexPath = path.posix.join(target, 'index.ts')

          return createApiString(
            target,
            `${importBasePath}/${file}`,
            indent,
            newUrl,
            valFn.replace('<% next %>', '<% props %>'),
            dirList.includes(`${file}.ts`)
              ? getMethodsString(`${importBasePath}/${file}`, `${target}.ts`, indent, newUrl)
              : fs.existsSync(indexPath)
              ? getMethodsString(`${importBasePath}/${file}/index`, indexPath, indent, newUrl)
              : undefined
          )
        } else if (
          path.extname(file) === '.ts' &&
          file !== 'index.ts' &&
          !dirList.includes(basename)
        ) {
          return valFn.replace(
            '<% next %>',
            getMethodsString(`${importBasePath}/${basename}`, target, indent, newUrl)
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
