/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from '.'

/**
 * 3.1 comment
 */
// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/3.1'
  const GET = 'GET'
  const POST = 'POST'

  return {
    /**
     * 3.1 get method comment
     * @param option.headers - 3.1 reqHeaders
     */
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $post: (option: { body?: Methods0['post']['reqBody'], query: Methods0['post']['query'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
