/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { Template } from './buildTemplate'

const defKey2defName = (key: string) => key.replace(/[^a-zA-Z0-9$_]/g, '_')
const $ref2TypeName = (ref: string) => ref.split('/').pop() || ''
// $ref2Type: replace /Array$/ for Swagger 2.0
const $ref2Type = (ref: string) =>
  `Types.${defKey2defName($ref2TypeName(ref)).replace(/Array$/, '[]')}`
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
const object2value = (obj: OpenAPIV3.NonArraySchemaObject, indent: string) => {
  return obj.properties
    ? `{\n${Object.keys(obj.properties)
        .filter(name => {
          const target = obj.properties![name]
          return !isRefObject(target) && !target.deprecated
        })
        .map(
          name =>
            `${indent}  ${getPropertyName(name)}${
              obj?.required?.includes(name) ? '' : '?'
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
            }: ${schema2value(obj.properties![name], `${indent}  `)}`
        )
        .join('\n')}\n${indent}}`
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
      .map(s => isObjectSchema(s) && object2value(s, indent))
      .join(' & ')}`
  } else if (schema.enum) {
    value = enum2value(schema.enum)
  } else if (isArraySchema(schema)) {
    value = array2value(schema, indent)
  } else if (schema.properties) {
    value = object2value(schema, indent)
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
  if (text === '*') return '_any'
  if (!/^{/.test(text)) return text

  const valName = text.slice(1, -1)
  // const method = methodNames.find(name => methods[name]?.parameters?.find((param) => !isRefObject(param) && param.name === valName && param.in === 'path'))
  // return `_${valName}${method ? `@${type2value(methods[method]!.parameters!.filter((param) => !isRefObject(param) && param.name === valName && param.in === 'path')[0], '')}` : ''}`
  return `_${valName}`
}

const resolveParamsRef = (openapi: OpenAPIV3.Document, ref: string): OpenAPIV3.ParameterObject => {
  const target = openapi.components?.parameters![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveParamsRef(openapi, target.$ref) : target
}

const resolveSchemasRef = (openapi: OpenAPIV3.Document, ref: string): OpenAPIV3.SchemaObject => {
  const target = openapi.components?.schemas![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveSchemasRef(openapi, target.$ref) : target
}

const resolveResRef = (openapi: OpenAPIV3.Document, ref: string): OpenAPIV3.ResponseObject => {
  const target = openapi.components?.responses![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveResRef(openapi, target.$ref) : target
}

const resolveReqRef = (openapi: OpenAPIV3.Document, ref: string): OpenAPIV3.RequestBodyObject => {
  const target = openapi.components?.requestBodies![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveReqRef(openapi, target.$ref) : target
}

const parameters2interfaces = (
  params: OpenAPIV3.ComponentsObject['parameters'],
  openapi: OpenAPIV3.Document
) =>
  params &&
  Object.keys(params)
    .filter(defKey => {
      const target = params[defKey]
      return !(isRefObject(target) ? resolveParamsRef(openapi, target.$ref) : target).deprecated
    })
    .map(defKey => {
      const target = params[defKey]
      const defName = defKey2defName(defKey)

      return isRefObject(target)
        ? `
export interface ${defName} extends ${$ref2Type(target.$ref)} {}
`
        : `
export interface ${defName} {
  ${getPropertyName(target.name)}${target.required ? '' : '?'}: ${
            target.schema ? schema2value(target.schema, '') : 'null'
          }
}
`
    })
    .join('')

const schemas2interfaces = (
  schemas: OpenAPIV3.ComponentsObject['schemas'],
  openapi: OpenAPIV3.Document
) =>
  schemas &&
  Object.keys(schemas)
    .filter(defKey => {
      const target = schemas[defKey]
      return !(isRefObject(target) ? resolveSchemasRef(openapi, target.$ref) : target).deprecated
    })
    .map(defKey => {
      const target = schemas[defKey]
      const defName = defKey2defName(defKey)

      return isRefObject(target)
        ? `
export interface ${defName} extends ${$ref2Type(target.$ref)} {}
`
        : isArraySchema(target)
        ? `
export type ${defName} = ${array2value(target, '')}
`
        : target.enum
        ? `
export type ${defName} = ${enum2value(target.enum)}
`
        : target.allOf
        ? `
export interface ${defName} extends ${target.allOf
            .filter(s => isRefObject(s))
            .map(s => isRefObject(s) && $ref2Type(s.$ref))
            .join(', ')} ${target.allOf
            .filter(s => isObjectSchema(s))
            .map(s => isObjectSchema(s) && object2value(s, ''))
            .join('')}
`
        : `
export interface ${defName} ${object2value(target, '')}
`
    })
    .join('')

export default (openapi: OpenAPIV3.Document): Template => {
  const files: { file: string[]; methods: string }[] = []

  if (openapi.paths) {
    files.push(
      ...Object.keys(openapi.paths)
        .map((path, _i, pathList) => {
          const isParent = pathList.some(p => new RegExp(`^${path}/.+`).test(p))
          const file = [
            ...path
              .replace(/\/$/, '')
              .split('/')
              .slice(1)
              .map(p => getDirName(p /* , openapi.paths[path] */)),
            ...(isParent ? ['index'] : [])
          ]
          const methods = Object.keys(openapi.paths[path])
            .map(method => {
              const target = openapi.paths[path][method as typeof methodNames[number]]

              if (!target || target.deprecated) return ''

              const params: string[] = []

              if (target.parameters) {
                const reqRefHeaders: string[] = []
                const reqHeaders: string[] = []
                const query: string[] = []
                let queryRequired = false

                target.parameters.forEach(p => {
                  if (isRefObject(p)) {
                    const ref = resolveParamsRef(openapi, p.$ref)
                    switch (ref.in) {
                      case 'header':
                        reqRefHeaders.push($ref2Type(p.$ref))
                        break
                      case 'query':
                        query.push(
                          `${getPropertyName(ref.name)}${ref.required ? '' : '?'}: ${$ref2Type(
                            p.$ref
                          )}`
                        )
                        if (ref.required) queryRequired = true
                        break
                      default:
                        break
                    }
                  } else {
                    switch (p.in) {
                      case 'header':
                        reqHeaders.push(
                          `${getPropertyName(p.name)}${p.required ? '' : '?'}: ${
                            p.schema ? schema2value(p.schema, '  ') : 'null'
                          }`
                        )
                        break
                      case 'query':
                        query.push(
                          `${getPropertyName(p.name)}${p.required ? '' : '?'}: ${
                            p.schema ? schema2value(p.schema, '  ') : 'null'
                          }`
                        )
                        if (p.required) queryRequired = true
                        break
                      default:
                        break
                    }
                  }
                })

                if (reqHeaders.length || reqRefHeaders.length) {
                  params.push(
                    `    reqHeaders?: ${reqRefHeaders.join(' & ')}${
                      reqRefHeaders.length && reqHeaders.length ? ' & ' : ''
                    }${reqHeaders.length ? `{\n      ${reqHeaders.join('\n      ')}\n    }` : ''}\n`
                  )
                }

                if (query.length) {
                  params.push(
                    `    query${queryRequired ? '' : '?'}: {\n      ${query.join(
                      '\n      '
                    )}\n    }\n`
                  )
                }
              }

              if (target.responses) {
                const code = Object.keys(target.responses).find(code => /^20/.test(code))
                if (code) {
                  let resData = ''
                  const resHeaders: string[] = []
                  const res = target.responses[code]

                  if (isRefObject(res)) {
                    const ref = resolveResRef(openapi, res.$ref)
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
                let required = false

                if (isRefObject(target.requestBody)) {
                  const ref = resolveReqRef(openapi, target.requestBody.$ref)
                  if (ref.content['multipart/form-data']?.schema) {
                    reqType = 'FormData'
                  } else if (ref.content['application/x-www-form-urlencoded']?.schema) {
                    reqType = 'URLSearchParams'
                  }

                  reqData = $ref2Type(target.requestBody.$ref)
                  required = !!ref.required
                } else {
                  const typeSet = [
                    ['multipart/form-data', 'FormData'],
                    ['application/x-www-form-urlencoded', 'URLSearchParams'],
                    ['application/json', '']
                  ]

                  for (let i = 0; i < typeSet.length; i += 1) {
                    if (target.requestBody.content[typeSet[i][0]]?.schema) {
                      reqType = typeSet[i][1]
                      reqData = schema2value(
                        target.requestBody.content[typeSet[i][0]].schema!,
                        '    '
                      )
                      required = !!target.requestBody.required

                      break
                    }
                  }
                }

                if (reqType) {
                  params.push(`    reqType: ${reqType}\n`)
                }

                if (reqData) {
                  params.push(`    reqData${required ? '' : '?'}: ${reqData}\n`)
                }
              }

              return params.length ? `  ${method}: {\n${params.join('\n')}  }` : ''
            })
            .filter(method => method)

          if (methods.length) {
            const methodsText = methods.join('\n\n')

            return {
              file,
              methods: `/* eslint-disable */\n${
                / Types\./.test(methodsText)
                  ? `import * as Types from '${file.map(() => '').join('../')}@types'\n\n`
                  : ''
              }export interface Methods {\n${methodsText}\n}\n`
            }
          } else {
            return {
              file,
              methods: ''
            }
          }
        })
        .filter(file => file.methods)
    )
  }

  return {
    baseURL: openapi.servers?.[0].url || '',
    types: `/* eslint-disable */${parameters2interfaces(openapi.components?.parameters, openapi) ||
      ''}${schemas2interfaces(openapi.components?.schemas, openapi) || ''}`.replace(
      / Types\./g,
      ' '
    ),
    files
  }
}
