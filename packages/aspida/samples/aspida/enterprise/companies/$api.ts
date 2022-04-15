import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_companyId@string/applicants'
import type { Methods as Methods2 } from './_companyId@string/employees'
import type { Methods as Methods3 } from './_companyId@string/markAsRead'
import type { Methods as Methods4 } from './_companyId@string/notifications'
import type { Methods as Methods5 } from './_companyId@string/recruitments'
import type { Methods as Methods6 } from './_companyId@string/rooms'
import type { Methods as Methods7 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/enterprise/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/companies'
  const PATH1 = '/applicants'
  const PATH2 = '/employees'
  const PATH3 = '/markAsRead'
  const PATH4 = '/notifications'
  const PATH5 = '/recruitments'
  const PATH6 = '/rooms'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _companyId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        applicants: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        employees: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        markAsRead: {
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).send(),
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`
        },
        notifications: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH4}`
        },
        recruitments: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH5}`
        },
        rooms: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH6}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH6}`
        }
      }
    },
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
