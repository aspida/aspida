import fs from 'fs'
import path from 'path'
import createTemplateValues from './createTemplateValues'
import createDocComment from './createDocComment'
import { getDirentTree, DirentTree, FileData } from './getDirentTree'
import { version } from '.'
import type { AspidaConfig } from './getConfigs'

const listNotIndexFiles = (tree: DirentTree): string[] => [
  ...tree.children
    .filter(c => !c.name.startsWith('[') && !c.isDir && c.name !== 'index.ts')
    .map(
      c =>
        `${tree.path}/\u001b[31m${c.name}\u001b[0m -> \u001b[32m${c.name.replace(
          '.ts',
          ''
        )}/index.ts\u001b[0m`
    ),
  ...tree.children
    .map(c => (!c.name.startsWith('[') && c.isDir ? listNotIndexFiles(c.tree) : []))
    .reduce((p, c) => [...p, ...c], [])
]

const createTemplate = (
  tree: DirentTree,
  baseURL: string,
  trailingSlash: boolean,
  basePath: string,
  constantsPath: string | false,
  typesPath: string | false
) => {
  const { api, imports, pathes } = createTemplateValues(tree, basePath, trailingSlash)
  const text = `/* $api.ts was generated by aspida@${version()} */
/* eslint-disable */
<% imports %>

type BasicHeaders = Record<string, string>

type Params = {
  query?: any
  headers?: any
  body?: any
  init?: RequestInit
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

const optionToRequest = (
  method: string,
  params?: Params,
  format?: BodyInit
): RequestInit => {
  if (!params) return { method }

  let body
  let headers: BasicHeaders = {}

  switch (format) {
    case undefined:
      break;
    case 'FormData':
      if (typeof FormData !== 'undefined') {
        body = appendDataToFormData(params.body, new FormData())
      } else {
        const formData = new (require('form-data'))()
        body = appendDataToFormData(params.body, formData)
        headers = formData.getHeaders()
      }
      break
    case 'URLSearchParams':
      body = dataToURLString(params.body)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
      body = params.body
      break
    default:
      body = JSON.stringify(params.body)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { ...params.init, method, body, headers: { ...headers, ...params.init?.headers, ...params.headers } }
}

type ServerData = { status?: number; headers?: BasicHeaders; body?: any }

type NormalizedResponse<Success extends ServerData, Failure extends ServerData> =
  | { isSuccess: true; stream: Response['body']; data: Success }
  | { isSuccess: false; isFailure: true; stream: Response['body']; data: Failure }
  | { isSuccess: false; isFailure: false; err: Error };

const send = async <Success extends ServerData = { status: number; headers: BasicHeaders }, Failure extends ServerData = { status: number; headers: BasicHeaders }>(
  client: typeof fetch,
  method: string,
  baseURL: string,
  url: string,
  resType: 'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData' | 'void',
  params?: Params,
  format?: BodyInit
): Promise<NormalizedResponse<Success, Failure>> => {
  try {
    const res = await client(
      \`\${baseURL}\${url}\${
        params?.query ? \`?\${dataToURLString(params.query)}\` : ''
      }\`,
      optionToRequest(method, params, format)
    )

    if (res.ok) {
      return {
        isSuccess: true,
        stream: res.body,
        data: {
          status: res.status,
          headers: headersToObject(res.headers),
          body: resType === 'void' ? undefined : await res[resType](),
        } as Success
      };
    } else {
      return {
        isSuccess: false,
        isFailure: true,
        stream: res.body,
        data: {
          status: res.status,
          headers: headersToObject(res.headers),
        } as Failure
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      isFailure: false,
      err,
    };
  }
}

${createDocComment(
  '',
  tree.children.find((c): c is FileData => !c.isDir && c.name === 'index.ts')?.doc
)}export const createApi = (config?: { baseURL?: string; trailingSlash?: boolean; init?: RequestInit}) => {
  const f = typeof fetch !== 'undefined' ? fetch : require('node-fetch')
  const prefix = (config?.baseURL ?? '<% baseURL %>').replace(/\\/$/, '')
${pathes.map((p, i) => `  const PATH${i} = ${p}`).join('\n')}
${['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS']
  .filter(m => api.includes(`f, ${m}, prefix,`))
  .map(m => `  const ${m} = '${m}'`)
  .join('\n')}

  return <% api %>
}
${constantsPath ? `\nexport * from '${constantsPath}@constants'` : ''}${
    typesPath ? `\nexport * from '${typesPath}@types'` : ''
  }
export const api = createApi()
`
    .replace('<% imports %>', imports.join('\n'))
    .replace('<% api %>', api)
    .replace('<% baseURL %>', baseURL)
    .replace(/\n([a-z])/g, '\n// prettier-ignore\n$1')

  return { text, filePath: path.posix.join(tree.path, '$api.ts') }
}

export default ({ input, baseURL, trailingSlash, outputEachDir }: AspidaConfig) => {
  const direntTree = getDirentTree(input)
  const constantsPath =
    (fs.existsSync(`${input}/@constants/index.ts`) || fs.existsSync(`${input}/@constants.ts`)) &&
    './'
  const typesPath =
    (fs.existsSync(`${input}/@types/index.ts`) || fs.existsSync(`${input}/@types.ts`)) && './'
  const templates = [
    createTemplate(direntTree, baseURL, trailingSlash, '', constantsPath, typesPath)
  ]

  if (outputEachDir) {
    const notIndexFiles = listNotIndexFiles(direntTree)
    if (notIndexFiles.length) {
      console.log(`aspida \u001b[43m\u001b[31mERROR\u001b[0m Since true is specified in outputEachDir at aspida.config.js, you need to rename the following files
  ${notIndexFiles.join('\n  ')}`)

      return []
    }

    const appendTemplate = (
      tree: DirentTree,
      constantsPath: string | false,
      typesPath: string | false
    ) => {
      tree.children.forEach(c => {
        if (!c.isDir || c.name.startsWith('_')) return

        templates.push(
          createTemplate(
            c.tree,
            baseURL,
            trailingSlash,
            c.tree.path.replace(input, ''),
            constantsPath,
            typesPath
          )
        )

        appendTemplate(
          c.tree,
          constantsPath && `${constantsPath}../`,
          typesPath && `${typesPath}../`
        )
      })
    }

    appendTemplate(
      direntTree,
      constantsPath && `${constantsPath}../`,
      typesPath && `${typesPath}../`
    )
  }

  return templates
}
