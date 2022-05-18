import { Method } from './parseInterface'
import createDocComment from './createDocComment'
import { AspidaConfig } from './commands'

const genReqBody = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].reqBody
    ? (opt =>
        ` body${opt ? '?' : ''}: ${importName}['${name}']['polymorph'][${index}]['reqBody']${
          opt ? ' | undefined' : ''
        },`)(props.polymorph?.[index].reqBody?.hasQuestion)
    : props.reqBody
    ? (opt =>
        ` body${opt ? '?' : ''}: ${importName}['${name}']['reqBody']${opt ? ' | undefined' : ''},`)(
        props.reqBody.hasQuestion
      )
    : ''

const genQuery = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].query
    ? (opt =>
        ` query${opt ? '?' : ''}: ${importName}['${name}']['polymorph'][${index}]['query']${
          opt ? ' | undefined' : ''
        },`)(props.polymorph?.[index].query?.hasQuestion)
    : props.query
    ? (opt =>
        ` query${opt ? '?' : ''}: ${importName}['${name}']['query']${opt ? ' | undefined' : ''},`)(
        props.query.hasQuestion
      )
    : ''

const genReqHeaders = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].reqHeaders
    ? (opt =>
        ` headers${opt ? '?' : ''}: ${importName}['${name}']['polymorph'][${index}]['reqHeaders']${
          opt ? ' | undefined' : ''
        },`)(props.polymorph?.[index].reqHeaders?.hasQuestion)
    : props.reqHeaders
    ? (opt =>
        ` headers${opt ? '?' : ''}: ${importName}['${name}']['reqHeaders']${
          opt ? ' | undefined' : ''
        },`)(props.reqHeaders.hasQuestion)
    : ''

const genOption = (method: Method, importName: string, index = 0) => {
  const poly = method.props.polymorph?.[index]
  const isOptionRequired =
    method.props.query?.hasQuestion === false ||
    method.props.reqBody?.hasQuestion === false ||
    method.props.reqHeaders?.hasQuestion === false ||
    (poly &&
      (poly.query?.hasQuestion === false ||
        poly.reqBody?.hasQuestion === false ||
        poly.reqHeaders?.hasQuestion === false))

  return (opt =>
    `(option${opt ? '?' : ''}: {${genReqBody(method, importName, index)}${genQuery(
      method,
      importName,
      index
    )}${genReqHeaders(method, importName, index)} config?: T | undefined }${
      opt ? ' | undefined' : ''
    })`)(!isOptionRequired)
}

const genResBody = ({ name, props }: Method, importName: string) =>
  props.resBody ? `${importName}['${name}']['resBody']` : 'void'

const genPolyResBody = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].resBody
    ? `${importName}['${name}']['polymorph'][${index}]['resBody']`
    : genResBody({ name, props }, importName)

const genResHeaders = ({ name, props }: Method, importName: string) =>
  props.resHeaders ? `${importName}['${name}']['resHeaders']` : 'BasicHeaders'

const genPolyResHeaders = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].resHeaders
    ? `${importName}['${name}']['polymorph'][${index}]['resHeaders']`
    : genResHeaders({ name, props }, importName)

const genStatus = ({ name, props }: Method, importName: string) =>
  props.status ? `, ${importName}['${name}']['status']` : ''

const genPolyStatus = ({ name, props }: Method, importName: string, index: number) =>
  props.polymorph?.[index].status
    ? `, ${importName}['${name}']['polymorph'][${index}]['status']`
    : genStatus({ name, props }, importName)

const genRequest = (props: Omit<Method['props'], 'polymorph'>) =>
  `, option${
    !props.reqBody
      ? ''
      : props.reqFormat
      ? `, '${props.reqFormat.value}'`
      : props.reqBody && /^(ArrayBuffer|Blob|string)$/.test(props.reqBody.value)
      ? `, '${props.reqBody.value}'`
      : ''
  }`

const genResMethodName = (props: Omit<Method['props'], 'polymorph'>) =>
  !props.resBody
    ? 'send'
    : (
        { ArrayBuffer: 'arrayBuffer', Blob: 'blob', string: 'text', FormData: 'formData' } as {
          [key: string]: string
        }
      )[props.resBody.value] || 'json'

const genReturnVal = (method: Method, importName: string, path: string) =>
  `fetch<${genResBody(method, importName)}, ${genResHeaders(method, importName)}${genStatus(
    method,
    importName
  )}>(prefix, ${path}, ${method.name.toUpperCase()}${genRequest(method.props)}).${genResMethodName(
    method.props
  )}()`

const genPolyType = (method: Method, importName: string, index: number) =>
  `Promise<AspidaResponse<${genPolyResBody(method, importName, index)}, ${genPolyResHeaders(
    method,
    importName,
    index
  )}${genPolyStatus(method, importName, index)}>>`

const genPolymorphReturnVal = (method: Method, indent: string, path: string) =>
  `${
    method.name
  }Request(option: any) {\n${indent}      return fetch(prefix, ${path}, ${method.name.toUpperCase()}${genRequest(
    { ...method.props, ...method.props.polymorph?.find(p => p.reqBody) }
  )}).${genResMethodName({ ...method.props, ...method.props.polymorph?.find(p => p.resBody) })}()`

export default (
  methods: Method[],
  indent: string,
  importName: string,
  path: string,
  outputMode: AspidaConfig['outputMode']
) =>
  [
    ...methods.map(method => {
      const { name, props, doc } = method

      if (props.polymorph?.length) {
        const polys = props.polymorph.map((_, i) => [
          `${indent}    function ${name}Request${genOption(method, importName, i)}: ${genPolyType(
            method,
            importName,
            i
          )}`,
          `${indent}    function $${name}Request${genOption(
            method,
            importName,
            i
          )}: Promise<${genPolyResBody(method, importName, i)}>`
        ])

        return `${indent}  ${name}: (() => {\n${polys
          .map(([a]) => a)
          .join('\n')}\n${indent}    function ${genPolymorphReturnVal(
          method,
          indent,
          path
        )}\n${indent}    }\n${indent}    return ${name}Request\n${indent}  })(),\n${indent}  $${name}: (() => {\n${polys
          .map(([, b]) => b)
          .join('\n')}\n${indent}    function $${genPolymorphReturnVal(
          method,
          indent,
          path
        )}.then(r => r.body)\n${indent}    }\n${indent}    return $${name}Request\n${indent}  })()`
      }

      const tmpChanks = [
        `${genOption(method, importName)} =>`,
        genReturnVal(method, importName, path)
      ]
      const methodChanks: string[] = []

      if (outputMode !== 'aliasOnly') {
        methodChanks.push(
          `${createDocComment(`${indent}  `, doc, props)}${indent}  ${name}: ${
            tmpChanks[0]
          }\n${indent}    ${tmpChanks[1]}`
        )
      }

      if (outputMode !== 'normalOnly') {
        methodChanks.push(
          `${createDocComment(`${indent}  `, doc, props)}${indent}  $${name}: ${
            tmpChanks[0]
          }\n${indent}    ${tmpChanks[1]}.then(r => r.body)`
        )
      }

      return methodChanks.join(',\n')
    }),
    (methods.filter(({ props }) => props.query).length
      ? `${indent}  $path: (option?: ${methods
          .filter(({ props }) => props.query)
          .map(({ name }) =>
            (opt =>
              `{ method${opt ? '?' : ''}: '${name}'${
                opt ? ' | undefined' : ''
              }; query: ${importName}['${name}']['query'] }`)(name === 'get')
          )
          .join(' | ')} | undefined) =>
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
