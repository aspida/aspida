import { LowerHttpMethod, AspidaMethodParams } from './'

type MethodsProperties = keyof AspidaMethodParams
type Prop = { value: string; hasQuestion: boolean }
export interface Method {
  name: LowerHttpMethod
  props: Partial<Record<MethodsProperties, Prop>>
}

const quoteRegExp = /['"]/

const getStringValue = (text: string): { value: string; length: number } => {
  const textLength = text.length
  let value = ''
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
      break
    } else {
      value += char
    }
  }

  return { value, length: cursor }
}

const getName = (text: string): { value: string; hasQuestion: boolean; length: number } => {
  let value = ''
  let hasQuestion = false
  let length = 0

  if (quoteRegExp.test(text[0])) {
    const stringValue = getStringValue(text)
    value = stringValue.value
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

const getProp = (text: string): { name: MethodsProperties; value: Prop; length: number } => {
  const textLength = text.length
  const name = getName(text)
  const value: Prop = { value: '', hasQuestion: name.hasQuestion }
  let cursor = name.length
  let indentLevel = 0

  while (cursor < textLength) {
    const char = text[cursor]
    if (quoteRegExp.test(char)) {
      const stringValue = getStringValue(text.slice(cursor))
      cursor += stringValue.length
      value.value += stringValue.value
    } else {
      cursor += 1

      if (char === '{') {
        indentLevel += 1
      } else if (char === '}') {
        indentLevel -= 1
      } else if (char === ';' && indentLevel === 0) {
        break
      }

      value.value += char
    }
  }

  return { name: name.value as MethodsProperties, value, length: cursor }
}

const getMethod = (targetText: string): { method: Method | null; length: number } => {
  const textLength = targetText.length

  if (targetText.startsWith('}')) return { method: null, length: textLength }

  const methodName = getName(targetText)
  let cursor = methodName.length
  const props: Method['props'] = {}

  while (cursor < textLength) {
    const text = targetText.slice(cursor)

    if (text.startsWith('}')) {
      cursor += text[1] === ';' ? 2 : 1
      break
    } else {
      const prop = getProp(text.replace(/^{;?/, ''))

      cursor += prop.length + (text.startsWith('{;') ? 2 : text.startsWith(';') ? 1 : 0)
      props[prop.name] = prop.value
    }
  }

  return { method: { name: methodName.value as LowerHttpMethod, props }, length: cursor }
}

const getMethods = (targetText: string): Method[] => {
  const textLength = targetText.length
  const methods: Method[] = []
  let cursor = 0

  while (cursor < textLength) {
    const { method, length } = getMethod(targetText.slice(cursor).replace(/^{;?/, ''))
    cursor += length + (targetText.startsWith('{;') ? 2 : targetText.startsWith(';') ? 1 : 0)
    if (method) methods.push(method)
  }

  return methods
}

export default (text: string, name: string): Method[] | null => {
  const interfaceRegExp = new RegExp(`(^|\n)export interface ${name} ?{`)
  if (!interfaceRegExp.test(text)) return null

  return getMethods(
    text
      .split(interfaceRegExp)[2]
      .replace(/\n/g, ';')
      .replace(/ /g, '')
      .replace(';', '')
      .replace(/;+/g, ';')
  )
}
