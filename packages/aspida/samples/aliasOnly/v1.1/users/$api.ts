/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './_userId@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/users'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        $get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $post: (option: { query: Methods0['post']['query'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
