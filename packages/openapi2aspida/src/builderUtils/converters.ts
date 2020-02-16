/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'

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

export const isArraySchema = (
  schema: OpenAPIV3.SchemaObject
): schema is OpenAPIV3.ArraySchemaObject => schema.type === 'array'

export const isObjectSchema = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
): schema is OpenAPIV3.NonArraySchemaObject => !isRefObject(schema) && schema.type !== 'array'

export const getPropertyName = (name: string) =>
  /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name) ? name : `'${name}'`

export const enum2value = (en: any[]) => `'${en.join("' | '")}'`

export const array2value = (schema: OpenAPIV3.ArraySchemaObject, indent: string) =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  `${schema2value(schema.items, indent)}[]`

export const object2value = (obj: OpenAPIV3.NonArraySchemaObject, indent: string) => {
  return obj.properties
    ? `{\n${Object.keys(obj.properties)
        .filter(name => {
          const target = obj.properties![name]
          return !isRefObject(target) && !target.deprecated
        })
        .map(
          name =>
            `${indent}  ${getPropertyName(name)}${
              obj?.required?.includes(name) ? '' : '?'
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
            }: ${schema2value(obj.properties![name], `${indent}  `)}`
        )
        .join('\n')}\n${indent}}`
    : '{}'
}

export const schema2value = (
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  indent: string
) => {
  if (isRefObject(schema)) {
    return $ref2Type(schema.$ref)
  }

  let value = ''

  if (schema.allOf) {
    value = `${schema.allOf
      .filter(s => isRefObject(s))
      .map(s => isRefObject(s) && $ref2Type(s.$ref))
      .join(' & ')}${
      schema.allOf.filter(s => isRefObject(s)).length &&
      schema.allOf.filter(s => isObjectSchema(s)).length
        ? ' & '
        : ''
    }${schema.allOf
      .filter(s => isObjectSchema(s))
      .map(s => isObjectSchema(s) && object2value(s, indent))
      .join(' & ')}`
  } else if (schema.enum) {
    value = enum2value(schema.enum)
  } else if (isArraySchema(schema)) {
    value = array2value(schema, indent)
  } else if (schema.properties) {
    value = object2value(schema, indent)
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

  return value
}
