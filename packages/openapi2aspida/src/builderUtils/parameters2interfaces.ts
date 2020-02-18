import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, defKey2defName, $ref2Type, getPropertyName, schema2value } from './converters'
import { props2String } from './props2String'
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
      let typeString: string

      if (isRefObject(target)) {
        typeString = $ref2Type(target.$ref)
      } else {
        const value = schema2value(target.schema)
        if (!value) return null

        typeString = props2String(
          [
            {
              name: getPropertyName(target.name),
              required: !!target.required,
              isOneOf: false,
              values: [value]
            }
          ],
          ''
        )
      }

      return `\nexport type ${defName} = ${typeString}\n`
    })
    .filter(v => v)
    .join('')
