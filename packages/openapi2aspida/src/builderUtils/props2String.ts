import { camelize } from 'humps'

export type PropValue = {
  isArray: boolean
  isEnum: boolean
  nullable: boolean
  hasOf?: 'oneOf' | 'allOf' | 'anyOf'
  description: string | null
  // eslint-disable-next-line no-use-before-define
  value: Prop[] | string | string[] | PropValue | PropValue[]
}

export type Prop = {
  name: string
  required: boolean
  values: PropValue[]
  description: string | null
}

const array2String = (val: PropValue, indent: string) => {
  const hasMulti =
    ((val.isEnum || val.hasOf) && Array.isArray(val.value) && val.value.length) || val.nullable
  return `${hasMulti ? '(' : ''}${value2String(val, indent)}${hasMulti ? ')' : ''}[]`
}

export const value2String = (v: PropValue, indent: string): string =>
  `${
    v.hasOf
      ? values2String(v.value as PropValue[], v.hasOf, indent)
      : v.isArray
      ? array2String(v.value as PropValue, indent)
      : v.isEnum
      ? (v.value as string[]).join(' | ')
      : Array.isArray(v.value)
      ? props2String(v.value as Prop[], `  ${indent}`)
      : v.value
  }${v.nullable ? ' | null' : ''}`

const values2String = (values: PropValue[], hasOf: PropValue['hasOf'], indent: string) =>
  `${hasOf === 'anyOf' ? 'Partial<' : ''}${values
    .map(a => value2String(a, indent))
    .join(hasOf === 'oneOf' ? ' | ' : ' & ')}${hasOf === 'anyOf' ? '>' : ''}`

const isMultiLine = (values: PropValue[]) => values.find(v => !v.isEnum && Array.isArray(v.value))

const escapeDecription = (desc: string): string => {
  return desc.replace(/\*\//g, '* /')
}

export const description2Doc = (desc: string | null, indent: string) => {
  if (!desc) return ''

  const rows = desc.trim().split('\n').map(escapeDecription)
  return rows.length === 1
    ? `${indent}/** ${rows[0]} */\n`
    : `${indent}/**\n${indent} * ${rows.join(`\n${indent} * `)}\n${indent} */\n`
}

export const props2String = (props: Prop[], indent: string) =>
  `{\n${props
    .map((p, i) =>
      (opt =>
        `${description2Doc(p.description, `  ${indent}`)}  ${indent}${camelize(p.name)}${
          opt ? '?' : ''
        }: ${values2String(p.values, undefined, indent)}${opt ? ' | undefined' : ''}${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? '\n'
            : ''
        }`)(!p.required)
    )
    .join('\n')}${indent}}`
