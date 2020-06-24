/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from '../../@types'
import { Methods as Methods0 } from './_userId@User[\'id\']'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = `${(client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')}/v1.1/users`

  return {
    _userId: (val0: ApiTypes.User['id']) => ({
      get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        client.fetch<Methods0['get']['resBody']>(prefix, `/${val0}/`, 'GET', option).json(),
      $get: async (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        (await client.fetch<Methods0['get']['resBody']>(prefix, `/${val0}/`, 'GET', option).json()).body,
      post: (option: { query: Methods0['post']['query'], config?: T }) =>
        client.fetch<Methods0['post']['resBody']>(prefix, `/${val0}/`, 'POST', option).json(),
      $post: async (option: { query: Methods0['post']['query'], config?: T }) =>
        (await client.fetch<Methods0['post']['resBody']>(prefix, `/${val0}/`, 'POST', option).json()).body
    })
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
