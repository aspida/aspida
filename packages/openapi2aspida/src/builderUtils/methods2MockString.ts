/* eslint-disable @typescript-eslint/no-use-before-define */
import { Prop, PropValue } from './props2String'
import { Parameter } from './parameters2Props'
import { Schema } from './schemas2Props'
import { ADDITIONAL_NAME } from './converters'

const primitive2String = (p: string) =>
  (({
    any: "'bar'",
    ArrayBuffer: 'new ArrayBuffer(32)',
    number: '1',
    string: "'a'",
    boolean: 'true',
    null: 'null'
  } as Record<string, string>)[p] || 'undefined')

const resolveTypes = (t: string, params: Parameter[], schemas: Schema[]): string => {
  const [typeName, propName] = t.split(/\['(.+)'\]/)
  const p = params.find(p => p.name === typeName)

  if (p) {
    return typeof p.props === 'string'
      ? resolveTypes(p.props, params, schemas)
      : props2String(p.props, params, schemas)
  } else {
    const { value } = schemas.filter(s => s.name === typeName)[0]
    if (propName) {
      const prop = (value.value as Prop[]).filter(v => v.name === propName)[0]
      return prop.isOneOf
        ? value2String(prop.values[0], params, schemas)
        : allOf2String(prop.values, params, schemas)
    } else {
      return value2String(value, params, schemas)
    }
  }
}
const props2String = (ps: Prop[], params: Parameter[], schemas: Schema[]) =>
  `{ ${ps
    .map(
      p =>
        `${p.name === ADDITIONAL_NAME ? 'foo' : p.name}: ${value2String(
          p.values[0],
          params,
          schemas
        )}`
    )
    .join(', ')} }`
const allOf2String = (vs: PropValue[], params: Parameter[], schemas: Schema[]) =>
  `{ ${vs
    .map(
      (v, i) =>
        `${i ? '...' : ''}${value2String(v, params, schemas).slice(
          i ? undefined : 2,
          i ? undefined : -2
        )}`
    )
    .join(', ')} }`
const value2String = (v: PropValue, params: Parameter[], schemas: Schema[]): string =>
  `${
    typeof v.isOneOf === 'boolean'
      ? v.isOneOf
        ? value2String((v.value as PropValue[])[0], params, schemas)
        : allOf2String(v.value as PropValue[], params, schemas)
      : v.isArray
      ? `[${value2String(v.value as PropValue, params, schemas)}]`
      : v.isEnum
      ? (v.value as string[])[0]
      : Array.isArray(v.value)
      ? props2String(v.value as Prop[], params, schemas)
      : typeof v.value === 'string'
      ? /^Types/.test(v.value)
        ? resolveTypes(v.value.replace('Types.', ''), params, schemas)
        : primitive2String(v.value)
      : value2String(v.value, params, schemas)
  }`
const findProp = (prop: Prop, name: string) =>
  (prop.values[0].value as Prop[]).find(v => v.name === name)
const prop2String = (prop: Prop | undefined, params: Parameter[], schemas: Schema[]) =>
  prop ? `, ${prop.name}: ${value2String(prop.values[0], params, schemas)}` : ''

export default (methods: Prop[], needsMockType: boolean, params: Parameter[], schemas: Schema[]) =>
  `
export default ${needsMockType ? 'mockMethods<Methods>(' : ''}{
${methods
  .map(
    m =>
      `  ${m.name}: () => ({ status: ${findProp(m, 'status')?.values[0].value ?? 204}${[
        'resBody',
        'resHeaders'
      ]
        .map(name => prop2String(findProp(m, name), params, schemas))
        .join('')} })`
  )
  .join(',\n')}
}${needsMockType ? ')' : ''}\n`
