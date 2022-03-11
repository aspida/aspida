/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './2/_hogeId'
// prettier-ignore
import type { Methods as Methods2 } from './2/_hogeId@number'
// prettier-ignore
import type { Methods as Methods3 } from './2/_hogeId@string/entries.json'
// prettier-ignore
import type { Methods as Methods4 } from './2/_hogeId@string/test-4'
// prettier-ignore
import type { Methods as Methods5 } from './2/_hogeId@string/test-4/_fugaId'
// prettier-ignore
import type { Methods as Methods6 } from './2/_hogeId@string/test-4/fuga aa'
// prettier-ignore
import type { Methods as Methods7 } from './3.1'
// prettier-ignore
import type { Methods as Methods8 } from './_articleId.json'
// prettier-ignore
import type { Methods as Methods9 } from './users/_userId@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/'
  const PATH1 = '/v1.1/2/'
  const PATH2 = '/'
  const PATH3 = '/entries.json/'
  const PATH4 = '/test-4/'
  const PATH5 = '/test-4/fuga aa/'
  const PATH6 = '/v1.1/3.1/'
  const PATH7 = '/v1.1/users/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    $2: {
      _hogeId: (val1: number | string) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH2}`
        }
      },
      _hogeId_number: (val1: number) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          get: (option: { query?: Methods2['get']['query'] | undefined, headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option: { query?: Methods2['get']['query'] | undefined, headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      _hogeId_string: (val1: string) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          entries_json: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          },
          test_4: {
            /**
             * _fugaId comment
             */
            _fugaId: (val3: number | string) => {
              const prefix3 = `${prefix1}${PATH4}${val3}`

              return {
                get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH2}`, GET, option).json(),
                $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH2}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods5['post']['reqBody'] | undefined, query: Methods5['post']['query'], config?: T | undefined }) =>
                  fetch<Methods5['post']['resBody']>(prefix, `${prefix3}${PATH2}`, POST, option).json(),
                $post: (option: { body?: Methods5['post']['reqBody'] | undefined, query: Methods5['post']['query'], config?: T | undefined }) =>
                  fetch<Methods5['post']['resBody']>(prefix, `${prefix3}${PATH2}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods5['put']['query'], config?: T | undefined }) =>
                  fetch<Methods5['put']['resBody']>(prefix, `${prefix3}${PATH2}`, PUT, option).json(),
                $put: (option: { query: Methods5['put']['query'], config?: T | undefined }) =>
                  fetch<Methods5['put']['resBody']>(prefix, `${prefix3}${PATH2}`, PUT, option).json().then(r => r.body),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                delete: (option: { query: Methods5['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods5['delete']['resBody']>(prefix, `${prefix3}${PATH2}`, DELETE, option).json(),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                $delete: (option: { query: Methods5['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods5['delete']['resBody']>(prefix, `${prefix3}${PATH2}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | { method: 'post'; query: Methods5['post']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            fuga_aa: {
              get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
                fetch<Methods6['get']['resBody']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
              $get: (option: { query: Methods6['get']['query'], config?: T | undefined }) =>
                fetch<Methods6['get']['resBody']>(prefix, `${prefix1}${PATH5}`, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods6['post']['reqBody'] | undefined, query: Methods6['post']['query'], config?: T | undefined }) =>
                fetch<Methods6['post']['resBody']>(prefix, `${prefix1}${PATH5}`, POST, option).json(),
              $post: (option: { body?: Methods6['post']['reqBody'] | undefined, query: Methods6['post']['query'], config?: T | undefined }) =>
                fetch<Methods6['post']['resBody']>(prefix, `${prefix1}${PATH5}`, POST, option).json().then(r => r.body),
              put: (option: { query: Methods6['put']['query'], config?: T | undefined }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix1}${PATH5}`, PUT, option).json(),
              $put: (option: { query: Methods6['put']['query'], config?: T | undefined }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix1}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T | undefined }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix1}${PATH5}`, DELETE, option).json(),
              $delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T | undefined }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix1}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods6['get']['query'] } | { method: 'post'; query: Methods6['post']['query'] } | { method: 'put'; query: Methods6['put']['query'] } | { method: 'delete'; query: Methods6['delete']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH4}`, GET, option).send(),
            $get: (option: { query: Methods4['get']['query'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH4}`, GET, option).send().then(r => r.body),
            post: (option?: { body?: Methods4['post']['reqBody'] | undefined, query?: Methods4['post']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, `${prefix1}${PATH4}`, POST, option).send(),
            $post: (option?: { body?: Methods4['post']['reqBody'] | undefined, query?: Methods4['post']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, `${prefix1}${PATH4}`, POST, option).send().then(r => r.body),
            put: (option?: { query?: Methods4['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json(),
            $put: (option?: { query?: Methods4['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods4['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json().then(r => r.body),
            delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
              fetch<Methods4['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json(),
            $delete: (option: { query: Methods4['delete']['query'], config?: T | undefined }) =>
              fetch<Methods4['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods4['get']['query'] } | { method: 'post'; query: Methods4['post']['query'] } | { method: 'put'; query: Methods4['put']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    /**
     * 3.1 comment
     */
    $3_1: {
      /**
       * 3.1 get method comment
       * @param option.headers - 3.1 reqHeaders
       */
      get: (option?: { query?: Methods7['get']['query'] | undefined, headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH6, GET, option).json(),
      /**
       * 3.1 get method comment
       * @param option.headers - 3.1 reqHeaders
       */
      $get: (option?: { query?: Methods7['get']['query'] | undefined, headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
      post: (option: { body?: Methods7['post']['reqBody'] | undefined, query: Methods7['post']['query'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
      $post: (option: { body?: Methods7['post']['reqBody'] | undefined, query: Methods7['post']['query'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] } | undefined) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    _articleId_json: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}.json`

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods8['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH2}`
      }
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH7}${val1}`

        return {
          get: (option: { query: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods9['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option: { query: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods9['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          post: (option: { query: Methods9['post']['query'], config?: T | undefined }) =>
            fetch<Methods9['post']['resBody']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
          $post: (option: { query: Methods9['post']['query'], config?: T | undefined }) =>
            fetch<Methods9['post']['resBody']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | undefined) =>
            `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
