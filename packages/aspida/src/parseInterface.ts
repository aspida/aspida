import { LowerHttpMethod, AspidaMethodParams } from './'

export type Doc = string[]

type MethodsProperties = keyof AspidaMethodParams
type Prop = {
  value: string
  hasQuestion: boolean
  doc: Doc | undefined
}
type MethodProps = Partial<Record<MethodsProperties, Prop>>

export type Method = {
  name: LowerHttpMethod
  props: MethodProps & { polymorph?: MethodProps[] }
  doc?: Doc | undefined
}

const quoteRegExp = /['"]/
const openRegExp = /[(<{]/
const closeRegExp = /[)>}]/
const operatorRegExp = /[|&]/

const parseString = (text: string): { value: string; length: number } => {
  const textLength = text.length
  let value = text[0]
  let cursor = 1
  let isEscapingQuote = false

  while (cursor < textLength) {
    const char = text[cursor]
    cursor += 1

    if (isEscapingQuote) {
      value += char
      isEscapingQuote = false
    } else if (char === '\\' && text.startsWith(text[cursor])) {
      isEscapingQuote = true
    } else if (text.startsWith(char)) {
      value += char
      break
    } else {
      value += char
    }
  }

  return { value, length: cursor }
}

const parseName = (text: string): { value: string; hasQuestion: boolean; length: number } => {
  let value = ''
  let hasQuestion = false
  let length = 0

  if (quoteRegExp.test(text[0])) {
    const stringValue = parseString(text)
    value = stringValue.value.slice(1, -1)
    hasQuestion = text[stringValue.length] === '?'
    length = stringValue.length + +hasQuestion
  } else {
    const name = text.split(':')[0]
    value = name.replace('?', '')
    hasQuestion = /\?$/.test(name)
    length = name.length
  }

  return { value, hasQuestion, length: length + 1 }
}

const countIgnored = (text: string): number => {
  const { length } = text
  let cursor = 0
  let isLineComment = false
  let isMultiComment = false

  while (cursor < length) {
    const [first, second, third] = text.slice(cursor)

    if (isLineComment) {
      if (first === '\n') {
        isLineComment = false
      }
    } else if (isMultiComment) {
      if (`${first}${second}` === '*/') {
        cursor += 1
        isMultiComment = false
      }
    } else if (`${first}${second}${third}` === '/**') {
      break
    } else if (`${first}${second}` === '//') {
      isLineComment = true
      cursor += 1
    } else if (`${first}${second}` === '/*') {
      isMultiComment = true
      cursor += 1
    } else if (/[^ \r\n;,]/.test(first)) {
      break
    }

    cursor += 1
  }

  return cursor
}

const parseDoc = (text: string) => {
  if (!text.startsWith('/**')) return

  const endsIndex = text.indexOf('*/') + 2

  return {
    values: text
      .split(/(\r?\n? +)?\*\//)[0]
      .replace(/^\/\*\*(\r?\n +\*)? ?/, '')
      .split(/\r?\n +\* ?/),
    length: endsIndex + countIgnored(text.slice(endsIndex))
  }
}

const parseTypeName = (text: string): { value: string; length: number } => {
  const { length } = text
  let value = ''
  let cursor = 0

  while (!countIgnored(text.slice(cursor)) && !openRegExp.test(text[cursor]) && cursor < length) {
    value += text[cursor]
    cursor += 1
  }

  return { value, length: cursor }
}

const parseObject = (text: string): { value: string; length: number } => {
  const { length } = text
  let value = ''
  let cursor = 0
  let indentLevel = 0

  while (cursor < length) {
    const char = text[cursor]

    if (quoteRegExp.test(char)) {
      const val = parseString(text.slice(cursor))
      value += val.value
      cursor += val.length
    } else {
      if (openRegExp.test(char)) indentLevel += 1
      else if (closeRegExp.test(char)) indentLevel -= 1

      value += char
      cursor += 1
    }

    cursor += countIgnored(text.slice(cursor))

    if (!indentLevel) break
  }

  return { value, length: cursor }
}

const parseTaple = (text: string): { value: MethodProps[]; length: number } => {
  let cursor = 1 // '['
  const { length } = text
  const propsList: MethodProps[] = []

  while (text[cursor] !== ']' && cursor < length) {
    const props: MethodProps = {}

    cursor += countIgnored(text.slice(cursor)) + 1 // '{'
    cursor += countIgnored(text.slice(cursor))

    while (text[cursor] !== '}' && cursor < length) {
      const prop = parseProp(text.slice(cursor)) as {
        name: MethodsProperties
        value: Prop
        length: number
      }

      cursor += prop.length
      props[prop.name] = prop.value
    }

    cursor += 1 // '}'
    cursor += countIgnored(text.slice(cursor))
    propsList.push(props)
  }

  cursor += countIgnored(text.slice(cursor))
  cursor += 1 // ']'
  return { value: propsList, length: cursor + countIgnored(text.slice(cursor)) }
}

const parseProp = (
  text: string
):
  | { name: MethodsProperties; value: Prop; length: number }
  | { name: 'polymorph'; value: MethodProps[]; length: number } => {
  let cursor = 0
  const doc = parseDoc(text)
  if (doc) {
    cursor += doc.length
  }

  const { length } = text
  const name = parseName(text.slice(cursor))
  cursor += name.length

  if (name.value === 'polymorph') {
    cursor += countIgnored(text.slice(cursor))
    const val = parseTaple(text.slice(cursor))
    return { name: 'polymorph', value: val.value, length: cursor + val.length }
  }

  const prop: Prop = { value: '', hasQuestion: name.hasQuestion, doc: doc?.values }

  while (cursor < length) {
    cursor += countIgnored(text.slice(cursor))

    if (operatorRegExp.test(text[cursor])) {
      prop.value += text[cursor]
      cursor += 1
      cursor += countIgnored(text.slice(cursor))
    }

    const char = text[cursor]

    if (quoteRegExp.test(char)) {
      const val = parseString(text.slice(cursor))
      prop.value += val.value
      cursor += val.length
    } else {
      const typeName = parseTypeName(text.slice(cursor))
      prop.value += typeName.value
      cursor += typeName.length

      if (openRegExp.test(text[cursor])) {
        const val = parseObject(text.slice(cursor))
        prop.value += val.value
        cursor += val.length
      }
    }

    cursor += countIgnored(text.slice(cursor))
    if (text.slice(cursor, cursor + 2) === '[]') {
      cursor += 2
      cursor += countIgnored(text.slice(cursor))
    }

    if (!operatorRegExp.test(text[cursor])) break
  }

  return { name: name.value as MethodsProperties, value: prop, length: cursor }
}

const parseMethod = (text: string): { value: Method; length: number } => {
  let cursor = 0
  const doc = parseDoc(text)
  if (doc) {
    cursor += doc.length
  }

  const { length } = text
  const methodName = parseName(text.slice(cursor))
  cursor += methodName.length
  const props: Method['props'] = {}

  cursor += countIgnored(text.slice(cursor)) + 1 // '{'
  cursor += countIgnored(text.slice(cursor))

  while (text[cursor] !== '}' && cursor < length) {
    const prop = parseProp(text.slice(cursor))

    cursor += prop.length
    props[prop.name] = prop.value as any
  }

  cursor += 1 // '}'

  return {
    value: { name: methodName.value as LowerHttpMethod, props, doc: doc?.values },
    length: cursor
  }
}

const parseMethods = (text: string): { methods: Method[]; cursor: number } => {
  const { length } = text
  const methods: Method[] = []
  let cursor = 0

  while (cursor < length) {
    cursor += countIgnored(text.slice(cursor))
    if (text[cursor] === '}') break

    const method = parseMethod(text.slice(cursor))
    cursor += method.length
    methods.push(method.value)
  }

  return { methods, cursor }
}

export const parse = (
  text: string,
  name: string
): { methods: Method[]; doc: Doc | undefined; $textForApiTypes: string } | null => {
  const interfaceRegExp = new RegExp(
    `(^|\r?\n)(export[\\s]*)(interface[\\s]*${name}|type[\\s]*${name}[\\s]*=[\\s]*(\\w+<)?)(\\s?{)`
  )

  if (!interfaceRegExp.test(text)) return null

  const [d, ...m] = text.split(interfaceRegExp)
  const { methods, cursor } = parseMethods(m[m.length - 1])
  const docText = d.slice(d.lastIndexOf('/**'))

  return methods.length
    ? {
        methods,
        doc: /\/\*\*[\s\S]+\*\/$/.test(d) ? parseDoc(docText)?.values : undefined,
        $textForApiTypes: `${docText}${m.slice(0, -1).join('')}${m[m.length - 1].slice(
          0,
          cursor + 1
        )}`
      }
    : null
}
