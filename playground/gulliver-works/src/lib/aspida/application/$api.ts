import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './academicHistories/_id@string'
import type { Methods as Methods1 } from './accounts/_accountId@string/academicHistories'
import type { Methods as Methods2 } from './accounts/_accountId@string/applicants'
import type { Methods as Methods3 } from './accounts/_accountId@string/followings'
import type { Methods as Methods4 } from './accounts/_accountId@string/hopes'
import type { Methods as Methods5 } from './accounts/_accountId@string/interestedLists'
import type { Methods as Methods6 } from './accounts/_accountId@string/markAsRead'
import type { Methods as Methods7 } from './accounts/_accountId@string/notifications'
import type { Methods as Methods8 } from './accounts/_accountId@string/profile'
import type { Methods as Methods9 } from './accounts/_accountId@string/rooms'
import type { Methods as Methods10 } from './accounts/_accountId@string/workHistories'
import type { Methods as Methods11 } from './accounts/_id@string'
import type { Methods as Methods12 } from './companies'
import type { Methods as Methods13 } from './companies/_companyId@string/recruitments'
import type { Methods as Methods14 } from './companies/_id@string'
import type { Methods as Methods15 } from './companies/recommended'
import type { Methods as Methods16 } from './employmentStatuses'
import type { Methods as Methods17 } from './followings/_id@string'
import type { Methods as Methods18 } from './hopes/_id@string'
import type { Methods as Methods19 } from './industryCategories'
import type { Methods as Methods20 } from './interestedLists/_id@string'
import type { Methods as Methods21 } from './interestedLists/_interestedListId@string/recruitments'
import type { Methods as Methods22 } from './interestedLists/_interestedListId@string/recruitments/_id@string'
import type { Methods as Methods23 } from './messages/_id@string'
import type { Methods as Methods24 } from './occupationMainCategories'
import type { Methods as Methods25 } from './prefectures'
import type { Methods as Methods26 } from './recruitments'
import type { Methods as Methods27 } from './recruitments/_id@string'
import type { Methods as Methods28 } from './recruitments/recommended'
import type { Methods as Methods29 } from './rooms/_id@string'
import type { Methods as Methods30 } from './rooms/_roomId@string/messages'
import type { Methods as Methods31 } from './workHistories/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/academicHistories'
  const PATH1 = '/accounts'
  const PATH2 = '/applicants'
  const PATH3 = '/followings'
  const PATH4 = '/hopes'
  const PATH5 = '/interestedLists'
  const PATH6 = '/markAsRead'
  const PATH7 = '/notifications'
  const PATH8 = '/profile'
  const PATH9 = '/rooms'
  const PATH10 = '/workHistories'
  const PATH11 = '/companies'
  const PATH12 = '/recruitments'
  const PATH13 = '/companies/recommended'
  const PATH14 = '/employmentStatuses'
  const PATH15 = '/industryCategories'
  const PATH16 = '/messages'
  const PATH17 = '/occupationMainCategories'
  const PATH18 = '/prefectures'
  const PATH19 = '/recruitments/recommended'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    academicHistories: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods0['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods0['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods0['patch']['resBody'], BasicHeaders, Methods0['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    accounts: {
      _accountId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          academicHistories: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH0}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, `${prefix1}${PATH0}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH0}`
          },
          applicants: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`
          },
          followings: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * @returns OK
             */
            $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          hopes: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`
          },
          interestedLists: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json().then(r => r.body),
            post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send(),
            $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`
          },
          markAsRead: {
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send(),
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH6}`, POST, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`
          },
          notifications: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `${prefix1}${PATH7}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH7}`
          },
          profile: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `${prefix1}${PATH8}`, GET, option).json().then(r => r.body),
            /**
             * @returns OK
             */
            patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, `${prefix1}${PATH8}`, PATCH, option).json(),
            /**
             * @returns OK
             */
            $patch: (option: { body: Methods8['patch']['reqBody'], config?: T | undefined }) =>
              fetch<Methods8['patch']['resBody'], BasicHeaders, Methods8['patch']['status']>(prefix, `${prefix1}${PATH8}`, PATCH, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`
          },
          rooms: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, `${prefix1}${PATH9}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods9['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`
          },
          workHistories: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, `${prefix1}${PATH10}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix1}${PATH10}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH10}`
          }
        }
      },
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods11['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['patch']['resBody'], BasicHeaders, Methods11['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    companies: {
      _companyId: (val1: string) => {
        const prefix1 = `${PATH11}/${val1}`

        return {
          recruitments: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `${prefix1}${PATH12}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH12}`
          }
        }
      },
      _id: (val1: string) => {
        const prefix1 = `${PATH11}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      recommended: {
        /**
         * 希望の職種・雇用形態からおすすめの企業をいくつか取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH13, GET, option).json(),
        /**
         * 希望の職種・雇用形態からおすすめの企業をいくつか取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH13, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH13}`
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods12['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | undefined) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    employmentStatuses: {
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH14, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods16['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH14, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods16['get']['query'] } | undefined) =>
        `${prefix}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    followings: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods17['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    hopes: {
      _id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods18['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods18['patch']['resBody'], BasicHeaders, Methods18['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods18['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods18['patch']['resBody'], BasicHeaders, Methods18['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
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
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH15, GET, option).json(),
      /**
       * 業種まとめて全部取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH15}`
    },
    interestedLists: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods20['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods20['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods20['patch']['resBody'], BasicHeaders, Methods20['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _interestedListId: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          recruitments: {
            _id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH12}/${val3}`

              return {
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            /**
             * @returns Created
             */
            post: (option: { body: Methods21['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, `${prefix1}${PATH12}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods21['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods21['post']['resBody'], BasicHeaders, Methods21['post']['status']>(prefix, `${prefix1}${PATH12}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH12}`
          }
        }
      }
    },
    messages: {
      _id: (val1: string) => {
        const prefix1 = `${PATH16}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
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
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH17, GET, option).json(),
      /**
       * 「大項目」「中項目」「小項目」まとめて全部取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH17, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH17}`
    },
    prefectures: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH18, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH18}`
    },
    recruitments: {
      _id: (val1: string) => {
        const prefix1 = `${PATH12}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      recommended: {
        /**
         * 希望の職種・募集形態からおすすめの募集をいくつか取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH19, GET, option).json(),
        /**
         * 希望の職種・募集形態からおすすめの募集をいくつか取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods28['get']['resBody'], BasicHeaders, Methods28['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH19}`
      },
      /**
       * @returns OK
       */
      get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH12, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { query?: Methods26['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH12, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods26['get']['query'] } | undefined) =>
        `${prefix}${PATH12}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    rooms: {
      _id: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _roomId: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`

        return {
          messages: {
            /**
             * @returns OK
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json(),
            /**
             * @returns OK
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, `${prefix1}${PATH16}`, GET, option).json().then(r => r.body),
            /**
             * @returns Created
             */
            post: (option: { body: Methods30['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods30['post']['resBody'], BasicHeaders, Methods30['post']['status']>(prefix, `${prefix1}${PATH16}`, POST, option).json(),
            /**
             * @returns Created
             */
            $post: (option: { body: Methods30['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods30['post']['resBody'], BasicHeaders, Methods30['post']['status']>(prefix, `${prefix1}${PATH16}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH16}`
          }
        }
      }
    },
    workHistories: {
      _id: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods31['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns OK
           */
          patch: (option: { body: Methods31['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods31['patch']['resBody'], BasicHeaders, Methods31['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * @returns OK
           */
          $patch: (option: { body: Methods31['patch']['reqBody'], config?: T | undefined }) =>
            fetch<Methods31['patch']['resBody'], BasicHeaders, Methods31['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
