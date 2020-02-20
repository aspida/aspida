import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, defKey2defName, $ref2Type, getPropertyName, schema2value } from './converters'
import { Prop } from './props2String'
import { resolveParamsRef } from './resolvers'

export type Parameter = { name: string; props: string | Prop[] }

export default (params: OpenAPIV3.ComponentsObject['parameters'], openapi: OpenAPIV3.Document) =>
  params &&
  Object.keys(params)
    .filter(defKey => {
      const target = params[defKey]
      return !(isRefObject(target) ? resolveParamsRef(openapi, target.$ref) : target).deprecated
    })
    .map(defKey => {
      const target = params[defKey]
      let props: Parameter['props']

      if (isRefObject(target)) {
        props = $ref2Type(target.$ref)
      } else {
        const value = schema2value(target.schema)
        if (!value) return null

        props = [
          {
            name: getPropertyName(target.name),
            required: !!target.required,
            isOneOf: false,
            values: [value]
          }
        ]
      }

      return { name: defKey2defName(defKey), props }
    })
    .filter((v): v is Parameter => !!v)
