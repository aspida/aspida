/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const GET = 'GET'
const POST = 'POST'
const PATH0 = '/v1.1/3.1/'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
    $get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option: { body?: Methods0['post']['reqBody'], query: Methods0['post']['query'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
    $post: (option: { body?: Methods0['post']['reqBody'], query: Methods0['post']['query'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
