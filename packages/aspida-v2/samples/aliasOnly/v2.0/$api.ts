/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida-v2'
import { Methods as Methods0 } from '.'
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
  const PATH0 = '/v2.0'
  const GET = 'GET'

  return {
    $get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: FetchConfig }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
