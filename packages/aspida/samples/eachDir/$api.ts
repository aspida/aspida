/* eslint-disable */
// prettier-ignore
import type { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from '.'
// prettier-ignore
import type { Methods as Methods1 } from './_sampleId@number.json'
// prettier-ignore
import type { Methods as Methods2 } from './foo%3Abar'
// prettier-ignore
import type { Methods as Methods3 } from './foo%3Abar/_bar_id@string.json'
// prettier-ignore
import type { Methods as Methods4 } from './foo%3Abar/_fooId@number%40create'
// prettier-ignore
import type { Methods as Methods5 } from './v1.1'
// prettier-ignore
import type { Methods as Methods6 } from './v1.1/2/_hogeId'
// prettier-ignore
import type { Methods as Methods7 } from './v1.1/2/_hogeId@number'
// prettier-ignore
import type { Methods as Methods8 } from './v1.1/2/_hogeId@string/entries.json'
// prettier-ignore
import type { Methods as Methods9 } from './v1.1/2/_hogeId@string/test-4'
// prettier-ignore
import type { Methods as Methods10 } from './v1.1/2/_hogeId@string/test-4/_fugaId'
// prettier-ignore
import type { Methods as Methods11 } from './v1.1/2/_hogeId@string/test-4/fuga aa'
// prettier-ignore
import type { Methods as Methods12 } from './v1.1/3.1'
// prettier-ignore
import type { Methods as Methods13 } from './v1.1/_articleId.json'
// prettier-ignore
import type { Methods as Methods14 } from './v1.1/users/_userId@string'
// prettier-ignore
import type { Methods as Methods15 } from './v2.0'

/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/'
  const PATH1 = '/foo:bar/'
  const PATH2 = '/v1.1/'
  const PATH3 = '/v1.1/2/'
  const PATH4 = '/entries.json/'
  const PATH5 = '/test-4/'
  const PATH6 = '/test-4/fuga aa/'
  const PATH7 = '/v1.1/3.1/'
  const PATH8 = '/v1.1/users/'
  const PATH9 = '/v2.0/'
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
    foo_bar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).text(),
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * @deprecated `foo_3Abar` has been deprecated.
     * Use `foo_bar` instead
     */
    foo_3Abar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).text(),
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH0}`
          }
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        _hogeId_string: (val2: string) => {
          const prefix2 = `${PATH3}${val2}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`
            },
            test_4: {
              /**
               * _fugaId comment
               */
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH5}${val4}`

                return {
                  get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                    fetch<Methods10['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json(),
                  $get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                    fetch<Methods10['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
                    fetch<Methods10['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json(),
                  $post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
                    fetch<Methods10['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods10['put']['query'], config?: T }) =>
                    fetch<Methods10['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json(),
                  $put: (option: { query: Methods10['put']['query'], config?: T }) =>
                    fetch<Methods10['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json().then(r => r.body),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  delete: (option: { query: Methods10['delete']['query'], config?: T }) =>
                    fetch<Methods10['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json(),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: { query: Methods10['delete']['query'], config?: T }) =>
                    fetch<Methods10['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods10['get']['query'] } | { method: 'post'; query: Methods10['post']['query'] } | { method: 'put'; query: Methods10['put']['query'] } | { method: 'delete'; query: Methods10['delete']['query'] }) =>
                    `${prefix}${prefix4}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                get: (option: { query: Methods11['get']['query'], config?: T }) =>
                  fetch<Methods11['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json(),
                $get: (option: { query: Methods11['get']['query'], config?: T }) =>
                  fetch<Methods11['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods11['post']['reqBody'], query: Methods11['post']['query'], config?: T }) =>
                  fetch<Methods11['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json(),
                $post: (option: { body?: Methods11['post']['reqBody'], query: Methods11['post']['query'], config?: T }) =>
                  fetch<Methods11['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods11['put']['query'], config?: T }) =>
                  fetch<Methods11['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json(),
                $put: (option: { query: Methods11['put']['query'], config?: T }) =>
                  fetch<Methods11['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods11['delete']['reqBody'], query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json(),
                $delete: (option: { body: Methods11['delete']['reqBody'], query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods11['get']['query'] } | { method: 'post'; query: Methods11['post']['query'] } | { method: 'put'; query: Methods11['put']['query'] } | { method: 'delete'; query: Methods11['delete']['query'] }) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              get: (option: { query: Methods9['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send(),
              $get: (option: { query: Methods9['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods9['post']['reqBody'], query?: Methods9['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send(),
              $post: (option?: { body?: Methods9['post']['reqBody'], query?: Methods9['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods9['put']['query'], config?: T }) =>
                fetch<Methods9['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json(),
              $put: (option?: { query?: Methods9['put']['query'], config?: T }) =>
                fetch<Methods9['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                fetch<Methods9['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json(),
              $delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                fetch<Methods9['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | { method: 'put'; query: Methods9['put']['query'] } | { method: 'delete'; query: Methods9['delete']['query'] }) =>
                `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
        get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
          fetch<Methods12['get']['resBody']>(prefix, PATH7, GET, option).json(),
        /**
         * 3.1 get method comment
         * @param option.headers - 3.1 reqHeaders
         */
        $get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
          fetch<Methods12['get']['resBody']>(prefix, PATH7, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
          fetch<Methods12['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
          fetch<Methods12['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH2}${val1}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods13['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods13['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`
        }
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH8}${val2}`

          return {
            get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            post: (option: { query: Methods14['post']['query'], config?: T }) =>
              fetch<Methods14['post']['resBody']>(prefix, `${prefix2}${PATH0}`, POST, option).json(),
            $post: (option: { query: Methods14['post']['query'], config?: T }) =>
              fetch<Methods14['post']['resBody']>(prefix, `${prefix2}${PATH0}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] }) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      get: (option: { query: Methods15['get']['query'], headers: Methods15['get']['reqHeaders'], config?: T }) =>
        fetch<Methods15['get']['resBody'], Methods15['get']['resHeaders'], Methods15['get']['status']>(prefix, PATH9, GET, option).text(),
      $get: (option: { query: Methods15['get']['query'], headers: Methods15['get']['reqHeaders'], config?: T }) =>
        fetch<Methods15['get']['resBody'], Methods15['get']['resHeaders'], Methods15['get']['status']>(prefix, PATH9, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods15['get']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
