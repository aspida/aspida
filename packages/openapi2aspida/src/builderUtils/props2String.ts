export type PropValue = {
  isArray: boolean
  isEnum: boolean
  isOneOf?: boolean
  value: Prop[] | string | string[] | PropValue | PropValue[]
}

export type Prop = {
  name: string
  required: boolean
  isOneOf: boolean
  values: PropValue[]
}

const array2String = (val: PropValue, indent: string) => {
  const hasMulti =
    (val.isEnum || typeof val.isOneOf === 'boolean') && Array.isArray(val.value) && val.value.length
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return `${hasMulti ? '(' : ''}${value2String(val, indent)}${hasMulti ? ')' : ''}[]`
}

export const value2String = (v: PropValue, indent: string): string =>
  `${
    typeof v.isOneOf === 'boolean'
      ? // eslint-disable-next-line @typescript-eslint/no-use-before-define
        values2String(v.value as PropValue[], v.isOneOf, indent)
      : v.isArray
      ? array2String(v.value as PropValue, indent)
      : v.isEnum
      ? (v.value as string[]).join(' | ')
      : Array.isArray(v.value)
      ? // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props2String(v.value as Prop[], `  ${indent}`)
      : v.value
  }`

const values2String = (values: PropValue[], isOneOf: boolean, indent: string) =>
  values.map(a => value2String(a, indent)).join(isOneOf ? ' | ' : ' & ')

const isMultiLine = (values: PropValue[]) => values.find(v => !v.isEnum && Array.isArray(v.value))

export const props2String = (props: Prop[], indent: string) =>
  `{\n${props
    .map(
      (p, i) =>
        `  ${indent}${p.name}${p.required ? '' : '?'}: ${values2String(
          p.values,
          p.isOneOf,
          indent
        )}${
          props.length - 1 === i || isMultiLine(p.values) || isMultiLine(props[i + 1].values)
            ? '\n'
            : ''
        }`
    )
    .join('\n')}${indent}}`
