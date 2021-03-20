/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida-v2'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_bar_id@string.json'
import { Methods as Methods2 } from './_fooId@number%40create'
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
  const PATH0 = '/foo:bar'
  const GET = 'GET'

  return {
    _bar_id_json: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}.json`

      return {
        $get: (option?: { config?: FetchConfig }) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _fooId_create: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}@create`

      return {
        $get: (option?: { config?: FetchConfig }) =>
          fetch<Methods2['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * @deprecated `_fooId_40create` has been deprecated.
     * Use `_fooId_create` instead
     */
    _fooId_40create: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}@create`

      return {
        $get: (option?: { config?: FetchConfig }) =>
          fetch<Methods2['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    $get: (option?: { config?: FetchConfig }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
