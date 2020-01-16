import { AspidaClient, AspidaRequest, HttpMethod, headersToObject } from 'aspida'
import ky, { Options } from 'ky'

export default (client = ky, config?: Options): AspidaClient<Options> => ({
  baseURL: typeof config?.prefixUrl === 'string' ? config.prefixUrl : undefined,
  fetch<T, U>(prefixUrl: string, url: string, method: HttpMethod, request?: AspidaRequest<T, Options>) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const res = await client(url, {
        method,
        prefixUrl,
        ...config,
        ...request?.config,
        body: request?.body as any,
        searchParams: request?.query,
        headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers }
      })

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
