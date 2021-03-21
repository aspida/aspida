/* eslint-disable */
import type { Methods as Methods0 } from './_hogeId'
import type { Methods as Methods1 } from './_hogeId@number'
import type { Methods as Methods2 } from './_hogeId@string/entries.json'
import type { Methods as Methods3 } from './_hogeId@string/test-4'
import type { Methods as Methods4 } from './_hogeId@string/test-4/_fugaId'
import type { Methods as Methods5 } from './_hogeId@string/test-4/fuga aa'

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

const api = (init?: { baseURL?: string; fetch?: typeof fetch; config?: RequestInit}) => {
  const f = init?.fetch ?? fetch
  const prefix = (init?.baseURL ?? '').replace(/\/$/, '')
  const PATH0 = '/v1.1/2/'
  const PATH1 = '/'
  const PATH2 = '/entries.json/'
  const PATH3 = '/test-4/'
  const PATH4 = '/test-4/fuga aa/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _hogeId: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        $get: (option?: { config?: RequestInit }) =>
          send<Methods0['get']['resBody']>(f, GET, prefix, `${prefix0}${PATH1}`, 'json', option),
        $path: () => `${prefix}${prefix0}${PATH1}`
      }
    },
    _hogeId_number: (val0: number) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        $get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: RequestInit }) =>
          send<Methods1['get']['resBody']>(f, GET, prefix, `${prefix0}${PATH1}`, 'json', option),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    _hogeId_string: (val0: string) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        entries_json: {
          $get: (option?: { config?: RequestInit }) =>
            send<Methods2['get']['resBody']>(f, GET, prefix, `${prefix0}${PATH2}`, 'json', option),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        test_4: {
          /**
           * _fugaId comment
           */
          _fugaId: (val2: number | string) => {
            const prefix2 = `${prefix0}${PATH3}${val2}`

            return {
              $get: (option?: { query?: Methods4['get']['query'], config?: RequestInit }) =>
                send<Methods4['get']['resBody']>(f, GET, prefix, `${prefix2}${PATH1}`, 'json', option),
              $post: (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: RequestInit }) =>
                send<Methods4['post']['resBody']>(f, POST, prefix, `${prefix2}${PATH1}`, 'json', option),
              $put: (option: { query: Methods4['put']['query'], config?: RequestInit }) =>
                send<Methods4['put']['resBody']>(f, PUT, prefix, `${prefix2}${PATH1}`, 'json', option),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              $delete: (option: { query: Methods4['delete']['query'], config?: RequestInit }) =>
                send<Methods4['delete']['resBody']>(f, DELETE, prefix, `${prefix2}${PATH1}`, 'json', option),
              $path: (option?: { method?: 'get'; query: Methods4['get']['query'] } | { method: 'post'; query: Methods4['post']['query'] } | { method: 'put'; query: Methods4['put']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] }) =>
                `${prefix}${prefix2}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          fuga_aa: {
            $get: (option: { query: Methods5['get']['query'], config?: RequestInit }) =>
              send<Methods5['get']['resBody']>(f, GET, prefix, `${prefix0}${PATH4}`, 'json', option),
            $post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: RequestInit }) =>
              send<Methods5['post']['resBody']>(f, POST, prefix, `${prefix0}${PATH4}`, 'json', option),
            $put: (option: { query: Methods5['put']['query'], config?: RequestInit }) =>
              send<Methods5['put']['resBody']>(f, PUT, prefix, `${prefix0}${PATH4}`, 'json', option),
            $delete: (option: { body: Methods5['delete']['reqBody'], query: Methods5['delete']['query'], config?: RequestInit }) =>
              send<Methods5['delete']['resBody']>(f, DELETE, prefix, `${prefix0}${PATH4}`, 'json', option),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] } | { method: 'post'; query: Methods5['post']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] }) =>
              `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          $get: (option: { query: Methods3['get']['query'], config?: RequestInit }) =>
            send<void>(f, GET, prefix, `${prefix0}${PATH3}`, 'void', option),
          $post: (option?: { body?: Methods3['post']['reqBody'], query?: Methods3['post']['query'], config?: RequestInit }) =>
            send<void>(f, POST, prefix, `${prefix0}${PATH3}`, 'void', option),
          $put: (option?: { query?: Methods3['put']['query'], config?: RequestInit }) =>
            send<Methods3['put']['resBody']>(f, PUT, prefix, `${prefix0}${PATH3}`, 'json', option),
          $delete: (option: { query: Methods3['delete']['query'], config?: RequestInit }) =>
            send<Methods3['delete']['resBody']>(f, DELETE, prefix, `${prefix0}${PATH3}`, 'json', option),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] } | { method: 'post'; query: Methods3['post']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | { method: 'delete'; query: Methods3['delete']['query'] }) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
