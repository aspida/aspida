import path from 'path'
import createDocComment from './createDocComment'
import createTemplateValues from './createTemplateValues'
import { AspidaConfig } from './getConfigs'
import { DirentTree, FileData, getDirentTree } from './getDirentTree'

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

const createTemplate = (
  tree: DirentTree,
  baseURL: string,
  trailingSlash: boolean,
  basePath: string,
  outputMode: AspidaConfig['outputMode']
) => {
  const { api, imports, pathes } = createTemplateValues(tree, basePath, trailingSlash, outputMode)
  const headImports = [
    `import type { AspidaClient${api.includes('AspidaResponse') ? ', AspidaResponse' : ''}${
      api.includes('BasicHeaders') ? ', BasicHeaders' : ''
    } } from 'aspida'`
  ]
  if (api.includes('dataToURLString')) {
    headImports.push("import { dataToURLString } from 'aspida'")
  }
  const text = `<% headImports %>
<% imports %>

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
    .replace('<% headImports %>', headImports.join('\n'))
    .replace('<% imports %>', imports.join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(tree.path, '$api.ts') }
}

export default ({ input, baseURL, trailingSlash, outputEachDir, outputMode }: AspidaConfig) => {
  const direntTree = getDirentTree(input)
  const templates = [createTemplate(direntTree, baseURL, trailingSlash, '', outputMode)]

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
          createTemplate(c.tree, baseURL, trailingSlash, c.tree.path.replace(input, ''), outputMode)
        )

        appendTemplate(c.tree)
      })
    }

    appendTemplate(direntTree)
  }

  return templates
}
