/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './index'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = `${(client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')}/v2.0`

  return {
    get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      client.fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, '/', 'GET', option).text(),
    $get: async (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      (await client.fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, '/', 'GET', option).text()).body
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
