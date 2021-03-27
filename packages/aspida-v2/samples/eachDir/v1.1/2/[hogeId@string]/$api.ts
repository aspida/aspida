/* $api.ts was generated by aspida@1.6.3 */
/* eslint-disable */
import type { Methods as Methods0 } from './entries.json'
import type { Methods as Methods1 } from './test-4'
import type { Methods as Methods2 } from './test-4/[fugaId]'
import type { Methods as Methods3 } from './test-4/fuga aa'

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

const optionToRequest = (
  option?: AspidaParams,
  type?: RequestType
): AspidaRequest | undefined => {
  if (option?.body === undefined) return option

  let httpBody
  let headers: BasicHeaders = {}

  switch (type) {
    case 'FormData':
      if (typeof FormData !== 'undefined') {
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
    `${baseURL}${url}${
      request?.query ? `?${dataToURLString(request.query)}` : ''
    }`,
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

export const createApi = (init?: { baseURL?: string; fetch?: typeof fetch; config?: RequestInit}) => {
  const f = init?.fetch ?? (typeof fetch !== 'undefined' ? fetch : require('node-fetch'))
  const prefix = (init?.baseURL ?? '').replace(/\/$/, '')
  const PATH0 = '/v1.1/2/[hogeId@string]/entries.json/'
  const PATH1 = '/v1.1/2/[hogeId@string]/test-4/'
  const PATH2 = '/'
  const PATH3 = '/v1.1/2/[hogeId@string]/test-4/fuga aa/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    entries_json: {
      $get: (option?: { config?: RequestInit }) =>
        send<Methods0['get']['resBody']>(f, GET, prefix, PATH0, 'json', option),
      $path: () => `${prefix}${PATH0}`
    },
    test_4: {
      /**
       * _fugaId comment
       */
      fugaId: (val1: number | string) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          $get: (option?: { query?: Methods2['get']['query'], config?: RequestInit }) =>
            send<Methods2['get']['resBody']>(f, GET, prefix, `${prefix1}${PATH2}`, 'json', option),
          $post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: RequestInit }) =>
            send<Methods2['post']['resBody']>(f, POST, prefix, `${prefix1}${PATH2}`, 'json', option),
          $put: (option: { query: Methods2['put']['query'], config?: RequestInit }) =>
            send<Methods2['put']['resBody']>(f, PUT, prefix, `${prefix1}${PATH2}`, 'json', option),
          /**
           * _fugaId delete method
           * @returns _fugaId resBody
           */
          $delete: (option: { query: Methods2['delete']['query'], config?: RequestInit }) =>
            send<Methods2['delete']['resBody']>(f, DELETE, prefix, `${prefix1}${PATH2}`, 'json', option),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] } | { method: 'post'; query: Methods2['post']['query'] } | { method: 'put'; query: Methods2['put']['query'] } | { method: 'delete'; query: Methods2['delete']['query'] }) =>
            `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      fuga_aa: {
        $get: (option: { query: Methods3['get']['query'], config?: RequestInit }) =>
          send<Methods3['get']['resBody']>(f, GET, prefix, PATH3, 'json', option),
        $post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: RequestInit }) =>
          send<Methods3['post']['resBody']>(f, POST, prefix, PATH3, 'json', option),
        $put: (option: { query: Methods3['put']['query'], config?: RequestInit }) =>
          send<Methods3['put']['resBody']>(f, PUT, prefix, PATH3, 'json', option),
        $delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: RequestInit }) =>
          send<Methods3['delete']['resBody']>(f, DELETE, prefix, PATH3, 'json', option),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] } | { method: 'post'; query: Methods3['post']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | { method: 'delete'; query: Methods3['delete']['query'] }) =>
          `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      $get: (option: { query: Methods1['get']['query'], config?: RequestInit }) =>
        send<void>(f, GET, prefix, PATH1, 'void', option),
      $post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: RequestInit }) =>
        send<void>(f, POST, prefix, PATH1, 'void', option),
      $put: (option?: { query?: Methods1['put']['query'], config?: RequestInit }) =>
        send<Methods1['put']['resBody']>(f, PUT, prefix, PATH1, 'json', option),
      $delete: (option: { query: Methods1['delete']['query'], config?: RequestInit }) =>
        send<Methods1['delete']['resBody']>(f, DELETE, prefix, PATH1, 'json', option),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'post'; query: Methods1['post']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export * from './../../../@constants'
export * from './../../../@types'
export const api = createApi()