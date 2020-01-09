import { AspidaClient, AspidaRequest, HttpMethod, headersToObject } from 'aspida'
import ky, { Options } from 'ky'

export default (client = ky, options?: Options): AspidaClient => ({
  fetch<T, U>(url: string, method: HttpMethod, request?: AspidaRequest) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(url, {
        ...options,
        method,
        body: request?.body,
        searchParams: request?.query,
        headers: { ...options?.headers, ...request?.headers }
      })

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
