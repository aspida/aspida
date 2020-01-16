import { AspidaClient, AspidaRequest, HttpMethod, dataToURLString, headersToObject } from 'aspida'

interface FetchConfig extends RequestInit {
  baseURL?: string
}

export default (client = fetch, config?: FetchConfig): AspidaClient<FetchConfig> => ({
  baseURL: config?.baseURL,
  fetch<T, U>(baseURL: string, url: string, method: HttpMethod, request?: AspidaRequest<T, FetchConfig>) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(
        `${baseURL}${url}${request?.query ? `?${dataToURLString(request.query)}` : ''}`,
        {
          method,
          ...config,
          ...request?.config,
          body: request?.body as any,
          headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers }
        }
      )

      return {
        status: res.status,
        headers: headersToObject<U>(res.headers),
        originalResponse: res,
        data: await fn(res)
      }
    }

    return {
      send: send(() => Promise.resolve(null)),
      json: send(res => res.json()),
      text: send(res => res.text()),
      arrayBuffer: send(res => res.arrayBuffer()),
      blob: send(res => res.blob()),
      formData: send(res => res.formData())
    }
  }
})
