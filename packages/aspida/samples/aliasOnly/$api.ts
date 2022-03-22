import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_sampleId@number.json'
import type { Methods as Methods2 } from './foo%3Abar'
import type { Methods as Methods3 } from './foo%3Abar/_bar_id@string.json'
import type { Methods as Methods4 } from './foo%3Abar/_fooId@number%40create'
import type { Methods as Methods5 } from './v1.1'
import type { Methods as Methods6 } from './v1.1/2/_hogeId'
import type { Methods as Methods7 } from './v1.1/2/_hogeId@number'
import type { Methods as Methods8 } from './v1.1/2/_hogeId@string/entries.json'
import type { Methods as Methods9 } from './v1.1/2/_hogeId@string/test-4'
import type { Methods as Methods10 } from './v1.1/2/_hogeId@string/test-4/_fugaId'
import type { Methods as Methods11 } from './v1.1/2/_hogeId@string/test-4/fuga aa'
import type { Methods as Methods12 } from './v1.1/3.1'
import type { Methods as Methods13 } from './v1.1/_articleId.json'
import type { Methods as Methods14 } from './v1.1/users/_userId@string'
import type { Methods as Methods15 } from './v2.0'

/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/foo:bar'
  const PATH1 = '/v1.1'
  const PATH2 = '/v1.1/2'
  const PATH3 = '/entries.json'
  const PATH4 = '/test-4'
  const PATH5 = '/test-4/fuga aa'
  const PATH6 = '/v1.1/3.1'
  const PATH7 = '/v1.1/users'
  const PATH8 = '/v2.0'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    foo_bar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}.json`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    /**
     * @deprecated `foo_3Abar` has been deprecated.
     * Use `foo_bar` instead
     */
    foo_3Abar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}.json`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods6['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            $get: (option: { query?: Methods7['get']['query'] | undefined, headers: Methods7['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods7['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        _hogeId_string: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            entries_json: {
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods8['get']['resBody']>(prefix, `${prefix2}${PATH3}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`
            },
            test_4: {
              /**
               * _fugaId comment
               */
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH4}/${val4}`

                return {
                  $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods10['get']['resBody']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  $post: (option: { body?: Methods10['post']['reqBody'] | undefined, query: Methods10['post']['query'], config?: T | undefined }) =>
                    fetch<Methods10['post']['resBody']>(prefix, prefix4, POST, option).json().then(r => r.body),
                  $put: (option: { query: Methods10['put']['query'], config?: T | undefined }) =>
                    fetch<Methods10['put']['resBody']>(prefix, prefix4, PUT, option).json().then(r => r.body),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: { query: Methods10['delete']['query'], config?: T | undefined }) =>
                    fetch<Methods10['delete']['resBody']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | { method: 'post'; query: Methods10['post']['query'] } | { method: 'put'; query: Methods10['put']['query'] } | { method: 'delete'; query: Methods10['delete']['query'] } | undefined) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                $get: (option: { query: Methods11['get']['query'], config?: T | undefined }) =>
                  fetch<Methods11['get']['resBody']>(prefix, `${prefix2}${PATH5}`, GET, option).json().then(r => r.body),
                $post: (option: { body?: Methods11['post']['reqBody'] | undefined, query: Methods11['post']['query'], config?: T | undefined }) =>
                  fetch<Methods11['post']['resBody']>(prefix, `${prefix2}${PATH5}`, POST, option).json().then(r => r.body),
                $put: (option: { query: Methods11['put']['query'], config?: T | undefined }) =>
                  fetch<Methods11['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json().then(r => r.body),
                $delete: (option: { body: Methods11['delete']['reqBody'], query: Methods11['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods11['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods11['get']['query'] } | { method: 'post'; query: Methods11['post']['query'] } | { method: 'put'; query: Methods11['put']['query'] } | { method: 'delete'; query: Methods11['delete']['query'] } | undefined) =>
                  `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              $get: (option: { query: Methods9['get']['query'], config?: T | undefined }) =>
                fetch(prefix, `${prefix2}${PATH4}`, GET, option).send().then(r => r.body),
              $post: (option?: { body?: Methods9['post']['reqBody'] | undefined, query?: Methods9['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch(prefix, `${prefix2}${PATH4}`, POST, option).send().then(r => r.body),
              $put: (option?: { query?: Methods9['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods9['put']['resBody']>(prefix, `${prefix2}${PATH4}`, PUT, option).json().then(r => r.body),
              $delete: (option: { query: Methods9['delete']['query'], config?: T | undefined }) =>
                fetch<Methods9['delete']['resBody']>(prefix, `${prefix2}${PATH4}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | { method: 'put'; query: Methods9['put']['query'] } | { method: 'delete'; query: Methods9['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
        $get: (option?: { query?: Methods12['get']['query'] | undefined, headers?: Methods12['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods12['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $post: (option: { body?: Methods12['post']['reqBody'] | undefined, query: Methods12['post']['query'], config?: T | undefined }) =>
          fetch<Methods12['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] } | undefined) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}.json`

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods13['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH7}/${val2}`

          return {
            $get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods14['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $post: (option: { query: Methods14['post']['query'], config?: T | undefined }) =>
              fetch<Methods14['post']['resBody']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      $get: (option?: { query?: Methods5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      $get: (option: { query: Methods15['get']['query'], headers: Methods15['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods15['get']['resBody'], Methods15['get']['resHeaders'], Methods15['get']['status']>(prefix, PATH8, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods15['get']['query'] } | undefined) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    /**
     * get method comment
     *
     * @remarks
     * get method remarks comment
     */
    $get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData().then(r => r.body),
    /**
     * @param option.body - body comment
     */
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer().then(r => r.body),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    $put: (option: { query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json().then(r => r.body),
    $delete: (option: { query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] } | undefined) =>
      `${prefix}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
