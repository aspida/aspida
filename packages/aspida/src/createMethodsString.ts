import * as ts from 'typescript'

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch'

export default (target: string, indent: string, importName: string, newUrl: string) => {
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
            // if (!(method.type as ts.TypeLiteralNode).members) {
            //   console.log((method.type as ts.TypeReferenceNode).typeName)
            //   return
            // }

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
            const hasNotDataQuestion = typeInfo.data && !typeInfo.data.hasQuestion
            const isConfigRequired = typeInfo.params && !typeInfo.params.hasQuestion

            const data = (method: HttpMethod) =>
              `data${`${hasNotDataQuestion || isConfigRequired ? '' : '?'}: ${
                typeInfo.data
                  ? `${importName}['${method}']['data']${
                      typeInfo.data.hasQuestion ? ' | null' : ''
                    }`
                  : 'null'
              }`}`
            const params = (method: HttpMethod) =>
              typeInfo.params
                ? `{ params${
                    typeInfo.params.hasQuestion ? '?' : ''
                  }: ${importName}['${method}']['params'] & { [key: string]: any }} & `
                : ''
            const headers = (method: HttpMethod) =>
              typeInfo.headers
                ? `{ headers?: ${importName}['${method}']['headers'] & { [key: string]: any }} & `
                : ''
            const config = (method: HttpMethod) =>
              `config${
                isConfigRequired || (method === 'delete' && hasNotDataQuestion) ? '' : '?'
              }: ${params(method)}${headers(method)}AxiosRequestConfig`
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
                  `(${config('delete')}${typeInfo.data ? ` & { ${data('delete')} }` : ''}) =>`,
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
