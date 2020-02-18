import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, defKey2defName, schema2value } from './converters'
import { value2String } from './props2String'
import { resolveSchemasRef } from './resolvers'

export default (schemas: OpenAPIV3.ComponentsObject['schemas'], openapi: OpenAPIV3.Document) =>
  schemas &&
  Object.keys(schemas)
    .filter(defKey => {
      const target = schemas[defKey]
      return !(isRefObject(target) ? resolveSchemasRef(openapi, target.$ref) : target).deprecated
    })
    .map(defKey => {
      const value = schema2value(schemas[defKey])
      if (!value) return null

      return `\nexport type ${defKey2defName(defKey)} = ${value2String(value, '').replace(
        /\n {2}/g,
        '\n'
      )}\n`
    })
    .filter(v => v)
    .join('')
