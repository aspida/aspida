/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './2/_hogeId'
import { Methods as Methods2 } from './2/_hogeId@number'
import { Methods as Methods3 } from './2/_hogeId@string/entries.json'
import { Methods as Methods4 } from './2/_hogeId@string/test-4'
import { Methods as Methods5 } from './2/_hogeId@string/test-4/_fugaId'
import { Methods as Methods6 } from './2/_hogeId@string/test-4/fuga aa'
import { Methods as Methods7 } from './3.1'
import { Methods as Methods8 } from './_articleId.json'
import { Methods as Methods9 } from './users/_userId@string'

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
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH2}`
        }
      },
      _hogeId_number: (val1: number) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      _hogeId_string: (val1: string) => {
        const prefix1 = `${PATH1}${val1}`

        return {
          entries_json: {
            get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
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
                get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                  fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH2}`, GET, option).json(),
                $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                  fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH2}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                  fetch<Methods5['post']['resBody']>(prefix, `${prefix3}${PATH2}`, POST, option).json(),
                $post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                  fetch<Methods5['post']['resBody']>(prefix, `${prefix3}${PATH2}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods5['put']['query'], config?: T }) =>
                  fetch<Methods5['put']['resBody']>(prefix, `${prefix3}${PATH2}`, PUT, option).json(),
                $put: (option: { query: Methods5['put']['query'], config?: T }) =>
                  fetch<Methods5['put']['resBody']>(prefix, `${prefix3}${PATH2}`, PUT, option).json().then(r => r.body),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                  fetch<Methods5['delete']['resBody']>(prefix, `${prefix3}${PATH2}`, DELETE, option).json(),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                $delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                  fetch<Methods5['delete']['resBody']>(prefix, `${prefix3}${PATH2}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods5['get']['query'] } | { method: 'post'; query: Methods5['post']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] }) =>
                  `${prefix}${prefix3}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            fuga_aa: {
              get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch<Methods6['get']['resBody']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
              $get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch<Methods6['get']['resBody']>(prefix, `${prefix1}${PATH5}`, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                fetch<Methods6['post']['resBody']>(prefix, `${prefix1}${PATH5}`, POST, option).json(),
              $post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                fetch<Methods6['post']['resBody']>(prefix, `${prefix1}${PATH5}`, POST, option).json().then(r => r.body),
              put: (option: { query: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix1}${PATH5}`, PUT, option).json(),
              $put: (option: { query: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix1}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix1}${PATH5}`, DELETE, option).json(),
              $delete: (option: { body: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix1}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods6['get']['query'] } | { method: 'post'; query: Methods6['post']['query'] } | { method: 'put'; query: Methods6['put']['query'] } | { method: 'delete'; query: Methods6['delete']['query'] }) =>
                `${prefix}${prefix1}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            get: (option: { query: Methods4['get']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH4}`, GET, option).send(),
            $get: (option: { query: Methods4['get']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH4}`, GET, option).send().then(r => r.body),
            post: (option?: { body?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH4}`, POST, option).send(),
            $post: (option?: { body?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
              fetch(prefix, `${prefix1}${PATH4}`, POST, option).send().then(r => r.body),
            put: (option?: { query?: Methods4['put']['query'], config?: T }) =>
              fetch<Methods4['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json(),
            $put: (option?: { query?: Methods4['put']['query'], config?: T }) =>
              fetch<Methods4['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json().then(r => r.body),
            delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
              fetch<Methods4['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json(),
            $delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
              fetch<Methods4['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods4['get']['query'] } | { method: 'post'; query: Methods4['post']['query'] } | { method: 'put'; query: Methods4['put']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] }) =>
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
      get: (option?: { query?: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'], config?: T }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH6, GET, option).json(),
      /**
       * 3.1 get method comment
       * @param option.headers - 3.1 reqHeaders
       */
      $get: (option?: { query?: Methods7['get']['query'], headers?: Methods7['get']['reqHeaders'], config?: T }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
      post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
      $post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] }) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    _articleId_json: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}.json`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods8['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods8['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH2}`
      }
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH7}${val1}`

        return {
          get: (option: { query: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
            fetch<Methods9['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
          $get: (option: { query: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
            fetch<Methods9['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
          post: (option: { query: Methods9['post']['query'], config?: T }) =>
            fetch<Methods9['post']['resBody']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
          $post: (option: { query: Methods9['post']['query'], config?: T }) =>
            fetch<Methods9['post']['resBody']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] }) =>
            `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
