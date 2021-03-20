/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida-v2'
import { Methods as Methods0 } from './_userId@string'
import {
  optionToRequest,
  HttpMethod,
  AspidaParams,
  RequestType,
  headersToObject
} from 'aspida-v2'

export type FetchConfig = RequestInit & {
  baseURL?: string
  throwHttpErrors?: boolean
}

export class HTTPError extends Error {
  constructor(public response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const client = (client = fetch, config?: FetchConfig): AspidaClient<FetchConfig> => ({
  baseURL: config?.baseURL,
  fetch(
    baseURL: string,
    url: string,
    method: HttpMethod,
    params?: AspidaParams<FetchConfig>,
    type?: RequestType
  ) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const request = optionToRequest(params, type)
      const res = await client(
        `${request?.config?.baseURL ?? baseURL}${url}${
          request?.query ? `?${dataToURLString(request.query)}` : ''
        }`,
        {
          method,
          ...config,
          ...request?.config,
          body: request?.httpBody,
          headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers }
        }
      ).then(res => (!res.ok && config?.throwHttpErrors ? Promise.reject(new HTTPError(res)) : res))

      return {
        status: res.status as any,
        headers: headersToObject(res.headers),
        originalResponse: res,
        body: await fn(res)
      }
    }

    return {
      send: send(() => Promise.resolve()),
      json: send(res => res.json()),
      text: send(res => res.text()),
      arrayBuffer: send(res => res.arrayBuffer()),
      blob: send(res => res.blob()),
      formData: send(res => res.formData())
    }
  }
})

const api = ({ baseURL, fetch }: AspidaClient<FetchConfig>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/users'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        $get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: FetchConfig }) =>
          fetch<Methods0['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $post: (option: { query: Methods0['post']['query'], config?: FetchConfig }) =>
          fetch<Methods0['post']['resBody']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
