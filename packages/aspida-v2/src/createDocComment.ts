import type { Doc, Method } from './parseInterface'

const propList = [
  { param: 'req', type: 'query', label: '@param option.query -' },
  { param: 'req', type: 'headers', label: '@param option.headers -' },
  { param: 'req', type: 'body', label: '@param option.body -' },
  { param: 'res', type: 'body', label: '@returns' }
] as const

export default (indent: string, doc: Doc = [], params?: Pick<Method, 'req' | 'res' | 'err'>) =>
  doc.length || propList.some(p => params?.[p.param]?.[p.type as 'body']?.doc)
    ? `${indent}/**${
        doc.length
          ? `
${indent} * ${doc.join(`\n${indent} * `).replace(/ \n/g, '\n')}`
          : ''
      }${propList.some(p => params?.[p.param]?.[p.type as 'body']?.doc) ? '\n' : ''}${propList
        .filter(p => params?.[p.param]?.[p.type as 'body']?.doc)
        .map(
          p =>
            `${indent} * ${p.label} ${params?.[p.param]?.[p.type as 'body']?.doc?.join(
              `\n${indent} * `
            )}`
        )
        .join('\n')}
${indent} */
`
    : ''
