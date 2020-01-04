import { AspidaClient, AspidaRequest, HttpMethod, headersToObject, BasicHeaders } from 'aspida'
import ky, { Options } from 'ky'

export default (client = ky, baseURL?: string): AspidaClient => ({
  baseURL,
  fetch<T, U extends BasicHeaders>(url: string, method: HttpMethod, request?: AspidaRequest) {
    const config: Options = {
      method,
      body: request?.body,
      searchParams: request?.query,
      headers: request?.headers
    }

    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(url, config)
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
