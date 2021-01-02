/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/foo%3Abar/'
  const GET = 'GET'

  return {
    get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).text(),
    $get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
