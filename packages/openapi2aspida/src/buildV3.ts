import { OpenAPIV3 } from 'openapi-types'
import {
  isRefObject,
  $ref2Type,
  getPropertyName,
  schema2value,
  BINARY_TYPE
} from './builderUtils/converters'
import {
  props2String,
  Prop,
  PropValue,
  value2String,
  description2Doc
} from './builderUtils/props2String'
import { resolveParamsRef, resolveResRef, resolveReqRef } from './builderUtils/resolvers'
import getDirName from './builderUtils/getDirName'
import schemas2Props from './builderUtils/schemas2Props'
import parameters2Props from './builderUtils/parameters2Props'

const methodNames = ['get', 'post', 'put', 'delete', 'head', 'options', 'patch'] as const

const getParamsList = (
  openapi: OpenAPIV3.Document,
  params?: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[]
) => params?.map(p => (isRefObject(p) ? resolveParamsRef(openapi, p.$ref) : p)) || []

export default (openapi: OpenAPIV3.Document) => {
  const files: { file: string[]; methods: string }[] = []
  const schemas = schemas2Props(openapi.components?.schemas, openapi) || []
  const parameters = parameters2Props(openapi.components?.parameters, openapi, false) || []

  files.push(
    ...Object.keys(openapi.paths)
      .map(path => {
        const methodProps = Object.keys(openapi.paths[path]!).filter(
          (method): method is typeof methodNames[number] =>
            methodNames.includes(method as typeof methodNames[number])
        )

        const file = [
          ...path
            .replace(/\/$/, '')
            .split('/')
            .slice(1)
            .map(p =>
              getDirName(
                p,
                [
                  ...getParamsList(openapi, openapi.paths[path]!.parameters),
                  ...methodProps.reduce(
                    (prev, c) => [
                      ...prev,
                      ...getParamsList(openapi, openapi.paths[path]![c]?.parameters)
                    ],
                    [] as OpenAPIV3.ParameterObject[]
                  )
                ],
                false
              )
            ),
          'index'
        ]

        const methods = methodProps
          .map<Prop | null>(method => {
            const target = openapi.paths[path]![method]!

            if (target.deprecated) return null

            const params: Prop[] = []

            if (target.parameters || openapi.paths[path]!.parameters) {
              const reqRefHeaders: PropValue[] = []
              const reqHeaders: Prop[] = []
              const refQuery: PropValue[] = []
              const query: Prop[] = []
              let queryRequired = false

              ;[...(openapi.paths[path]!.parameters || []), ...(target.parameters || [])].forEach(
                p => {
                  if (isRefObject(p)) {
                    const ref = resolveParamsRef(openapi, p.$ref)
                    const val = {
                      isArray: false,
                      isEnum: false,
                      nullable: false,
                      description: ref.description ?? null,
                      value: $ref2Type(p.$ref)
                    }

                    switch (ref.in) {
                      case 'header':
                        reqRefHeaders.push(val)
                        break
                      case 'query':
                        refQuery.push(val)
                        queryRequired = queryRequired || (ref.required ?? false)
                        break
                      default:
                        break
                    }
                  } else {
                    const value = schema2value(p.schema, false)
                    if (!value) return

                    const prop = {
                      name: getPropertyName(p.name),
                      required: p.required ?? false,
                      description: p.description ?? null,
                      values: [value]
                    }

                    switch (p.in) {
                      case 'header':
                        reqHeaders.push(prop)
                        break
                      case 'query':
                        query.push(prop)
                        queryRequired = queryRequired || (p.required ?? false)
                        break
                      default:
                        break
                    }
                  }
                }
              )

              if (reqHeaders.length || reqRefHeaders.length) {
                params.push({
                  name: 'reqHeaders',
                  required: reqHeaders.some(header => header.required),
                  description: null,
                  values: [
                    ...reqRefHeaders,
                    ...(reqHeaders.length
                      ? [
                          {
                            isArray: false,
                            isEnum: false,
                            nullable: false,
                            description: null,
                            value: reqHeaders
                          }
                        ]
                      : [])
                  ]
                })
              }

              if (refQuery.length || query.length) {
                params.push({
                  name: 'query',
                  required: queryRequired,
                  description: null,
                  values: [
                    ...refQuery,
                    ...(query.length
                      ? [
                          {
                            isArray: false,
                            isEnum: false,
                            nullable: false,
                            description: null,
                            value: query
                          }
                        ]
                      : [])
                  ]
                })
              }
            }

            if (target.responses) {
              const code = Object.keys(target.responses).find(code => code.match(/^(20\d|30\d)$/))
              if (code) {
                params.push({
                  name: 'status',
                  required: true,
                  description: null,
                  values: [
                    {
                      isArray: false,
                      isEnum: false,
                      nullable: false,
                      description: null,
                      value: code
                    }
                  ]
                })

                const res = target.responses[code]
                const ref = isRefObject(res) ? resolveResRef(openapi, res.$ref) : res
                const content =
                  (ref.content &&
                    Object.entries(ref.content).find(([key]) =>
                      key.startsWith('application/')
                    )?.[1]) ??
                  ref.content?.[Object.keys(ref.content)[0]]

                if (content?.schema) {
                  const val = schema2value(content.schema, true, true)
                  val &&
                    params.push({
                      name: 'resBody',
                      required: true,
                      description: ref.description,
                      values: [val]
                    })
                }

                if (ref.headers) {
                  params.push({
                    name: 'resHeaders',
                    required: true,
                    description: null,
                    values: [
                      {
                        isArray: false,
                        isEnum: false,
                        nullable: false,
                        description: null,
                        value: Object.keys(ref.headers)
                          .map(header => {
                            const headerData = ref.headers![header]
                            const val = isRefObject(headerData)
                              ? {
                                  isArray: false,
                                  isEnum: false,
                                  description: null,
                                  value: $ref2Type(headerData.$ref)
                                }
                              : schema2value(headerData.schema, true)

                            return (
                              val && {
                                name: getPropertyName(header),
                                required: isRefObject(headerData)
                                  ? true
                                  : headerData.required ?? true,
                                description: isRefObject(headerData)
                                  ? null
                                  : headerData.description,
                                values: [val]
                              }
                            )
                          })
                          .filter((v): v is Prop => !!v)
                      }
                    ]
                  })
                }
              }
            }

            if (target.requestBody) {
              let reqFormat = ''
              let reqBody: PropValue | null = null
              let required = true
              let description: string | null = null

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
                  nullable: false,
                  description: null,
                  value: $ref2Type(target.requestBody.$ref)
                }
                required = ref.required ?? true
                description = ref.description ?? null
              } else {
                required = target.requestBody.required ?? true
                description = target.requestBody.description ?? null

                if (target.requestBody.content['multipart/form-data']?.schema) {
                  reqFormat = 'FormData'
                  reqBody = schema2value(
                    target.requestBody.content['multipart/form-data'].schema,
                    true
                  )
                } else if (
                  target.requestBody.content['application/x-www-form-urlencoded']?.schema
                ) {
                  reqFormat = 'URLSearchParams'
                  reqBody = schema2value(
                    target.requestBody.content['application/x-www-form-urlencoded'].schema,
                    true
                  )
                } else {
                  const content =
                    target.requestBody.content &&
                    Object.entries(target.requestBody.content).find(([key]) =>
                      key.startsWith('application/')
                    )?.[1]

                  if (content?.schema) reqBody = schema2value(content.schema, true)
                }
              }

              if (reqFormat) {
                params.push({
                  name: 'reqFormat',
                  required: true,
                  description: null,
                  values: [
                    {
                      isArray: false,
                      isEnum: false,
                      nullable: false,
                      description: null,
                      value: reqFormat
                    }
                  ]
                })
              }

              if (reqBody) {
                params.push({
                  name: 'reqBody',
                  required,
                  description,
                  values: [reqBody]
                })
              }
            }

            return {
              name: method,
              required: true,
              description: target.description ?? null,
              values: [
                { isArray: false, isEnum: false, nullable: false, description: null, value: params }
              ]
            }
          })
          .filter((method): method is Prop => !!method)

        if (methods.length) {
          const methodsText = props2String(methods, '')
          const hasBinary = methodsText.includes(BINARY_TYPE)
          const hasTypes = /( |<)Types\./.test(methodsText)

          return {
            file,
            methods: `/* eslint-disable */\n${
              hasBinary ? "import type { ReadStream } from 'fs'\n" : ''
            }${hasBinary && !hasTypes ? '\n' : ''}${
              hasTypes
                ? `import type * as Types from '${file.map(() => '').join('../')}@types'\n\n`
                : ''
            }export type Methods = ${methodsText}\n`
          }
        } else {
          return { file, methods: '' }
        }
      })
      .filter(file => file.methods)
  )

  const typesText =
    parameters.length + schemas.length
      ? [
          ...parameters.map(p => ({
            name: p.name,
            description: null,
            text: typeof p.prop === 'string' ? p.prop : props2String([p.prop], '')
          })),
          ...schemas.map(s => ({
            name: s.name,
            description: s.value.description,
            text: value2String(s.value, '').replace(/\n {2}/g, '\n')
          }))
        ]
          .map(p => `\n${description2Doc(p.description, '')}export type ${p.name} = ${p.text}\n`)
          .join('')
          .replace(/(\W)Types\./g, '$1')
          .replace(/\]\?:/g, ']:')
      : null

  return {
    openapi, // for api-types
    baseURL: openapi.servers?.[0]?.url || '',
    types:
      typesText &&
      `/* eslint-disable */${
        typesText.includes(BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : ''
      }${typesText}`,
    files
  }
}
