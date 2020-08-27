/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import * as ApiTypes from '../../@types'
import { Methods as Methods0 } from './_userId@User[\'id\']'

const GET = 'GET'
const POST = 'POST'
const PATH0 = '/v1.1/users/'
const PATH1 = '/'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    _userId: (val0: ApiTypes.User['id']) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
        $get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
        post: (option: { query: Methods0['post']['query'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
        $post: (option: { query: Methods0['post']['query'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] }) =>
          `${prefix}${prefix0}${PATH1}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
