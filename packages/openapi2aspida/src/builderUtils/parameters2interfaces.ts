import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, defKey2defName, $ref2Type, schema2value, getPropertyName } from './converters'
import { resolveParamsRef } from './resolvers'

export default (params: OpenAPIV3.ComponentsObject['parameters'], openapi: OpenAPIV3.Document) =>
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
        ? `\nexport interface ${defName} extends ${$ref2Type(target.$ref)} {}\n`
        : `\nexport interface ${defName} {\n  ${getPropertyName(target.name)}${
            target.required ? '' : '?'
          }: ${target.schema ? schema2value(target.schema, '') : 'null'}\n}\n`
    })
    .join('')
