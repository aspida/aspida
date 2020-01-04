import {
  AspidaClient,
  AspidaRequest,
  HttpMethod,
  dataToURLString,
  headersToObject,
  BasicHeaders
} from 'aspida'

export default (client = fetch, init?: RequestInit): AspidaClient => ({
  fetch<T, U extends BasicHeaders>(url: string, method: HttpMethod, request?: AspidaRequest) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(
        `${url}${request?.query ? `?${dataToURLString(request.query)}` : ''}`,
        {
          ...init,
          method,
          body: request?.body,
          headers: { ...init?.headers, ...request?.headers }
        }
      )

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
