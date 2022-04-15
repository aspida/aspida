import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_accountId@string/academicHistories'
import type { Methods as Methods1 } from './_accountId@string/applicants'
import type { Methods as Methods2 } from './_accountId@string/followings'
import type { Methods as Methods3 } from './_accountId@string/hopes'
import type { Methods as Methods4 } from './_accountId@string/interestedLists'
import type { Methods as Methods5 } from './_accountId@string/markAsRead'
import type { Methods as Methods6 } from './_accountId@string/notifications'
import type { Methods as Methods7 } from './_accountId@string/profile'
import type { Methods as Methods8 } from './_accountId@string/rooms'
import type { Methods as Methods9 } from './_accountId@string/workHistories'
import type { Methods as Methods10 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/accounts'
  const PATH1 = '/academicHistories'
  const PATH2 = '/applicants'
  const PATH3 = '/followings'
  const PATH4 = '/hopes'
  const PATH5 = '/interestedLists'
  const PATH6 = '/markAsRead'
  const PATH7 = '/notifications'
  const PATH8 = '/profile'
  const PATH9 = '/rooms'
  const PATH10 = '/workHistories'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _accountId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        academicHistories: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        applicants: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix0}${PATH2}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`
        },
        followings: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json(),
          /**
           * @returns OK
           */
          $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH3}`
        },
        hopes: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix0}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH4}`
        },
        interestedLists: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix0}${PATH5}`, GET, option).json().then(r => r.body),
          post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).send(),
          $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix0}${PATH5}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH5}`
        },
        markAsRead: {
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option).send(),
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix0}${PATH6}`, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH6}`
        },
        notifications: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix0}${PATH7}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH7}`
        },
        profile: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH8}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix0}${PATH8}`, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, `${prefix0}${PATH8}`, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods7['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['patch']['resBody'], BasicHeaders, Methods7['patch']['status']>(prefix, `${prefix0}${PATH8}`, PATCH, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix0}${PATH8}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix0}${PATH8}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH8}`
        },
        rooms: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix0}${PATH9}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix0}${PATH9}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix0}${PATH9}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH9}`
        },
        workHistories: {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix0}${PATH10}`, GET, option).json().then(r => r.body),
          /**
           * @returns Created
           */
          post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix0}${PATH10}`, POST, option).json(),
          /**
           * @returns Created
           */
          $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix0}${PATH10}`, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH10}`
        }
      }
    },
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * @returns OK
         */
        patch: (option: { body: Methods10['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix0, PATCH, option).json(),
        /**
         * @returns OK
         */
        $patch: (option: { body: Methods10['patch']['reqBody'], config?: T | undefined }) =>
          fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix0, PATCH, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
