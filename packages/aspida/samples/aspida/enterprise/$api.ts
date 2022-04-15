import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './applicants/_id@string'
import type { Methods as Methods1 } from './companies'
import type { Methods as Methods2 } from './companies/_companyId@string/applicants'
import type { Methods as Methods3 } from './companies/_companyId@string/employees'
import type { Methods as Methods4 } from './companies/_companyId@string/markAsRead'
import type { Methods as Methods5 } from './companies/_companyId@string/notifications'
import type { Methods as Methods6 } from './companies/_companyId@string/recruitments'
import type { Methods as Methods7 } from './companies/_companyId@string/rooms'
import type { Methods as Methods8 } from './companies/_id@string'
import type { Methods as Methods9 } from './employees/_employeeId@string/profile'
import type { Methods as Methods10 } from './employees/_id@string'
import type { Methods as Methods11 } from './industryCategories'
import type { Methods as Methods12 } from './messages/_id@string'
import type { Methods as Methods13 } from './occupationMainCategories'
import type { Methods as Methods14 } from './prefectures'
import type { Methods as Methods15 } from './recruitments/_id@string'
import type { Methods as Methods16 } from './recruitments/_recruitmentId@string/applicants'
import type { Methods as Methods17 } from './rooms/_id@string'
import type { Methods as Methods18 } from './rooms/_roomId@string/messages'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/applicants'
  const PATH1 = '/companies'
  const PATH2 = '/employees'
  const PATH3 = '/mark_as_read'
  const PATH4 = '/notifications'
  const PATH5 = '/recruitments'
  const PATH6 = '/rooms'
  const PATH7 = '/profile'
  const PATH8 = '/industry_categories'
  const PATH9 = '/messages'
  const PATH10 = '/occupation_main_categories'
  const PATH11 = '/prefectures'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    applicants: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    companies: {
      _companyId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          applicants: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            $path: () => `${prefix}${prefix1}${PATH0}`
          },
          employees: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * @returns Created
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          markAsRead: {
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).send(),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          notifications: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            $path: () => `${prefix}${prefix1}${PATH4}`
          },
          recruitments: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
            /**
             * @returns Created
             */
            post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).json(),
            $path: () => `${prefix}${prefix1}${PATH5}`
          },
          rooms: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH6}`, GET, option).json(),
            /**
             * @returns Created
             */
            post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).json(),
            $path: () => `${prefix}${prefix1}${PATH6}`
          }
        }
      },
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).send(),
      $path: () => `${prefix}${PATH1}`
    },
    employees: {
      _employeeId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          profile: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, `${prefix1}${PATH7}`, GET, option).send(),
            /**
             * @returns OK
             */
            patch: (option: { body: Methods9['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods9['patch']['resBody'], BasicHeaders, Methods9['patch']['status']>(prefix, `${prefix1}${PATH7}`, PATCH, option).json(),
            post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods9['post']['status']>(prefix, `${prefix1}${PATH7}`, POST, option).send(),
            $path: () => `${prefix}${prefix1}${PATH7}`
          }
        }
      },
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods10['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods10['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods10['patch']['resBody'], BasicHeaders, Methods10['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    industryCategories: {
      /**
       * 業種まとめて全部取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH8, GET, option).json(),
      $path: () => `${prefix}${PATH8}`
    },
    messages: {
      _id: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    occupationMainCategories: {
      /**
       * 「大項目」「中項目」「小項目」まとめて全部取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH10, GET, option).json(),
      $path: () => `${prefix}${PATH10}`
    },
    prefectures: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH11, GET, option).json(),
      $path: () => `${prefix}${PATH11}`
    },
    recruitments: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods15['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods15['patch']['resBody'], BasicHeaders, Methods15['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _recruitmentId: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          applicants: {
            /**
             * @returns OK
             */
            get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    rooms: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, prefix1, GET, option).json(),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _roomId: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          messages: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
            /**
             * @returns Created
             */
            post: (option: { body: Methods18['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            $path: () => `${prefix}${prefix1}${PATH9}`
          }
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
