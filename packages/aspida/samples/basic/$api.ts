/* eslint-disable */
// prettier-ignore
import type { AspidaClient, AspidaResponse, BasicHeaders } from 'aspida'
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
import type { Methods as Methods5 } from './polymorphism/users'
// prettier-ignore
import type { Methods as Methods6 } from './polymorphism/users/_userId'
// prettier-ignore
import type { Methods as Methods7 } from './v1.1'
// prettier-ignore
import type { Methods as Methods8 } from './v1.1/2/_hogeId'
// prettier-ignore
import type { Methods as Methods9 } from './v1.1/2/_hogeId@number'
// prettier-ignore
import type { Methods as Methods10 } from './v1.1/2/_hogeId@string/entries.json'
// prettier-ignore
import type { Methods as Methods11 } from './v1.1/2/_hogeId@string/test-4'
// prettier-ignore
import type { Methods as Methods12 } from './v1.1/2/_hogeId@string/test-4/_fugaId'
// prettier-ignore
import type { Methods as Methods13 } from './v1.1/2/_hogeId@string/test-4/fuga aa'
// prettier-ignore
import type { Methods as Methods14 } from './v1.1/3.1'
// prettier-ignore
import type { Methods as Methods15 } from './v1.1/_articleId.json'
// prettier-ignore
import type { Methods as Methods16 } from './v1.1/users/_userId@string'
// prettier-ignore
import type { Methods as Methods17 } from './v2.0'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/foo:bar'
  const PATH1 = '/polymorphism/users'
  const PATH2 = '/v1.1'
  const PATH3 = '/v1.1/2'
  const PATH4 = '/entries.json'
  const PATH5 = '/test-4'
  const PATH6 = '/test-4/fuga aa'
  const PATH7 = '/v1.1/3.1'
  const PATH8 = '/v1.1/users'
  const PATH9 = '/v2.0'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    foo_bar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
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
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T }) =>
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
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
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
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    polymorphism: {
      users: {
        _userId: (val2: number | string) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            get: (() => {
              function getRequest(option: { body: Methods6['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods6['get']['polymorph'][0]['resBody'], BasicHeaders, Methods6['get']['polymorph'][0]['status']>>
              function getRequest(option: { body: Methods6['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods6['get']['polymorph'][1]['resBody'], Methods6['get']['polymorph'][1]['resHeaders']>>
              function getRequest(option: any) {
                return fetch(prefix, prefix2, GET, option).text()
              }
              return getRequest
            })(),
            $get: (() => {
              function $getRequest(option: { body: Methods6['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods6['get']['polymorph'][0]['resBody']>
              function $getRequest(option: { body: Methods6['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods6['get']['polymorph'][1]['resBody']>
              function $getRequest(option: any) {
                return fetch(prefix, prefix2, GET, option).text().then(r => r.body)
              }
              return $getRequest
            })(),
            post: (() => {
              function postRequest(option: { body: Methods6['post']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods6['post']['polymorph'][0]['resBody']>>
              function postRequest(option: { body: Methods6['post']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods6['post']['polymorph'][1]['resBody']>>
              function postRequest(option: any) {
                return fetch(prefix, prefix2, POST, option, 'FormData').json()
              }
              return postRequest
            })(),
            $post: (() => {
              function $postRequest(option: { body: Methods6['post']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods6['post']['polymorph'][0]['resBody']>
              function $postRequest(option: { body: Methods6['post']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods6['post']['polymorph'][1]['resBody']>
              function $postRequest(option: any) {
                return fetch(prefix, prefix2, POST, option, 'FormData').json().then(r => r.body)
              }
              return $postRequest
            })(),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (() => {
          function getRequest(option: { body: Methods5['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods5['get']['polymorph'][0]['resBody']>>
          function getRequest(option: { body: Methods5['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods5['get']['polymorph'][1]['resBody']>>
          function getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json()
          }
          return getRequest
        })(),
        $get: (() => {
          function $getRequest(option: { body: Methods5['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods5['get']['polymorph'][0]['resBody']>
          function $getRequest(option: { body: Methods5['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods5['get']['polymorph'][1]['resBody']>
          function $getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json().then(r => r.body)
          }
          return $getRequest
        })(),
        post: (() => {
          function postRequest(option: { body: Methods5['post']['polymorph'][0]['reqBody'], query?: Methods5['post']['query'], config?: T }): Promise<AspidaResponse<Methods5['post']['polymorph'][0]['resBody']>>
          function postRequest(option: { body: Methods5['post']['polymorph'][1]['reqBody'], query?: Methods5['post']['query'], config?: T }): Promise<AspidaResponse<Methods5['post']['polymorph'][1]['resBody']>>
          function postRequest(option?: { query?: Methods5['post']['query'], config?: T }): Promise<AspidaResponse>
          function postRequest(option: any) {
            return fetch(prefix, PATH1, POST, option, 'FormData').json()
          }
          return postRequest
        })(),
        $post: (() => {
          function $postRequest(option: { body: Methods5['post']['polymorph'][0]['reqBody'], query?: Methods5['post']['query'], config?: T }): Promise<Methods5['post']['polymorph'][0]['resBody']>
          function $postRequest(option: { body: Methods5['post']['polymorph'][1]['reqBody'], query?: Methods5['post']['query'], config?: T }): Promise<Methods5['post']['polymorph'][1]['resBody']>
          function $postRequest(option?: { query?: Methods5['post']['query'], config?: T }): Promise<void>
          function $postRequest(option: any) {
            return fetch(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body)
          }
          return $postRequest
        })(),
        patch: (option: { body: Methods5['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH1, PATCH, option).send(),
        $patch: (option: { body: Methods5['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH1, PATCH, option).send().then(r => r.body),
        put: (() => {
          function putRequest(option: { body: Methods5['put']['polymorph'][0]['reqBody'], query: Methods5['put']['polymorph'][0]['query'], config?: T }): Promise<AspidaResponse<Methods5['put']['resBody']>>
          function putRequest(option: { body: Methods5['put']['polymorph'][1]['reqBody'], query: Methods5['put']['polymorph'][1]['query'], config?: T }): Promise<AspidaResponse<Methods5['put']['resBody']>>
          function putRequest(option: any) {
            return fetch(prefix, PATH1, PUT, option).json()
          }
          return putRequest
        })(),
        $put: (() => {
          function $putRequest(option: { body: Methods5['put']['polymorph'][0]['reqBody'], query: Methods5['put']['polymorph'][0]['query'], config?: T }): Promise<Methods5['put']['resBody']>
          function $putRequest(option: { body: Methods5['put']['polymorph'][1]['reqBody'], query: Methods5['put']['polymorph'][1]['query'], config?: T }): Promise<Methods5['put']['resBody']>
          function $putRequest(option: any) {
            return fetch(prefix, PATH1, PUT, option).json().then(r => r.body)
          }
          return $putRequest
        })(),
        delete: (() => {
          function deleteRequest(option: { body?: Methods5['delete']['reqBody'], headers: Methods5['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<AspidaResponse<void, Methods5['delete']['polymorph'][0]['resHeaders']>>
          function deleteRequest(option?: { body?: Methods5['delete']['reqBody'], config?: T }): Promise<AspidaResponse<void, BasicHeaders, Methods5['delete']['polymorph'][1]['status']>>
          function deleteRequest(option: any) {
            return fetch(prefix, PATH1, DELETE, option).send()
          }
          return deleteRequest
        })(),
        $delete: (() => {
          function $deleteRequest(option: { body?: Methods5['delete']['reqBody'], headers: Methods5['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<void>
          function $deleteRequest(option?: { body?: Methods5['delete']['reqBody'], config?: T }): Promise<void>
          function $deleteRequest(option: any) {
            return fetch(prefix, PATH1, DELETE, option).send().then(r => r.body)
          }
          return $deleteRequest
        })(),
        $path: (option?: { method: 'post'; query: Methods5['post']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods8['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods8['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            get: (option: { query?: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query?: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods9['get']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        _hogeId_string: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods10['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods10['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`
            },
            test_4: {
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH5}/${val4}`

                return {
                  get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
                    fetch<Methods12['get']['resBody']>(prefix, prefix4, GET, option).json(),
                  $get: (option?: { query?: Methods12['get']['query'], config?: T }) =>
                    fetch<Methods12['get']['resBody']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
                    fetch<Methods12['post']['resBody']>(prefix, prefix4, POST, option).json(),
                  $post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
                    fetch<Methods12['post']['resBody']>(prefix, prefix4, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods12['put']['query'], config?: T }) =>
                    fetch<Methods12['put']['resBody']>(prefix, prefix4, PUT, option).json(),
                  $put: (option: { query: Methods12['put']['query'], config?: T }) =>
                    fetch<Methods12['put']['resBody']>(prefix, prefix4, PUT, option).json().then(r => r.body),
                  delete: (option: { query: Methods12['delete']['query'], config?: T }) =>
                    fetch<Methods12['delete']['resBody']>(prefix, prefix4, DELETE, option).json(),
                  $delete: (option: { query: Methods12['delete']['query'], config?: T }) =>
                    fetch<Methods12['delete']['resBody']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] } | { method: 'put'; query: Methods12['put']['query'] } | { method: 'delete'; query: Methods12['delete']['query'] }) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                get: (option: { query: Methods13['get']['query'], config?: T }) =>
                  fetch<Methods13['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json(),
                $get: (option: { query: Methods13['get']['query'], config?: T }) =>
                  fetch<Methods13['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods13['post']['reqBody'], query: Methods13['post']['query'], config?: T }) =>
                  fetch<Methods13['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json(),
                $post: (option: { body?: Methods13['post']['reqBody'], query: Methods13['post']['query'], config?: T }) =>
                  fetch<Methods13['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods13['put']['query'], config?: T }) =>
                  fetch<Methods13['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json(),
                $put: (option: { query: Methods13['put']['query'], config?: T }) =>
                  fetch<Methods13['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods13['delete']['reqBody'], query: Methods13['delete']['query'], config?: T }) =>
                  fetch<Methods13['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json(),
                $delete: (option: { body: Methods13['delete']['reqBody'], query: Methods13['delete']['query'], config?: T }) =>
                  fetch<Methods13['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods13['get']['query'] } | { method: 'post'; query: Methods13['post']['query'] } | { method: 'put'; query: Methods13['put']['query'] } | { method: 'delete'; query: Methods13['delete']['query'] }) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              get: (option: { query: Methods11['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send(),
              $get: (option: { query: Methods11['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods11['post']['reqBody'], query?: Methods11['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send(),
              $post: (option?: { body?: Methods11['post']['reqBody'], query?: Methods11['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods11['put']['query'], config?: T }) =>
                fetch<Methods11['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json(),
              $put: (option?: { query?: Methods11['put']['query'], config?: T }) =>
                fetch<Methods11['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                fetch<Methods11['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json(),
              $delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                fetch<Methods11['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods11['get']['query'] } | { method: 'post'; query: Methods11['post']['query'] } | { method: 'put'; query: Methods11['put']['query'] } | { method: 'delete'; query: Methods11['delete']['query'] }) =>
                `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      },
      $3_1: {
        get: (option?: { query?: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
          fetch<Methods14['get']['resBody']>(prefix, PATH7, GET, option).json(),
        $get: (option?: { query?: Methods14['get']['query'], headers?: Methods14['get']['reqHeaders'], config?: T }) =>
          fetch<Methods14['get']['resBody']>(prefix, PATH7, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods14['post']['reqBody'], query: Methods14['post']['query'], config?: T }) =>
          fetch<Methods14['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods14['post']['reqBody'], query: Methods14['post']['query'], config?: T }) =>
          fetch<Methods14['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH2}/${val1}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods15['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH8}/${val2}`

          return {
            get: (option: { query: Methods16['get']['query'], headers: Methods16['get']['reqHeaders'], config?: T }) =>
              fetch<Methods16['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query: Methods16['get']['query'], headers: Methods16['get']['reqHeaders'], config?: T }) =>
              fetch<Methods16['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            post: (option: { query: Methods16['post']['query'], config?: T }) =>
              fetch<Methods16['post']['resBody']>(prefix, prefix2, POST, option).json(),
            $post: (option: { query: Methods16['post']['query'], config?: T }) =>
              fetch<Methods16['post']['resBody']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods16['get']['query'] } | { method: 'post'; query: Methods16['post']['query'] }) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
        fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      get: (option: { query: Methods17['get']['query'], headers: Methods17['get']['reqHeaders'], config?: T }) =>
        fetch<Methods17['get']['resBody'], Methods17['get']['resHeaders'], Methods17['get']['status']>(prefix, PATH9, GET, option).text(),
      $get: (option: { query: Methods17['get']['query'], headers: Methods17['get']['reqHeaders'], config?: T }) =>
        fetch<Methods17['get']['resBody'], Methods17['get']['resHeaders'], Methods17['get']['status']>(prefix, PATH9, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods17['get']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData(),
    $get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer(),
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer().then(r => r.body),
    put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json(),
    $put: (option: { query: Methods0['put']['query'], config?: T }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json().then(r => r.body),
    delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send(),
    $delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] }) =>
      `${prefix}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
