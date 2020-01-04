import {
  AspidaClient,
  AspidaRequest,
  HttpMethod,
  dataToURLString,
  headersToObject,
  BasicHeaders
} from 'aspida'

export default (client = fetch, baseURL?: string, init?: RequestInit): AspidaClient => ({
  baseURL,
  fetch<T, U extends BasicHeaders>(url: string, method: HttpMethod, request?: AspidaRequest) {
    const fullURL = `${url}${request?.query ? `?${dataToURLString(request.query)}` : ''}`
    const config: RequestInit = {
      ...init,
      method,
      body: request?.body,
      headers: { ...init?.headers, ...request?.headers }
    }

    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(fullURL, config)
      return {
        status: res.status,
        headers: headersToObject<U>(res.headers),
        body: res.body,
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
