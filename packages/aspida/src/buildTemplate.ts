import path from 'path'
import { BaseConfig } from './getConfig'
import createTemplateValues from './createTemplateValues'
import { getDirentTree, DirentTree } from './getDirentTree'

export type Template = {
  text: string
  filePath: string
}

const listNotIndexFiles = (tree: DirentTree): string[] => {
  return [
    ...tree.children
      .filter(c => !c.name.startsWith('_') && !c.isDir && c.name !== 'index.ts')
      .map(
        c =>
          `${path.posix.join(tree.path, c.name)} -> ${path.posix.join(
            tree.path,
            c.name.replace('.ts', ''),
            'index.ts'
          )}`
      ),
    ...tree.children
      .map(c => (!c.name.startsWith('_') && c.isDir ? listNotIndexFiles(c.tree) : []))
      .reduce((p, c) => [...p, ...c], [])
  ]
}

const createTemplate = (
  tree: DirentTree,
  baseURL: string,
  trailingSlash: boolean,
  appendPrefix?: string
) => {
  const { api, imports } = createTemplateValues(tree, trailingSlash)
  const text = `/* eslint-disable */
import { AspidaClient${api.includes('BasicHeaders') ? ', BasicHeaders' : ''} } from 'aspida'
<% types %><% imports %>

const api = <T>(client: AspidaClient<T>) => {
  const prefix = ${
    appendPrefix ? '`${' : ''
  }(client.baseURL === undefined ? '<% baseURL %>' : client.baseURL).replace(/\\/$/, '')${
    appendPrefix ? `}/${appendPrefix}\`` : ''
  }

  return <% api %>
}

export type ApiInstance = ReturnType<typeof api>
export default api
`
    .replace(
      '<% types %>',
      api.includes(': ApiTypes.')
        ? `import * as ApiTypes from '${
            appendPrefix
              ? appendPrefix
                  .split('/')
                  .map(() => '../')
                  .join('')
              : './'
          }@types'\n`
        : ''
    )
    .replace('<% imports %>', imports.join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(tree.path, '$api.ts') }
}

export default ({ input, baseURL, trailingSlash, outputEachDir }: BaseConfig): Template[] => {
  const direntTree = getDirentTree(input)
  const templates = [createTemplate(direntTree, baseURL, trailingSlash)]

  if (outputEachDir) {
    const notIndexFiles = listNotIndexFiles(direntTree)
    if (notIndexFiles.length) {
      console.error(
        `Error on aspida: Since true is specified in outputEachDir at aspida.config.js, you need to rename the following files\n${notIndexFiles.join(
          '\n'
        )}\n`
      )

      return []
    }

    const appendTemplate = (tree: DirentTree) => {
      tree.children.forEach(c => {
        if (!c.isDir || c.name.startsWith('_')) return

        templates.push(
          createTemplate(
            c.tree,
            baseURL,
            trailingSlash,
            c.tree.path.replace(input, '').replace(/^\//, '')
          )
        )

        appendTemplate(c.tree)
      })
    }

    appendTemplate(direntTree)
  }

  return templates
}
