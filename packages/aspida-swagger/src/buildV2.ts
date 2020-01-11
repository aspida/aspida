import { OpenAPIV2 } from 'openapi-types'
import { Template } from './Template'

const $ref2Type = (ref: string) =>
  /^#\/definitions\//.test(ref) ? ref.split('#/definitions/')[1] : ''
const type2value = (prop: OpenAPIV2.SchemaObject, indent: string): string => {
  if (prop.enum) {
    return `'${prop.enum.join("' | '")}'`
  } else if (prop.$ref) {
    return $ref2Type(prop.$ref)
  } else if (prop.type === 'array') {
    return `${type2value(prop.items!, `${indent}  `)}[]`
  } else if (prop.type === 'object') {
    return `{
${Object.keys(prop.properties!)
  .map(
    propKey => `  ${indent}${propKey}${
      prop.properties![propKey].required || (prop.required && prop.required.includes(propKey))
        ? ''
        : '?'
    }: ${type2value(prop.properties![propKey], indent)}
${indent}`
  )
  .join('')}}`
  }

  return ({ integer: 'number', string: 'string', boolean: 'boolean' } as {
    [type: string]: string
  })[typeof prop.type === 'string' ? prop.type : prop.type![0]]
}

const methodNames = ['get', 'post', 'put', 'delete', 'head']
const getDirName = (text: string, methods: OpenAPIV2.PathsObject) => {
  if (!/^{/.test(text)) return text

  const valName = text.slice(1, -1)
  const method = methodNames.find(
    name =>
      methods[name] &&
      methods[name].parameters.find(
        (param: OpenAPIV2.Parameter) => param.name === valName && param.in === 'path'
      )
  )
  return `_${valName}${
    method
      ? `@${type2value(
          methods[method].parameters.find(
            (param: OpenAPIV2.Parameter) => param.name === valName && param.in === 'path'
          ),
          ''
        )}`
      : ''
  }`
}

export default (swagger: OpenAPIV2.Document): Template => {
  const files: { file: string[]; methods: string }[] = []

  if (swagger.paths) {
    files.push(
      ...Object.keys(swagger.paths).map((path, _i, pathList) => {
        const isParent = pathList.some(p => new RegExp(`^${path}/.+`).test(p))
        return {
          file: [
            ...path
              .replace(/\/$/, '')
              .split('/')
              .slice(1)
              .map(p => getDirName(p, swagger.paths[path])),
            ...(isParent ? ['index'] : [])
          ],
          methods: swagger.paths[path]
        }
      })
    )
  }

  return {
    baseURL: !swagger.schemes ? '' : `${swagger.schemes[0]}://${swagger.host}${swagger.basePath}`,
    types:
      swagger.definitions &&
      `/* eslint-disable */${Object.keys(swagger.definitions)
        .map(
          defKey => `
export interface ${defKey} ${type2value(swagger.definitions![defKey], '')}
`
        )
        .join('')}`,
    files
  }
}
