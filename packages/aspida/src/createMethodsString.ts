import { Project } from 'ts-morph'
import { SyntaxKind } from 'typescript'
import { LowerHttpMethod, AspidaMethodParams } from './'

type MethodsProperties = keyof AspidaMethodParams

export default (
  target: string,
  indent: string,
  importName: string,
  newUrl: string,
  trailingSlash: boolean
) => {
  const source = new Project().addSourceFileAtPath(target)
  const chanks: string[] = []
  const methodsInterface = source.getInterface('Methods')
  if (!methodsInterface) return ''

  methodsInterface.getProperties().forEach(method => {
    const methodName = method.getName() as LowerHttpMethod
    const typeInfo: { [key in MethodsProperties]?: { value: string; hasQuestion: boolean } } = {}
    method.getChildrenOfKind(SyntaxKind.TypeLiteral).forEach(n =>
      n.getProperties().forEach(p => {
        typeInfo[p.getName() as MethodsProperties] = {
          value: p.getType() ? p.getType().getText() : '',
          hasQuestion: p.hasQuestionToken()
        }
      })
    )

    const isOptionRequired =
      (typeInfo.query && !typeInfo.query.hasQuestion) ||
      (typeInfo.reqBody && !typeInfo.reqBody.hasQuestion) ||
      (typeInfo.reqHeaders && !typeInfo.reqHeaders.hasQuestion)

    const reqBody = (method: LowerHttpMethod) =>
      typeInfo.reqBody
        ? ` data${typeInfo.reqBody.hasQuestion ? '?' : ''}: ${importName}['${method}']['reqBody'],`
        : ''
    const query = (method: LowerHttpMethod) =>
      typeInfo.query
        ? ` query${typeInfo.query.hasQuestion ? '?' : ''}: ${importName}['${method}']['query'],`
        : ''
    const reqHeaders = (method: LowerHttpMethod) =>
      typeInfo.reqHeaders
        ? ` headers${
            typeInfo.reqHeaders.hasQuestion ? '?' : ''
          }: ${importName}['${method}']['reqHeaders'],`
        : ''
    const resHeaders = (method: LowerHttpMethod) =>
      typeInfo.resHeaders ? `, ${importName}['${method}']['resHeaders']` : ''
    const option = (method: LowerHttpMethod) =>
      `option${isOptionRequired ? '' : '?'}: {${reqBody(method)}${query(method)}${reqHeaders(
        method
      )} config?: T }`
    const request = () =>
      `, option${
        !typeInfo.reqBody
          ? ''
          : typeInfo.reqFormat
          ? `, '${typeInfo.reqFormat.value}'`
          : typeInfo.reqBody && /^(ArrayBuffer|Blob|string)$/.test(typeInfo.reqBody.value)
          ? `, '${typeInfo.reqBody.value}'`
          : ''
      }`
    const resBody = (method: LowerHttpMethod) =>
      `${typeInfo.resBody ? `${importName}['${method}']['resBody']` : 'void'}`
    const resMethodName = () =>
      !typeInfo.resBody
        ? 'send'
        : ({ ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
            [key: string]: string
          })[typeInfo.resBody.value] || 'json'

    const quotation = newUrl.includes('${') ? '`' : "'"
    const tmpChanks = [
      `(${option(methodName)}) =>`,
      `client.fetch<${resBody(methodName)}${resHeaders(methodName)}>(prefix, ${quotation}${newUrl}${
        trailingSlash ? '/' : ''
      }${quotation}, '${methodName.toUpperCase()}'${request()}).${resMethodName()}()`
    ]

    chanks.push(`${indent}  ${methodName}: ${tmpChanks[0]}
${indent}    ${tmpChanks[1]},
${indent}  $${methodName}: async ${tmpChanks[0]}
${indent}    (await ${tmpChanks[1]}).data`)
  })

  return chanks.join(',\n')
}
