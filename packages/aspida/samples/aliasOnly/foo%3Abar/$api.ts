import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_bar_id@string.json'
import type { Methods as Methods2 } from './_fooId@number%40create'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/foo:bar'
  const GET = 'GET'

  return {
    _bar_id_json: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}.json`

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _fooId_create: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}@create`

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * @deprecated `_fooId_40create` has been deprecated.
     * Use `_fooId_create` instead
     */
    _fooId_40create: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}@create`

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods2['get']['resBody']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
