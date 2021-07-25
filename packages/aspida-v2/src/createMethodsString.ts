import createDocComment from './createDocComment'
import type { Method } from './parseInterface'

const genOption = (method: Method, importName: string) => {
  const isOptionRequired =
    method.req?.query?.hasQuestion === false ||
    method.req?.body?.hasQuestion === false ||
    method.req?.headers?.hasQuestion === false

  return `(option${isOptionRequired ? '' : '?'}: ${
    method.req
      ? `${method.req.format ? 'Omit<' : ''}${importName}['${method.name}']['req']${
          method.req.format ? ", 'format'>" : ''
        } & `
      : ''
  }{ init?: RequestInit })`
}

const genRes = ({ name, res }: Method, importName: string) =>
  res ? `${importName}['${name}']['res']` : '{}'

const genErr = ({ name, err }: Method, importName: string) =>
  err ? `, ${importName}['${name}']['err']` : ''

const genRequest = ({ req }: Method) =>
  !req?.body
    ? ''
    : req.format
    ? `, ${req.format.value.toUpperCase()}`
    : req.body && /^(ArrayBuffer|Blob|string)$/.test(req.body.value)
    ? `, ${req.body.value.toUpperCase()}`
    : ''

const genBodyType = (data: Method['res'] | Method['err']) =>
  !data?.body
    ? 'void'
    : (
        { ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
          [key: string]: string
        }
      )[data.body.value] || 'json'

const genReturnVal = (method: Method, importName: string, path: string) =>
  `send<${genRes(method, importName)}${genErr(
    method,
    importName
  )}>(${method.name.toUpperCase()}, prefix, ${path}, '${genBodyType(method.res)}', '${genBodyType(
    method.err
  )}', option${genRequest(method)})`

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
        }}\${option?.query ? \`?\${dataToURLString(option.query)}\` : ''}\``
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
