import {
  AspidaClient,
  optionToRequest,
  HttpMethod,
  AspidaParams,
  RequestType,
  dataToURLString,
  headersToObject
} from 'aspida'
import fetch, { RequestInit, Response } from 'node-fetch'

type FetchConfig = RequestInit & {
  baseURL?: string
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
        `${baseURL}${url}${request?.query ? `?${dataToURLString(request.query)}` : ''}`,
        {
          method,
          ...config,
          ...request?.config,
          body: request?.httpBody,
          headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers }
        }
      )

      return {
        status: res.status as any,
        headers: headersToObject(res.headers as any),
        originalResponse: res,
        body: await fn(res)
      }
    }

    return {
      send: send(() => Promise.resolve(null)),
      json: send(res => res.json()),
      text: send(res => res.text()),
      arrayBuffer: send(res => res.arrayBuffer()),
      blob: send(res => res.blob() as any),
      formData: send(res => res.json())
    }
  }
})
