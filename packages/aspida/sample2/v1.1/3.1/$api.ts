/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './index'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = `${(client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')}/v1.1/3.1`

  return {
    get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      client.fetch<Methods0['get']['resBody']>(prefix, '/', 'GET', option).json(),
    $get: async (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      (await client.fetch<Methods0['get']['resBody']>(prefix, '/', 'GET', option).json()).body,
    post: (option: { body?: Methods0['post']['reqBody'], query: Methods0['post']['query'], config?: T }) =>
      client.fetch<Methods0['post']['resBody']>(prefix, '/', 'POST', option, 'URLSearchParams').json(),
    $post: async (option: { body?: Methods0['post']['reqBody'], query: Methods0['post']['query'], config?: T }) =>
      (await client.fetch<Methods0['post']['resBody']>(prefix, '/', 'POST', option, 'URLSearchParams').json()).body
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
