import {
  AspidaClient,
  optionToRequest,
  HttpMethod,
  AspidaParams,
  RequestType,
  headersToObject
} from 'aspida'
import ky, { Options } from 'ky'

export default (client: typeof ky = ky, config?: Options): AspidaClient<Options> => ({
  baseURL: typeof config?.prefixUrl === 'string' ? config.prefixUrl : undefined,
  fetch(
    prefixUrl: string,
    url: string,
    method: HttpMethod,
    params?: AspidaParams<Options>,
    type?: RequestType
  ) {
    const send = <V>(fn: (res: Response) => Promise<V>) => async () => {
      const request = optionToRequest(params, type)
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
        headers: headersToObject(res.headers),
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
