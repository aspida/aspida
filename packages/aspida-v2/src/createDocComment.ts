import type { Doc, Method } from './parseInterface'

const propList = [
  { type: 'query', label: '@param option.query -' },
  { type: 'reqHeaders', label: '@param option.headers -' },
  { type: 'reqBody', label: '@param option.body -' },
  { type: 'resBody', label: '@returns' }
] as const

export default (indent: string, doc: Doc = [], props?: Method['props']) =>
  doc.length || propList.some(p => props?.[p.type]?.doc)
    ? `${indent}/**${
        doc.length
          ? `
${indent} * ${doc.join(`\n${indent} * `)}`
          : ''
      }${propList.some(p => props?.[p.type]?.doc) ? '\n' : ''}${propList
        .filter(p => props?.[p.type]?.doc)
        .map(p => `${indent} * ${p.label} ${props?.[p.type]?.doc?.join(`\n${indent} * `)}`)
        .join('\n')}
${indent} */
`
    : ''
