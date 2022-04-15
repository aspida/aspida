import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_employeeId@string/profile'
import type { Methods as Methods1 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/enterprise/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/employees'
  const PATH1 = '/profile'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _employeeId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        profile: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, `${prefix0}${PATH1}`, GET, option).send(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, `${prefix0}${PATH1}`, GET, option).send().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, `${prefix0}${PATH1}`, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, `${prefix0}${PATH1}`, PATCH, option).json().then(r => r.body),
          post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send(),
          $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        }
      }
    },
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
