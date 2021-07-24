import createDocComment from './createDocComment'
import type { Method } from './parseInterface'

const genOption = (method: Method, importName: string) => {
  const isOptionRequired =
    method.req?.query?.hasQuestion === false ||
    method.req?.body?.hasQuestion === false ||
    method.req?.headers?.hasQuestion === false

  return `(option${isOptionRequired ? '' : '?'}: ${
    method.req ? `${importName}['${method.name}']['req'] & ` : ''
  }{ init?: RequestInit })`
}

const genRes = ({ name, res }: Method, importName: string) =>
  res ? `${importName}['${name}']['res']` : '{}'

const genErr = ({ name, err }: Method, importName: string) =>
  err ? `, ${importName}['${name}']['err']` : ''

const genRequest = ({ req }: Method) =>
  `, option${
    !req?.body
      ? ''
      : req?.format
      ? `, '${req?.format.value}'`
      : req.body && /^(ArrayBuffer|Blob|string)$/.test(req.body.value)
      ? `, '${req.body.value}'`
      : ''
  }`

const genResMethodName = ({ res }: Method) =>
  !res?.body
    ? 'void'
    : (
        { ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
          [key: string]: string
        }
      )[res.body.value] || 'json'

const genReturnVal = (method: Method, importName: string, path: string) =>
  `send<${genRes(method, importName)}${genErr(
    method,
    importName
  )}>(f, ${method.name.toUpperCase()}, prefix, ${path}, '${genResMethodName(method)}'${genRequest(
    method
  )})`

export default (methods: Method[], indent: string, importName: string, path: string) =>
  [
    ...methods.map(method => {
      const { name, doc, ...params } = method
      const tmpChanks = [
        `${genOption(method, importName)} =>`,
        genReturnVal(method, importName, path)
      ]
      const methodChanks: string[] = []

      methodChanks.push(
        `${createDocComment(`${indent}  `, doc, params)}${indent}  $${name}: ${
          tmpChanks[0]
        }\n${indent}    ${tmpChanks[1]}`
      )

      return methodChanks.join(',\n')
    }),
    (methods.filter(({ req }) => req?.query).length
      ? `${indent}  $path: (option?: ${methods
          .filter(({ req }) => req?.query)
          .map(
            ({ name }) =>
              `{ method${
                name === 'get' ? '?' : ''
              }: '${name}'; query: ${importName}['${name}']['req']['query'] }`
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
