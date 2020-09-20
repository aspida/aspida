import path from 'path'
import { AspidaConfig } from './getConfigs'
import createTemplateValues from './createTemplateValues'
import createDocComment from './createDocComment'
import { getDirentTree, DirentTree, FileData } from './getDirentTree'

const listNotIndexFiles = (tree: DirentTree): string[] => [
  ...tree.children
    .filter(c => !c.name.startsWith('_') && !c.isDir && c.name !== 'index.ts')
    .map(
      c =>
        `${tree.path}/\u001b[31m${c.name}\u001b[0m -> \u001b[32m${c.name.replace(
          '.ts',
          ''
        )}/index.ts\u001b[0m`
    ),
  ...tree.children
    .map(c => (!c.name.startsWith('_') && c.isDir ? listNotIndexFiles(c.tree) : []))
    .reduce((p, c) => [...p, ...c], [])
]

const listNamedFiles = (tree: DirentTree): string[] => [
  ...tree.children
    .filter(c => !c.isDir && c.name !== 'index.ts')
    .map(
      c =>
        `${tree.path}/\u001b[31m${c.name}\u001b[0m -> \u001b[32m${c.name.replace(
          '.ts',
          ''
        )}/index.ts\u001b[0m`
    ),
  ...tree.children
    .map(c => (c.isDir ? listNamedFiles(c.tree) : []))
    .reduce((p, c) => [...p, ...c], [])
]

const listTypeAliasFiles = (tree: DirentTree): string[] => [
  ...tree.children
    .filter(c => /_.+@[A-Z]/.test(c.name))
    .map(
      c =>
        `${tree.path}/\u001b[31m${c.name}\u001b[0m -> \u001b[32m${c.name.replace(
          /@.+?(.ts|$)/,
          '@{number|string}$1'
        )}\u001b[0m`
    ),
  ...tree.children
    .map(c => (c.isDir ? listTypeAliasFiles(c.tree) : []))
    .reduce((p, c) => [...p, ...c], [])
]

const createTemplate = (
  tree: DirentTree,
  baseURL: string,
  trailingSlash: boolean,
  basePath: string
) => {
  const { api, imports, pathes } = createTemplateValues(tree, basePath, trailingSlash)
  const text = `/* eslint-disable */
import { AspidaClient${api.includes('AspidaResponse') ? ', AspidaResponse' : ''}${
    api.includes('BasicHeaders') ? ', BasicHeaders' : ''
  }${api.includes('dataToURLString') ? ', dataToURLString' : ''} } from 'aspida'
<% types %><% imports %>

${createDocComment(
  '',
  tree.children.find((c): c is FileData => !c.isDir && c.name === 'index.ts')?.doc
)}const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '<% baseURL %>' : baseURL).replace(/\\/$/, '')
${pathes.map((p, i) => `  const PATH${i} = ${p}`).join('\n')}
${['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS']
  .filter(m => api.includes(`, ${m}, option`))
  .map(m => `  const ${m} = '${m}'`)
  .join('\n')}

  return <% api %>
}

export type ApiInstance = ReturnType<typeof api>
export default api
`
    .replace(
      '<% types %>',
      api.includes(': ApiTypes.')
        ? `import * as ApiTypes from '${
            basePath
              ? basePath
                  .split('/')
                  .map(() => '')
                  .join('../')
              : './'
          }@types'\n`
        : ''
    )
    .replace('<% imports %>', imports.join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(tree.path, '$api.ts') }
}

let prevNamedFiles: string[] = []
let prevTypeAliasFiles: string[] = []

export default ({ input, baseURL, trailingSlash, outputEachDir }: AspidaConfig) => {
  const direntTree = getDirentTree(input)
  const templates = [createTemplate(direntTree, baseURL, trailingSlash, '')]

  if (outputEachDir) {
    const notIndexFiles = listNotIndexFiles(direntTree)
    if (notIndexFiles.length) {
      console.log(`aspida \u001b[43m\u001b[31mERROR\u001b[0m Since true is specified in outputEachDir at aspida.config.js, you need to rename the following files
  ${notIndexFiles.join('\n  ')}`)

      return []
    }

    const appendTemplate = (tree: DirentTree) => {
      tree.children.forEach(c => {
        if (!c.isDir || c.name.startsWith('_')) return

        templates.push(
          createTemplate(c.tree, baseURL, trailingSlash, c.tree.path.replace(input, ''))
        )

        appendTemplate(c.tree)
      })
    }

    appendTemplate(direntTree)
  }

  const namedFiles = listNamedFiles(direntTree)
  const diffNamedFiles = namedFiles.filter(f => !prevNamedFiles.includes(f))
  const typeAliasFiles = listTypeAliasFiles(direntTree)
  const diffTypeAliasFiles = typeAliasFiles.filter(f => !prevTypeAliasFiles.includes(f))

  if (diffNamedFiles.length) {
    console.log(`aspida \u001b[43m\u001b[30mWARN\u001b[0m {endpoint}.ts format is deprecated. Please rename the following files
  ${diffNamedFiles.join('\n  ')}`)
  }

  if (diffTypeAliasFiles.length) {
    console.log(`aspida \u001b[43m\u001b[30mWARN\u001b[0m {endpoint}@{Type Alias}.ts format is deprecated. Please rename the following names
  ${diffTypeAliasFiles.join('\n  ')}`)
  }

  prevNamedFiles = namedFiles
  prevTypeAliasFiles = typeAliasFiles

  return templates
}
