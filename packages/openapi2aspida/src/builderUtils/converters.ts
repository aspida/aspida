/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { Prop, PropValue } from './props2String'

export const defKey2defName = (key: string) => key.replace(/[^a-zA-Z0-9$_]/g, '_')

export const $ref2TypeName = (ref: string) => ref.split('/').pop() || ''

// $ref2Type: replace /Array$/ for Swagger 2.0
export const $ref2Type = (ref: string) =>
  `Types.${defKey2defName($ref2TypeName(ref)).replace(/Array$/, '[]')}`

export const isRefObject = (
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

export const isObjectSchema = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
): schema is OpenAPIV3.NonArraySchemaObject => !isRefObject(schema) && schema.type !== 'array'

export const getPropertyName = (name: string) =>
  /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ? name : `'${name}'`

const of2Values = (obj: OpenAPIV3.SchemaObject): PropValue[] | null => {
  const values =
    (obj.oneOf || obj.allOf || [])
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      .map(p => schema2value(p))
      .filter(v => v) as PropValue[]
  return values.length ? values : null
}

const object2value = (obj: OpenAPIV3.NonArraySchemaObject): Prop[] | null => {
  if (!obj.properties) return null

  const value =
    Object.keys(obj.properties)
      .filter(name => {
        const target = obj.properties![name]
        return isRefObject(target) || !target.deprecated
      })
      .map<Prop | null>(name => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const val = schema2value(obj.properties![name])
        if (!val) return null

        return {
          name: getPropertyName(name),
          required: !!obj.required?.includes(name),
          isOneOf: false,
          values: [val]
        }
      })
      .filter(v => v) as Prop[]

  return value.length ? value : null
}

export const schema2value = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined
): PropValue | null => {
  if (!schema) return null

  let isArray = false
  let isEnum = false
  let isOneOf
  let value: PropValue['value'] | null = null

  if (isRefObject(schema)) {
    value = $ref2Type(schema.$ref)
  } else if (schema.oneOf || schema.allOf) {
    isOneOf = !!schema.oneOf
    value = of2Values(schema)
  } else if (schema.enum) {
    isEnum = true
    value = schema.enum
  } else if (isArraySchema(schema)) {
    isArray = true
    value = schema2value(schema.items)
  } else if (schema.properties) {
    value = object2value(schema)
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

  return value ? { isArray, isEnum, isOneOf, value } : null
}
