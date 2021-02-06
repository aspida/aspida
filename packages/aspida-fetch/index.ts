import {
  AspidaClient,
  optionToRequest,
  HttpMethod,
  AspidaParams,
  RequestType,
  dataToURLString,
  headersToObject
} from 'aspida'

type FetchConfig = RequestInit & {
  baseURL?: string
  throwHttpErrors?: boolean
}

export class HTTPError extends Error {
  constructor(public response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`)
  }
}

export default (client = fetch, config?: FetchConfig): AspidaClient<FetchConfig> => ({
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
