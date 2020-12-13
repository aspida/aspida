/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_sampleId.json@number'
import { Methods as Methods2 } from './v1.1'
import { Methods as Methods3 } from './v1.1/2/_hogeId'
import { Methods as Methods4 } from './v1.1/2/_hogeId@number'
import { Methods as Methods5 } from './v1.1/2/_hogeId@string/entries.json'
import { Methods as Methods6 } from './v1.1/2/_hogeId@string/test-4'
import { Methods as Methods7 } from './v1.1/2/_hogeId@string/test-4/_fugaId'
import { Methods as Methods8 } from './v1.1/2/_hogeId@string/test-4/fuga aa'
import { Methods as Methods9 } from './v1.1/3.1'
import { Methods as Methods10 } from './v1.1/_articleId.json'
import { Methods as Methods11 } from './v1.1/users/_userId@string'
import { Methods as Methods12 } from './v2.0'

/**
 * root comment
 * 
 * @remarks
 * root remarks comment
 */
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/'
  const PATH1 = '/v1.1/'
  const PATH2 = '/v1.1/2/'
  const PATH3 = '/entries.json/'
  const PATH4 = '/test-4/'
  const PATH5 = '/test-4/fuga aa/'
  const PATH6 = '/v1.1/3.1/'
  const PATH7 = '/v1.1/users/'
  const PATH8 = '/v2.0/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, `${prefix0}${PATH0}`, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, `${prefix0}${PATH0}`, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH0}`
      }
    },
    v1_1: {
      $2: {
        _hogeId: (val1: number | string) => {
          const prefix1 = `${PATH2}${val1}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH0}`
          }
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH2}${val2}`

          return {
            get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        _hogeId_string: (val3: string) => {
          const prefix3 = `${PATH2}${val3}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH3}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods5['get']['resBody']>(prefix, `${prefix3}${PATH3}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix3}${PATH3}`
            },
            test_4: {
              /**
               * _fugaId comment
               */
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix3}${PATH4}${val4}`

                return {
                  get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
                    fetch<Methods7['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json(),
                  $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
                    fetch<Methods7['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
                    fetch<Methods7['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json(),
                  $post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
                    fetch<Methods7['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods7['put']['query'], config?: T }) =>
                    fetch<Methods7['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json(),
                  $put: (option: { query: Methods7['put']['query'], config?: T }) =>
                    fetch<Methods7['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json().then(r => r.body),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
                    fetch<Methods7['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json(),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
                    fetch<Methods7['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] } | { method: 'put'; query: Methods7['put']['query'] } | { method: 'delete'; query: Methods7['delete']['query'] }) =>
                    `${prefix}${prefix4}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                get: (option: { query: Methods8['get']['query'], config?: T }) =>
                  fetch<Methods8['get']['resBody']>(prefix, `${prefix3}${PATH5}`, GET, option).json(),
                $get: (option: { query: Methods8['get']['query'], config?: T }) =>
                  fetch<Methods8['get']['resBody']>(prefix, `${prefix3}${PATH5}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
                  fetch<Methods8['post']['resBody']>(prefix, `${prefix3}${PATH5}`, POST, option).json(),
                $post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
                  fetch<Methods8['post']['resBody']>(prefix, `${prefix3}${PATH5}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods8['put']['query'], config?: T }) =>
                  fetch<Methods8['put']['resBody']>(prefix, `${prefix3}${PATH5}`, PUT, option).json(),
                $put: (option: { query: Methods8['put']['query'], config?: T }) =>
                  fetch<Methods8['put']['resBody']>(prefix, `${prefix3}${PATH5}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods8['delete']['reqBody'], query: Methods8['delete']['query'], config?: T }) =>
                  fetch<Methods8['delete']['resBody']>(prefix, `${prefix3}${PATH5}`, DELETE, option).json(),
                $delete: (option: { body: Methods8['delete']['reqBody'], query: Methods8['delete']['query'], config?: T }) =>
                  fetch<Methods8['delete']['resBody']>(prefix, `${prefix3}${PATH5}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods8['get']['query'] } | { method: 'post'; query: Methods8['post']['query'] } | { method: 'put'; query: Methods8['put']['query'] } | { method: 'delete'; query: Methods8['delete']['query'] }) =>
                  `${prefix}${prefix3}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix3}${PATH4}`, GET, option).send(),
              $get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix3}${PATH4}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods6['post']['reqBody'], query?: Methods6['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix3}${PATH4}`, POST, option).send(),
              $post: (option?: { body?: Methods6['post']['reqBody'], query?: Methods6['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix3}${PATH4}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix3}${PATH4}`, PUT, option).json(),
              $put: (option?: { query?: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix3}${PATH4}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix3}${PATH4}`, DELETE, option).json(),
              $delete: (option: { query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix3}${PATH4}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods6['get']['query'] } | { method: 'post'; query: Methods6['post']['query'] } | { method: 'put'; query: Methods6['put']['query'] } | { method: 'delete'; query: Methods6['delete']['query'] }) =>
                `${prefix}${prefix3}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
        get: (option?: { query?: Methods9['get']['query'], headers?: Methods9['get']['reqHeaders'], config?: T }) =>
          fetch<Methods9['get']['resBody']>(prefix, PATH6, GET, option).json(),
        /**
         * 3.1 get method comment
         * @param option.headers - 3.1 reqHeaders
         */
        $get: (option?: { query?: Methods9['get']['query'], headers?: Methods9['get']['reqHeaders'], config?: T }) =>
          fetch<Methods9['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods9['post']['reqBody'], query: Methods9['post']['query'], config?: T }) =>
          fetch<Methods9['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods9['post']['reqBody'], query: Methods9['post']['query'], config?: T }) =>
          fetch<Methods9['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] }) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val5: number | string) => {
        const prefix5 = `${PATH1}${val5}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody']>(prefix, `${prefix5}${PATH0}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods10['get']['resBody']>(prefix, `${prefix5}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix5}${PATH0}`
        }
      },
      users: {
        _userId: (val6: string) => {
          const prefix6 = `${PATH7}${val6}`

          return {
            get: (option: { query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
              fetch<Methods11['get']['resBody']>(prefix, `${prefix6}${PATH0}`, GET, option).json(),
            $get: (option: { query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
              fetch<Methods11['get']['resBody']>(prefix, `${prefix6}${PATH0}`, GET, option).json().then(r => r.body),
            post: (option: { query: Methods11['post']['query'], config?: T }) =>
              fetch<Methods11['post']['resBody']>(prefix, `${prefix6}${PATH0}`, POST, option).json(),
            $post: (option: { query: Methods11['post']['query'], config?: T }) =>
              fetch<Methods11['post']['resBody']>(prefix, `${prefix6}${PATH0}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods11['get']['query'] } | { method: 'post'; query: Methods11['post']['query'] }) =>
              `${prefix}${prefix6}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      get: (option: { query: Methods12['get']['query'], headers: Methods12['get']['reqHeaders'], config?: T }) =>
        fetch<Methods12['get']['resBody'], Methods12['get']['resHeaders'], Methods12['get']['status']>(prefix, PATH8, GET, option).text(),
      $get: (option: { query: Methods12['get']['query'], headers: Methods12['get']['reqHeaders'], config?: T }) =>
        fetch<Methods12['get']['resBody'], Methods12['get']['resHeaders'], Methods12['get']['status']>(prefix, PATH8, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods12['get']['query'] }) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * get method comment
     * 
     * @remarks
     * get method remarks comment
     */
    get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).formData(),
    /**
     * get method comment
     * 
     * @remarks
     * get method remarks comment
     */
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).formData().then(r => r.body),
    /**
     * @param option.body - body comment
     */
    post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).arrayBuffer(),
    /**
     * @param option.body - body comment
     */
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).arrayBuffer().then(r => r.body),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    $put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    $delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
