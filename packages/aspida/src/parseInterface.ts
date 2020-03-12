import { LowerHttpMethod, AspidaMethodParams } from './'

type MethodsProperties = keyof AspidaMethodParams
type Prop = { value: string; hasQuestion: boolean }

export interface Method {
  name: LowerHttpMethod
  props: Partial<Record<MethodsProperties, Prop>>
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
    const [first, second] = text.slice(cursor)

    if (isLineComment) {
      if (first === '\n') {
        isLineComment = false
      }
    } else if (isMultiComment) {
      if (first === '*' && second === '/') {
        cursor += 1
        isMultiComment = false
      }
    } else if (first === '/') {
      if (second === '/') {
        isLineComment = true
      } else {
        isMultiComment = true
      }

      cursor += 1
    } else if (/[^ \n]/.test(first)) {
      break
    }

    cursor += 1
  }

  return cursor
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

const parseProp = (text: string): { name: MethodsProperties; value: Prop; length: number } => {
  const { length } = text
  const name = parseName(text)
  const prop: Prop = { value: '', hasQuestion: name.hasQuestion }
  let cursor = name.length

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
  const { length } = text
  const methodName = parseName(text)
  let cursor = methodName.length
  const props: Method['props'] = {}

  cursor += countIgnored(text.slice(cursor)) + 1 // '{'
  cursor += countIgnored(text.slice(cursor))

  while (text[cursor] !== '}' && cursor < length) {
    const prop = parseProp(text.slice(cursor))

    cursor += prop.length
    props[prop.name] = prop.value
  }

  cursor += 1 // '}'

  return { value: { name: methodName.value as LowerHttpMethod, props }, length: cursor }
}

const parseMethods = (text: string): Method[] => {
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

  return methods
}

export default (text: string, name: string): Method[] | null => {
  const interfaceRegExp = new RegExp(`(^|\n)export interface ${name} ?{`)
  if (!interfaceRegExp.test(text)) return null

  const methods = parseMethods(text.split(interfaceRegExp)[2])

  return methods.length ? methods : null
}
