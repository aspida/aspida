import { OpenAPIV3 } from 'openapi-types'
import {
  isRefObject,
  defKey2defName,
  $ref2Type,
  isArraySchema,
  array2value,
  enum2value,
  isObjectSchema,
  object2value
} from './converters'
import { resolveSchemasRef } from './resolvers'

export default (schemas: OpenAPIV3.ComponentsObject['schemas'], openapi: OpenAPIV3.Document) =>
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
        ? `\nexport interface ${defName} extends ${$ref2Type(target.$ref)} {}\n`
        : isArraySchema(target)
        ? `\nexport type ${defName} = ${array2value(target, '')}\n`
        : target.enum
        ? `\nexport type ${defName} = ${enum2value(target.enum)}\n`
        : target.allOf
        ? `\nexport interface ${defName} extends ${target.allOf
            .filter(s => isRefObject(s))
            .map(s => isRefObject(s) && $ref2Type(s.$ref))
            .join(', ')} ${target.allOf
            .filter(s => isObjectSchema(s))
            .map(s => isObjectSchema(s) && object2value(s, ''))
            .join('')}\n`
        : `\nexport interface ${defName} ${object2value(target, '')}\n`
    })
    .join('')
