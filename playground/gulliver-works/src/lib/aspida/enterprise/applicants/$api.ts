import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/enterprise/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/applicants'
  const GET = 'GET'
  const PATCH = 'PATCH'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
