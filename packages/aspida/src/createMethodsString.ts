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
      (typeInfo.reqData && !typeInfo.reqData.hasQuestion) ||
      (typeInfo.reqHeaders && !typeInfo.reqHeaders.hasQuestion)

    const reqData = (method: LowerHttpMethod) =>
      typeInfo.reqData
        ? ` data${typeInfo.reqData.hasQuestion ? '?' : ''}: ${importName}['${method}']['reqData'],`
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
      `option${isOptionRequired ? '' : '?'}: {${reqData(method)}${query(method)}${reqHeaders(
        method
      )} config?: U }`
    const request = () =>
      `, option${
        !typeInfo.reqData
          ? ''
          : typeInfo.reqType
          ? `, '${typeInfo.reqType.value}'`
          : typeInfo.reqData && /^(ArrayBuffer|Blob|string)$/.test(typeInfo.reqData.value)
          ? `, '${typeInfo.reqData.value}'`
          : ''
      }`
    const resData = (method: LowerHttpMethod) =>
      `${typeInfo.resData ? `${importName}['${method}']['resData']` : 'void'}`
    const resMethodName = () =>
      !typeInfo.resData
        ? 'send'
        : ({ ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
            [key: string]: string
          })[typeInfo.resData.value] || 'json'

    const quotation = newUrl.includes('${') ? '`' : "'"
    const tmpChanks = [
      `(${option(methodName)}) =>`,
      `client.fetch<${resData(methodName)}${resHeaders(methodName)}>(prefix, ${quotation}${newUrl}${
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
