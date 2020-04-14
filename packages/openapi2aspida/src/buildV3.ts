/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { Template } from './buildTemplate'
import { isRefObject, $ref2Type, getPropertyName, schema2value } from './builderUtils/converters'
import { props2String, Prop, PropValue, value2String } from './builderUtils/props2String'
import { resolveParamsRef, resolveResRef, resolveReqRef } from './builderUtils/resolvers'
import getDirName from './builderUtils/getDirName'
import schemas2Props from './builderUtils/schemas2Props'
import parameters2Props from './builderUtils/parameters2Props'
import methods2MockString from './builderUtils/methods2MockString'

const methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'] as const

export default (
  openapi: OpenAPIV3.Document,
  needsMock: boolean,
  needsMockType: boolean
): Template => {
  const files: { file: string[]; methods: string }[] = []
  const schemas = schemas2Props(openapi.components?.schemas, openapi) || []
  const parameters = parameters2Props(openapi.components?.parameters, openapi) || []

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
            .map<Prop | null>(method => {
              const target = openapi.paths[path][method as typeof methodNames[number]]

              if (!target || target.deprecated) return null

              const params: Prop[] = []

              if (target.parameters) {
                const reqRefHeaders: PropValue[] = []
                const reqHeaders: Prop[] = []
                const refQuery: PropValue[] = []
                const query: Prop[] = []
                let queryRequired = false

                target.parameters.forEach(p => {
                  if (isRefObject(p)) {
                    const ref = resolveParamsRef(openapi, p.$ref)
                    const val = { isArray: false, isEnum: false, value: $ref2Type(p.$ref) }

                    switch (ref.in) {
                      case 'header':
                        reqRefHeaders.push(val)
                        break
                      case 'query':
                        refQuery.push(val)
                        if (ref.required) queryRequired = true
                        break
                      default:
                        break
                    }
                  } else {
                    const value = schema2value(p.schema)
                    if (!value) return

                    const prop = {
                      name: getPropertyName(p.name),
                      required: !!p.required,
                      isOneOf: false,
                      values: [value]
                    }

                    switch (p.in) {
                      case 'header':
                        reqHeaders.push(prop)
                        break
                      case 'query':
                        query.push(prop)
                        if (p.required) queryRequired = true
                        break
                      default:
                        break
                    }
                  }
                })

                if (reqHeaders.length || reqRefHeaders.length) {
                  params.push({
                    name: 'reqHeaders',
                    required: false,
                    isOneOf: false,
                    values: [
                      ...reqRefHeaders,
                      ...(reqHeaders.length
                        ? [{ isArray: false, isEnum: false, value: reqHeaders }]
                        : [])
                    ]
                  })
                }

                if (refQuery.length || query.length) {
                  params.push({
                    name: 'query',
                    required: queryRequired,
                    isOneOf: false,
                    values: [
                      ...refQuery,
                      ...(query.length ? [{ isArray: false, isEnum: false, value: query }] : [])
                    ]
                  })
                }
              }

              if (target.responses) {
                const code = Object.keys(target.responses).find(code => /^20/.test(code))
                if (code) {
                  const res = target.responses[code]
                  const ref = isRefObject(res) ? resolveResRef(openapi, res.$ref) : res

                  if (ref.content?.['application/json']?.schema) {
                    const val = schema2value(ref.content['application/json'].schema)
                    val &&
                      params.push({
                        name: 'resBody',
                        required: true,
                        isOneOf: false,
                        values: [val]
                      })
                  }

                  if (ref.headers) {
                    params.push({
                      name: 'resHeaders',
                      required: true,
                      isOneOf: false,
                      values: [
                        {
                          isArray: false,
                          isEnum: false,
                          value: Object.keys(ref.headers)
                            .map(header => {
                              const headerData = ref.headers![header]
                              const val = isRefObject(headerData)
                                ? {
                                    isArray: false,
                                    isEnum: false,
                                    value: $ref2Type(headerData.$ref)
                                  }
                                : schema2value(headerData.schema)

                              return (
                                val && {
                                  name: getPropertyName(header),
                                  required: true,
                                  isOneOf: false,
                                  values: [val]
                                }
                              )
                            })
                            .filter(v => v) as Prop[]
                        }
                      ]
                    })
                  }
                }
              }

              if (target.requestBody) {
                let reqFormat = ''
                let reqBody: PropValue | null = null
                let required = false

                if (isRefObject(target.requestBody)) {
                  const ref = resolveReqRef(openapi, target.requestBody.$ref)
                  if (ref.content['multipart/form-data']?.schema) {
                    reqFormat = 'FormData'
                  } else if (ref.content['application/x-www-form-urlencoded']?.schema) {
                    reqFormat = 'URLSearchParams'
                  }

                  reqBody = {
                    isArray: false,
                    isEnum: false,
                    value: $ref2Type(target.requestBody.$ref)
                  }
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
                      reqBody = schema2value(target.requestBody.content[typeSet[i][0]].schema!)
                      required = !!target.requestBody.required

                      break
                    }
                  }
                }

                if (reqFormat) {
                  params.push({
                    name: 'reqFormat',
                    required: true,
                    isOneOf: false,
                    values: [{ isArray: false, isEnum: false, value: reqFormat }]
                  })
                }

                if (reqBody) {
                  params.push({
                    name: 'reqBody',
                    required,
                    isOneOf: false,
                    values: [reqBody]
                  })
                }
              }

              return params.length
                ? {
                    name: method,
                    required: true,
                    isOneOf: false,
                    values: [{ isArray: false, isEnum: false, value: params }]
                  }
                : null
            })
            .filter(method => method) as Prop[]

          if (methods.length) {
            const methodsText = props2String(methods, '')
            const mockText = needsMock
              ? methods2MockString(methods, needsMockType, parameters, schemas)
              : ''

            return {
              file,
              methods: `/* eslint-disable */${
                needsMock && needsMockType ? "\nimport { mockMethods } from 'aspida-mock'" : ''
              }\n${
                / Types\./.test(methodsText)
                  ? `import * as Types from '${file.map(() => '').join('../')}@types'\n\n`
                  : ''
              }export interface Methods ${methodsText}\n${mockText}`
            }
          } else {
            return { file, methods: '' }
          }
        })
        .filter(file => file.methods)
    )
  }

  return {
    baseURL: openapi.servers?.[0]?.url || '',
    types: `/* eslint-disable */${[
      ...parameters.map(p => ({
        name: p.name,
        text: typeof p.props === 'string' ? p.props : props2String(p.props, '')
      })),
      ...schemas.map(s => ({
        name: s.name,
        text: value2String(s.value, '').replace(/\n {2}/g, '\n')
      }))
    ]
      .map(p => `\nexport type ${p.name} = ${p.text}\n`)
      .join('')}`.replace(/ Types\./g, ' '),
    files
  }
}
