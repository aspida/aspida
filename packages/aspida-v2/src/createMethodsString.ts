import createDocComment from './createDocComment'
import type { Method } from './parseInterface'

const genReqBody = ({ name, props }: Method, importName: string) =>
  props.reqBody
    ? ` body${props.reqBody.hasQuestion ? '?' : ''}: ${importName}['${name}']['reqBody'],`
    : ''

const genQuery = ({ name, props }: Method, importName: string) =>
  props.query
    ? ` query${props.query.hasQuestion ? '?' : ''}: ${importName}['${name}']['query'],`
    : ''

const genReqHeaders = ({ name, props }: Method, importName: string) =>
  props.reqHeaders
    ? ` headers${props.reqHeaders.hasQuestion ? '?' : ''}: ${importName}['${name}']['reqHeaders'],`
    : ''

const genOption = (method: Method, importName: string) => {
  const isOptionRequired =
    method.props.query?.hasQuestion === false ||
    method.props.reqBody?.hasQuestion === false ||
    method.props.reqHeaders?.hasQuestion === false

  return `(option${isOptionRequired ? '' : '?'}: {${genReqBody(method, importName)}${genQuery(
    method,
    importName
  )}${genReqHeaders(method, importName)} config?: RequestInit })`
}

const genResBody = ({ name, props }: Method, importName: string) =>
  props.resBody ? `${importName}['${name}']['resBody']` : 'void'

const genResHeaders = ({ name, props }: Method, importName: string) =>
  props.resHeaders ? `${importName}['${name}']['resHeaders']` : 'BasicHeaders'

const genStatus = ({ name, props }: Method, importName: string) =>
  props.status ? `, ${importName}['${name}']['status']` : ''

const genRequest = (props: Method['props']) =>
  `, option${
    !props.reqBody
      ? ''
      : props.reqFormat
      ? `, '${props.reqFormat.value}'`
      : props.reqBody && /^(ArrayBuffer|Blob|string)$/.test(props.reqBody.value)
      ? `, '${props.reqBody.value}'`
      : ''
  }`

const genResMethodName = (props: Method['props']) =>
  !props.resBody
    ? 'void'
    : (
        { ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
          [key: string]: string
        }
      )[props.resBody.value] || 'json'

const genReturnVal = (method: Method, importName: string, path: string) =>
  `send<${genResBody(method, importName)}, ${genResHeaders(method, importName)}${genStatus(
    method,
    importName
  )}>(f, ${method.name.toUpperCase()}, prefix, ${path}, '${genResMethodName(
    method.props
  )}'${genRequest(method.props)})`

export default (methods: Method[], indent: string, importName: string, path: string) =>
  [
    ...methods.map(method => {
      const { name, props, doc } = method
      const tmpChanks = [
        `${genOption(method, importName)} =>`,
        genReturnVal(method, importName, path)
      ]
      const methodChanks: string[] = []

      methodChanks.push(
        `${createDocComment(`${indent}  `, doc, props)}${indent}  $${name}: ${
          tmpChanks[0]
        }\n${indent}    ${tmpChanks[1]}`
      )

      return methodChanks.join(',\n')
    }),
    (methods.filter(({ props }) => props.query).length
      ? `${indent}  $path: (option?: ${methods
          .filter(({ props }) => props.query)
          .map(
            ({ name }) =>
              `{ method${
                name === 'get' ? '?' : ''
              }: '${name}'; query: ${importName}['${name}']['query'] }`
          )
          .join(' | ')}) =>
${indent}    \`\${prefix}\${${
          path.startsWith('`') ? path.slice(3, -2) : path
        }}\${option && option.query ? \`?\${dataToURLString(option.query)}\` : ''}\``
      : `${indent}  $path: () => \`\${prefix}\${${
          path.startsWith('`') ? path.slice(3, -2) : path
        }}\``
    )
      // eslint-disable-next-line no-template-curly-in-string
      .replace("${''}", '')
  ]
    .join(',\n')
    .replace(/, BasicHeaders>/g, '>')
    .replace(/fetch<void>/g, 'fetch')
    .replace(/AspidaResponse<void>/g, 'AspidaResponse')
