import { LowerHttpMethod } from './'
import { Method } from './parseInterface'

export default (
  methods: Method[],
  indent: string,
  importName: string,
  newUrl: string,
  trailingSlash: boolean
) =>
  methods
    .map(({ name, props }) => {
      const isOptionRequired =
        (props.query && !props.query.hasQuestion) ||
        (props.reqBody && !props.reqBody.hasQuestion) ||
        (props.reqHeaders && !props.reqHeaders.hasQuestion)

      const reqBody = (method: LowerHttpMethod) =>
        props.reqBody
          ? ` data${props.reqBody.hasQuestion ? '?' : ''}: ${importName}['${method}']['reqBody'],`
          : ''
      const query = (method: LowerHttpMethod) =>
        props.query
          ? ` query${props.query.hasQuestion ? '?' : ''}: ${importName}['${method}']['query'],`
          : ''
      const reqHeaders = (method: LowerHttpMethod) =>
        props.reqHeaders
          ? ` headers${
              props.reqHeaders.hasQuestion ? '?' : ''
            }: ${importName}['${method}']['reqHeaders'],`
          : ''
      const resHeaders = (method: LowerHttpMethod) =>
        props.resHeaders ? `, ${importName}['${method}']['resHeaders']` : ''
      const option = (method: LowerHttpMethod) =>
        `option${isOptionRequired ? '' : '?'}: {${reqBody(method)}${query(method)}${reqHeaders(
          method
        )} config?: T }`
      const request = () =>
        `, option${
          !props.reqBody
            ? ''
            : props.reqFormat
            ? `, '${props.reqFormat.value}'`
            : props.reqBody && /^(ArrayBuffer|Blob|string)$/.test(props.reqBody.value)
            ? `, '${props.reqBody.value}'`
            : ''
        }`
      const resBody = (method: LowerHttpMethod) =>
        `${props.resBody ? `${importName}['${method}']['resBody']` : 'void'}`
      const resMethodName = () =>
        !props.resBody
          ? 'send'
          : ({ ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
              [key: string]: string
            })[props.resBody.value] || 'json'

      const quotation = newUrl.includes('${') ? '`' : "'"
      const tmpChanks = [
        `(${option(name)}) =>`,
        `client.fetch<${resBody(name)}${resHeaders(name)}>(prefix, ${quotation}${newUrl}${
          trailingSlash ? '/' : ''
        }${quotation}, '${name.toUpperCase()}'${request()}).${resMethodName()}()`
      ]

      return `${indent}  ${name}: ${tmpChanks[0]}
${indent}    ${tmpChanks[1]},
${indent}  $${name}: async ${tmpChanks[0]}
${indent}    (await ${tmpChanks[1]}).data`
    })
    .join(',\n')
