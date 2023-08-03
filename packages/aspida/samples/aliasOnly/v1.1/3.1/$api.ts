import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';

/**
 * 3.1 comment
 */
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1.1/3.1';
  const GET = 'GET';
  const POST = 'POST';

  return {
    /**
     * 3.1 get method comment
     * @param option.headers - 3.1 reqHeaders
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $post: (option: { body?: Methods0['post']['reqBody'] | undefined, query: Methods0['post']['query'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
