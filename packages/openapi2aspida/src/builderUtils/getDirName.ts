import { OpenAPIV3 } from 'openapi-types'
import { getPropertyName, schema2value } from './converters'

export default (text: string, params: OpenAPIV3.ParameterObject[]) => {
  if (text === '*') return '_any'
  if (!/^{/.test(text)) return text

  const valName = text.slice(1, -1)
  const schemaVal = schema2value(params.find(p => p.in === 'path' && p.name === valName)?.schema)

  return `_${getPropertyName(valName)}${
    schemaVal && typeof schemaVal.value === 'string' ? `@${schemaVal.value}` : ''
  }`
}
