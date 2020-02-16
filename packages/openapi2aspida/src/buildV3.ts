/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { Template } from './buildTemplate'
import { isRefObject, $ref2Type, getPropertyName, schema2value } from './builderUtils/converters'
import { resolveParamsRef, resolveResRef, resolveReqRef } from './builderUtils/resolvers'
import getDirName from './builderUtils/getDirName'
import schemas2interfaces from './builderUtils/schemas2interfaces'
import parameters2interfaces from './builderUtils/parameters2interfaces'

const methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'] as const

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
                  let resBody = ''
                  const resHeaders: string[] = []
                  const res = target.responses[code]

                  if (isRefObject(res)) {
                    const ref = resolveResRef(openapi, res.$ref)
                    if (ref.content?.['application/json']?.schema) {
                      resBody = schema2value(ref.content['application/json'].schema, '    ')
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
                      resBody = schema2value(res.content['application/json'].schema, '    ')
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

                  if (resBody) {
                    params.push(`    resBody: ${resBody}\n`)
                  }

                  if (resHeaders.length) {
                    params.push(`    resHeaders: {\n      ${resHeaders.join('\n      ')}\n    }\n`)
                  }
                }
              }

              if (target.requestBody) {
                let reqFormat = ''
                let reqBody = ''
                let required = false

                if (isRefObject(target.requestBody)) {
                  const ref = resolveReqRef(openapi, target.requestBody.$ref)
                  if (ref.content['multipart/form-data']?.schema) {
                    reqFormat = 'FormData'
                  } else if (ref.content['application/x-www-form-urlencoded']?.schema) {
                    reqFormat = 'URLSearchParams'
                  }

                  reqBody = $ref2Type(target.requestBody.$ref)
                  required = !!ref.required
                } else {
                  const typeSet = [
                    ['multipart/form-data', 'FormData'],
                    ['application/x-www-form-urlencoded', 'URLSearchParams'],
                    ['application/json', '']
                  ]

                  for (let i = 0; i < typeSet.length; i += 1) {
                    if (target.requestBody.content[typeSet[i][0]]?.schema) {
                      reqFormat = typeSet[i][1]
                      reqBody = schema2value(
                        target.requestBody.content[typeSet[i][0]].schema!,
                        '    '
                      )
                      required = !!target.requestBody.required

                      break
                    }
                  }
                }

                if (reqFormat) {
                  params.push(`    reqFormat: ${reqFormat}\n`)
                }

                if (reqBody) {
                  params.push(`    reqBody${required ? '' : '?'}: ${reqBody}\n`)
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
