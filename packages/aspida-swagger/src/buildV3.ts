/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { Template } from './Template'

const $ref2TypeName = (ref: string) => ref.split('/').pop() || ''
const $ref2Type = (ref: string) => `Types.${$ref2TypeName(ref)}`
const isRefObject = (
  params:
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.ResponseObject
    | OpenAPIV3.RequestBodyObject
    | OpenAPIV3.HeaderObject
    | OpenAPIV3.ParameterObject
    | OpenAPIV3.SchemaObject
): params is OpenAPIV3.ReferenceObject => '$ref' in params
const isArraySchema = (schema: OpenAPIV3.SchemaObject): schema is OpenAPIV3.ArraySchemaObject =>
  schema.type === 'array'
const isObjectSchema = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
): schema is OpenAPIV3.NonArraySchemaObject => !isRefObject(schema) && schema.type !== 'array'
const getPropertyName = (name: string) =>
  /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ? name : `'${name}'`
const enum2value = (en: any[]) => `'${en.join("' | '")}'`
const array2value = (schema: OpenAPIV3.ArraySchemaObject, indent: string) =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  `${schema2value(schema.items, indent)}[]`
const object2value = (properties: OpenAPIV3.NonArraySchemaObject['properties'], indent: string) => {
  return properties
    ? `{
${Object.keys(properties).map(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  name => `${indent}  ${getPropertyName(name)}: ${schema2value(properties![name], `${indent}  `)}`
).join(`
`)}
${indent}}`
    : '{}'
}
const schema2value = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  indent: string
) => {
  if (isRefObject(schema)) {
    return $ref2Type(schema.$ref)
  }

  let value = ''

  if (schema.allOf) {
    value = `${schema.allOf
      .filter(s => isRefObject(s))
      .map(s => isRefObject(s) && $ref2Type(s.$ref))
      .join(' & ')}${
      schema.allOf.filter(s => isRefObject(s)).length &&
      schema.allOf.filter(s => isObjectSchema(s)).length
        ? ' & '
        : ''
    }${schema.allOf
      .filter(s => isObjectSchema(s))
      .map(s => isObjectSchema(s) && object2value(s.properties, indent))
      .join(' & ')}`
  } else if (schema.enum) {
    value = enum2value(schema.enum)
  } else if (isArraySchema(schema)) {
    value = array2value(schema, indent)
  } else if (schema.properties) {
    value = object2value(schema.properties, indent)
  } else if (schema.format === 'binary') {
    value = 'ArrayBuffer'
  } else if (schema.type !== 'object') {
    value = {
      integer: 'number',
      number: 'number',
      null: 'null',
      string: 'string',
      boolean: 'boolean'
    }[schema.type]
  }

  return value
}

const methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'] as const
const getDirName = (text: string /* , methods: OpenAPIV3.PathItemObject */) => {
  if (!/^{/.test(text)) return text

  const valName = text.slice(1, -1)
  // const method = methodNames.find(name => methods[name]?.parameters?.find((param) => !isRefObject(param) && param.name === valName && param.in === 'path'))
  // return `_${valName}${method ? `@${type2value(methods[method]!.parameters!.filter((param) => !isRefObject(param) && param.name === valName && param.in === 'path')[0], '')}` : ''}`
  return `_${valName}`
}

const parameters2interfaces = (params: OpenAPIV3.ComponentsObject['parameters']) =>
  params &&
  Object.keys(params)
    .map(defKey => {
      const target = params[defKey]
      return isRefObject(target)
        ? `
export interface ${defKey} extends ${$ref2Type(target.$ref)} {}
`
        : `
export interface ${defKey} {
  ${getPropertyName(target.name)}: ${target.schema ? schema2value(target.schema, '') : 'null'}
}
`
    })
    .join('')

const schemas2interfaces = (schemas: OpenAPIV3.ComponentsObject['schemas']) =>
  schemas &&
  Object.keys(schemas)
    .map(defKey => {
      const target = schemas[defKey]
      return isRefObject(target)
        ? `
export interface ${defKey} extends ${$ref2Type(target.$ref)} {}
`
        : isArraySchema(target)
        ? `
export type ${defKey} = ${array2value(target, '')}
`
        : target.enum
        ? `
export type ${defKey} = ${enum2value(target.enum)}
`
        : target.allOf
        ? `
export interface ${defKey} extends ${target.allOf
            .filter(s => isRefObject(s))
            .map(s => isRefObject(s) && $ref2Type(s.$ref))
            .join(', ')} ${target.allOf
            .filter(s => isObjectSchema(s))
            .map(s => isObjectSchema(s) && object2value(s.properties, ''))
            .join('')}
`
        : `
export interface ${defKey} ${object2value(target.properties, '')}
`
    })
    .join('')

const resolveParamsRef = (swagger: OpenAPIV3.Document, ref: string): OpenAPIV3.ParameterObject => {
  const target = swagger.components?.parameters![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveParamsRef(swagger, target.$ref) : target
}

const resolveResRef = (swagger: OpenAPIV3.Document, ref: string): OpenAPIV3.ResponseObject => {
  const target = swagger.components?.responses![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveResRef(swagger, target.$ref) : target
}

const resolveReqRef = (swagger: OpenAPIV3.Document, ref: string): OpenAPIV3.RequestBodyObject => {
  const target = swagger.components?.requestBodies![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveReqRef(swagger, target.$ref) : target
}

export default (swagger: OpenAPIV3.Document): Template => {
  const files: { file: string[]; methods: string }[] = []

  if (swagger.paths) {
    files.push(
      ...Object.keys(swagger.paths).map((path, _i, pathList) => {
        const isParent = pathList.some(p => new RegExp(`^${path}/.+`).test(p))
        const file = [
          ...path
            .replace(/\/$/, '')
            .split('/')
            .slice(1)
            .map(p => getDirName(p /* , swagger.paths[path] */)),
          ...(isParent ? ['index'] : [])
        ]
        const methods = Object.keys(swagger.paths[path])
          .map(method => {
            const target = swagger.paths[path][method as typeof methodNames[number]]

            if (!target) return ''

            const params: string[] = []

            if (target.parameters) {
              const reqRefHeaders: string[] = []
              const reqHeaders: string[] = []
              const query: string[] = []

              target.parameters.forEach(p => {
                if (isRefObject(p)) {
                  const ref = resolveParamsRef(swagger, p.$ref)
                  switch (ref.in) {
                    case 'header':
                      reqRefHeaders.push($ref2Type(p.$ref))
                      break
                    case 'query':
                      query.push(`${getPropertyName(ref.name)}: ${$ref2Type(p.$ref)}`)
                      break
                    default:
                      break
                  }
                } else {
                  switch (p.in) {
                    case 'header':
                      reqHeaders.push(
                        `${getPropertyName(p.name)}: ${
                          p.schema ? schema2value(p.schema, '  ') : 'null'
                        }`
                      )
                      break
                    case 'query':
                      query.push(
                        `${getPropertyName(p.name)}: ${
                          p.schema ? schema2value(p.schema, '  ') : 'null'
                        }`
                      )
                      break
                    default:
                      break
                  }
                }
              })

              if (reqHeaders.length || reqRefHeaders.length) {
                params.push(
                  `    reqHeaders: ${reqRefHeaders.join(' & ')}${
                    reqRefHeaders.length && reqHeaders.length ? ' & ' : ''
                  }${reqHeaders.length ? `{\n      ${reqHeaders.join('\n      ')}\n    }` : ''}\n`
                )
              }

              if (query.length) {
                params.push(`    query: {\n      ${query.join('\n      ')}\n    }\n`)
              }
            }

            if (target.responses) {
              const code = Object.keys(target.responses).find(code => /^20/.test(code))
              if (code) {
                let resData = ''
                const resHeaders: string[] = []
                const res = target.responses[code]

                if (isRefObject(res)) {
                  const ref = resolveResRef(swagger, res.$ref)
                  if (ref.content?.['application/json']?.schema) {
                    resData = schema2value(ref.content['application/json'].schema, '    ')
                  }

                  if (ref.headers) {
                    Object.keys(ref.headers).forEach(header => {
                      const headerData = ref.headers![header]
                      resHeaders.push(
                        `${getPropertyName(header)}: ${
                          !isRefObject(headerData) && headerData.schema
                            ? schema2value(headerData.schema, '    ')
                            : 'null'
                        }`
                      )
                    })
                  }
                } else {
                  if (res.content?.['application/json']?.schema) {
                    resData = schema2value(res.content['application/json'].schema, '    ')
                  }
                  res.headers &&
                    Object.keys(res.headers).forEach(header => {
                      const headerData = res.headers![header]
                      resHeaders.push(
                        `${getPropertyName(header)}: ${
                          isRefObject(headerData)
                            ? $ref2Type(headerData.$ref)
                            : headerData.schema
                            ? schema2value(headerData.schema, '    ')
                            : 'null'
                        }`
                      )
                    })
                }

                if (resData) {
                  params.push(`    resData: ${resData}\n`)
                }

                if (resHeaders.length) {
                  params.push(`    resHeaders: {\n      ${resHeaders.join('\n      ')}\n    }\n`)
                }
              }
            }

            if (target.requestBody) {
              let reqType = ''
              let reqData = ''
              if (isRefObject(target.requestBody)) {
                const ref = resolveReqRef(swagger, target.requestBody.$ref)
                if (ref.content['multipart/form-data']?.schema) {
                  reqType = 'FormData'
                } else if (ref.content['application/x-www-form-urlencoded']?.schema) {
                  reqType = 'URLSearchParams'
                }

                reqData = $ref2Type(target.requestBody.$ref)
              } else {
                if (target.requestBody.content['multipart/form-data']?.schema) {
                  reqType = 'FormData'
                  reqData = schema2value(
                    target.requestBody.content['multipart/form-data'].schema,
                    '    '
                  )
                } else if (
                  target.requestBody.content['application/x-www-form-urlencoded']?.schema
                ) {
                  reqType = 'URLSearchParams'
                  reqData = schema2value(
                    target.requestBody.content['application/x-www-form-urlencoded'].schema,
                    '    '
                  )
                } else if (target.requestBody.content['application/json']?.schema) {
                  reqData = schema2value(
                    target.requestBody.content['application/json'].schema,
                    '    '
                  )
                }
              }

              if (reqType) {
                params.push(`    reqType: ${reqType}\n`)
              }

              if (reqData) {
                params.push(`    reqData: ${reqData}\n`)
              }
            }

            return `  ${method}: {\n${params.join('\n')}  }`
          })
          .join('\n\n')

        return {
          file,
          methods: `/* eslint-disable */\n${
            / Types\./.test(methods)
              ? `import * as Types from '${file.map(() => '').join('../')}@types'\n\n`
              : ''
          }export interface Methods {\n${methods}\n}\n`
        }
      })
    )
  }

  return {
    baseURL: swagger.servers?.[0].url || '',
    types: `/* eslint-disable */${parameters2interfaces(swagger.components?.parameters) ||
      ''}${schemas2interfaces(swagger.components?.schemas) || ''}`.replace(/ Types\./g, ' '),
    files
  }
}
