import {
  AspidaClient,
  AspidaParams,
  HttpMethod,
  RequestType,
  dataToURLString,
  headersToObject,
  optionToRequest,
} from 'aspida';
import fetch, { RequestInit, Response } from 'node-fetch';

export type FetchConfig = RequestInit & {
  baseURL?: string;
  throwHttpErrors?: boolean;
  paramsSerializer?: typeof dataToURLString;
};

export class HTTPError extends Error {
  constructor(public response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`);
    Object.setPrototypeOf(this, new.target.prototype);
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
    const send =
      <V>(fn: (res: Response) => Promise<V>) =>
      async () => {
        const request = optionToRequest(params, type);
        const serializer = config?.paramsSerializer || dataToURLString;
        const res = await client(
          `${request?.config?.baseURL ?? baseURL}${url}${
            request?.query ? `?${serializer(request.query)}` : ''
          }`,
          {
            method,
            ...config,
            ...request?.config,
            body: request?.httpBody,
            headers: { ...config?.headers, ...request?.config?.headers, ...request?.headers },
          }
        ).then(res =>
          !res.ok && config?.throwHttpErrors ? Promise.reject(new HTTPError(res)) : res
        );

        return {
          status: res.status as any,
          headers: headersToObject(res.headers as any),
          originalResponse: res,
          body: await fn(res),
        };
      };

    return {
      send: send(() => Promise.resolve()),
      json: send(res => res.json()),
      text: send(res => res.text()),
      arrayBuffer: send(res => res.arrayBuffer()),
      blob: send(res => res.blob() as any),
      formData: send(res => res.json()),
    };
  },
});
