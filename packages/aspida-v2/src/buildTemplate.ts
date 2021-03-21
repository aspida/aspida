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

const createTemplate = (
  tree: DirentTree,
  baseURL: string,
  trailingSlash: boolean,
  basePath: string
) => {
  const { api, imports, pathes } = createTemplateValues(tree, basePath, trailingSlash)
  const text = `/* eslint-disable */
<% imports %>

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS'
type RequestType = 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string' | 'any'
type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206
type BasicHeaders = Record<string, string>

type AspidaRequest = {
  query?: any
  headers?: any
  httpBody?: any
  body?: any
  config?: RequestInit
}

type AspidaParams = {
  query?: any
  headers?: any
  body?: any
  config?: RequestInit
}

const headersToObject = (headers: Headers): any =>
  [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})

const appendDataToFormData = (data: Record<string, any>, formData: FormData) => {
  Object.entries(data).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach(v => formData.append(key, v))
    } else if (val != null) {
      formData.append(key, val)
    }
  })

  return formData
}

const dataToURLString = (data: Record<string, any>) => {
  const searchParams = new URLSearchParams()

  Object.entries(data).forEach(([key, val]) => {
    if (Array.isArray(val)) {
      val.forEach(v => searchParams.append(key, v))
    } else if (val != null) {
      searchParams.append(key, val)
    }
  })

  return searchParams.toString()
}

const hasFormData = typeof FormData !== 'undefined'

const optionToRequest = (
  option?: AspidaParams,
  type?: RequestType
): AspidaRequest | undefined => {
  if (option?.body === undefined) return option

  let httpBody
  let headers: BasicHeaders = {}

  switch (type) {
    case 'FormData':
      if (hasFormData) {
        httpBody = appendDataToFormData(option.body, new FormData())
      } else {
        const formData = new (require('form-data'))()
        httpBody = appendDataToFormData(option.body, formData)
        headers = formData.getHeaders()
      }
      break
    case 'URLSearchParams':
      httpBody = dataToURLString(option.body)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
    case 'any':
      httpBody = option.body
      break
    default:
      httpBody = JSON.stringify(option.body)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { httpBody, ...option, headers: { ...headers, ...option.headers } }
}

const send = async <T = void, U = BasicHeaders, V = HttpStatusOk>(
  client: typeof fetch,
  method: HttpMethod,
  baseURL: string,
  url: string,
  resType: 'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData' | 'void',
  params?: AspidaParams,
  type?: RequestType
) => {
  const request = optionToRequest(params, type)
  const res = await client(
    \`\${baseURL}\${url}\${
      request?.query ? \`?\${dataToURLString(request.query)}\` : ''
    }\`,
    {
      method,
      ...request?.config,
      body: request?.httpBody,
      headers: { ...request?.config?.headers, ...request?.headers }
    }
  )

  return {
    status: res.status as any,
    headers: headersToObject(res.headers),
    body: resType === 'void' ? undefined : await res[resType]()
  } as { status: V, headers: U, body: T }
}

${createDocComment(
  '',
  tree.children.find((c): c is FileData => !c.isDir && c.name === 'index.ts')?.doc
)}const api = (init?: { baseURL?: string; fetch?: typeof fetch; config?: RequestInit}) => {
  const f = init?.fetch ?? fetch
  const prefix = (init?.baseURL ?? '<% baseURL %>').replace(/\\/$/, '')
${pathes.map((p, i) => `  const PATH${i} = ${p}`).join('\n')}
${['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS']
  .filter(m => api.includes(`f, ${m}, prefix,`))
  .map(m => `  const ${m} = '${m}'`)
  .join('\n')}

  return <% api %>
}

export type ApiInstance = ReturnType<typeof api>
export default api
`
    .replace('<% imports %>', imports.join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)

  return { text, filePath: path.posix.join(tree.path, '$api.ts') }
}

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

  return templates
}
