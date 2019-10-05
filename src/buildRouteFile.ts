import fs from 'fs'
import path from 'path'
import * as ts from 'typescript'
import { Config } from './getConfig'
import replacePath from './replacePathSepIfWindows'

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch'

export default (input: string, config: Config, baseURL = '') => {
  const imports: string[] = []
  let valCount = 0

  const createMethods = (target: string, indent: string, importName: string, newUrl: string) => {
    const program = ts.createProgram({
      rootNames: [target],
      options: {}
    })

    const source = program.getSourceFile(target)
    const chanks: string[] = []

    if (source) {
      source.forEachChild(node => {
        if (
          ts.isInterfaceDeclaration(node) &&
          node.name.escapedText === 'Methods' &&
          node.modifiers &&
          node.modifiers.length === 1 &&
          ts.tokenToString(node.modifiers[0].kind) === 'export'
        ) {
          node.forEachChild(method => {
            if (ts.isPropertySignature(method)) {
              const methodName = (method.name as ts.Identifier).escapedText
              const typeInfo = (method.type as ts.TypeLiteralNode).members.reduce(
                (prev, member) => {
                  return {
                    ...prev,
                    [(member.name as ts.Identifier).escapedText as string]: {
                      hasQuestion: !!member.questionToken
                    }
                  }
                },
                {} as {
                  [key in 'data' | 'params' | 'headers' | 'response']?: { hasQuestion: boolean }
                }
              )
              const tmpChanks: string[] = []

              const data = (method: HttpMethod) =>
                `data${
                  typeInfo.data
                    ? `${typeInfo.data.hasQuestion ? '?' : ''}: ${importName}['${method}']['data']`
                    : `${method === 'delete' ? '?' : ''}: void`
                }`
              const params = (method: HttpMethod) =>
                typeInfo.params
                  ? ` & { params?: ${importName}['${method}']['params'] & { [key: string]: any }}`
                  : ''
              const headers = (method: HttpMethod) =>
                typeInfo.headers
                  ? ` & { headers?: ${importName}['${method}']['headers'] & { [key: string]: any }}`
                  : ''
              const config = (method: HttpMethod) =>
                `config?: AxiosRequestConfig${params(method)}${headers(method)}`
              const response = (method: HttpMethod) =>
                `${method}${
                  typeInfo.response ? `<${importName}['${method}']['response']>` : '<void>'
                }`

              switch (methodName) {
                case 'get':
                  tmpChanks.push(
                    `(${config('get')}) =>`,
                    `client.${response('get')}(\`${newUrl}\`, config)`
                  )
                  break
                case 'head':
                  tmpChanks.push(
                    `(${config('head')}) =>`,
                    `client.${response('head')}(\`${newUrl}\`, config)`
                  )
                  break
                case 'post':
                  tmpChanks.push(
                    `(${data('post')}, ${config('post')}) =>`,
                    `client.${response('post')}(\`${newUrl}\`, data, config)`
                  )
                  break
                case 'put':
                  tmpChanks.push(
                    `(${data('put')}, ${config('put')}) =>`,
                    `client.${response('put')}(\`${newUrl}\`, data, config)`
                  )
                  break
                case 'patch':
                  tmpChanks.push(
                    `(${data('patch')}, ${config('patch')}) =>`,
                    `client.${response('patch')}(\`${newUrl}\`, data, config)`
                  )
                  break
                case 'delete':
                  tmpChanks.push(
                    `(${config('delete')} & { ${data('delete')} }) =>`,
                    `client.${response('delete')}(\`${newUrl}\`, config)`
                  )
                  break
                default:
                  break
              }

              chanks.push(`${indent}  ${methodName}: ${tmpChanks[0]}
  ${indent}    ${tmpChanks[1]},
  ${indent}  $${methodName}: async ${tmpChanks[0]}
  ${indent}    (await ${tmpChanks[1]}).data`)
            }
          })
        }
      })
    }

    return chanks.join(',\n')
  }

  const listFiles = (mockDir: string, indent: string, url: string, text: string) => {
    const props: string[] = []

    indent += '  '

    fs.readdirSync(mockDir).forEach(file => {
      const target = path.join(mockDir, file)
      let valFn = `${indent}${file.split('.')[0]}: {
  <% next %>
  ${indent}}`
      let newUrl = `${url}/${file.split('.')[0]}`

      if (file.startsWith('_')) {
        valFn = `${indent}${file.split('.')[0]}: (val${valCount}: number | string) => ({
  <% next %>
  ${indent}})`

        newUrl = `${url}/\${val${valCount}}`
        valCount += 1
      }

      if (fs.statSync(target).isFile() && !file.startsWith('$')) {
        const importName = `Val${imports.length}`
        imports.push(`import { Methods as ${importName} } from '${target.split('.')[0]}'`)

        props.push(valFn.replace('<% next %>', createMethods(target, indent, importName, newUrl)))
      } else if (fs.statSync(target).isDirectory()) {
        props.push(listFiles(target, indent, newUrl, valFn.replace('<% next %>', '<% props %>')))
      }
    })

    return text.replace('<% props %>', props.join(',\n'))
  }

  const res = listFiles(
    input,
    '  ',
    // eslint-disable-next-line no-template-curly-in-string
    '${prefix}',
    `{
  <% props %>
    }`
  )

  const template = fs.readFileSync(path.join(__dirname, 'template.ts'), 'utf8')
  const text = template
    .replace("'<% imports %>'", imports.map(i => replacePath(i).replace(input, '.')).join('\n'))
    .replace("'<% api %>'", res)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.join(input, '$api.ts') }
}
