/* eslint-disable */
import { AspidaClient, AspidaResponse, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_sampleId.json@number'
import { Methods as Methods2 } from './foo%3Abar'
import { Methods as Methods3 } from './polymorphism/users'
import { Methods as Methods4 } from './polymorphism/users/_userId'
import { Methods as Methods5 } from './v1.1'
import { Methods as Methods6 } from './v1.1/2/_hogeId'
import { Methods as Methods7 } from './v1.1/2/_hogeId@number'
import { Methods as Methods8 } from './v1.1/2/_hogeId@string/entries.json'
import { Methods as Methods9 } from './v1.1/2/_hogeId@string/test-4'
import { Methods as Methods10 } from './v1.1/2/_hogeId@string/test-4/_fugaId'
import { Methods as Methods11 } from './v1.1/2/_hogeId@string/test-4/fuga aa'
import { Methods as Methods12 } from './v1.1/3.1'
import { Methods as Methods13 } from './v1.1/_articleId.json'
import { Methods as Methods14 } from './v1.1/users/_userId@string'
import { Methods as Methods15 } from './v2.0'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/foo%3Abar'
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
    foo_3Abar: {
      get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    polymorphism: {
      users: {
        _userId: (val1: number | string) => {
          const prefix1 = `${PATH1}/${val1}`

          return {
            get: (() => {
              function getRequest(option: { body: Methods4['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods4['get']['polymorph'][0]['resBody'], BasicHeaders, Methods4['get']['polymorph'][0]['status']>>
              function getRequest(option: { body: Methods4['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods4['get']['polymorph'][1]['resBody'], Methods4['get']['polymorph'][1]['resHeaders']>>
              function getRequest(option: any) {
                return fetch(prefix, prefix1, GET, option).text()
              }
              return getRequest
            })(),
            $get: (() => {
              function $getRequest(option: { body: Methods4['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods4['get']['polymorph'][0]['resBody']>
              function $getRequest(option: { body: Methods4['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods4['get']['polymorph'][1]['resBody']>
              function $getRequest(option: any) {
                return fetch(prefix, prefix1, GET, option).text().then(r => r.body)
              }
              return $getRequest
            })(),
            post: (() => {
              function postRequest(option: { body: Methods4['post']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods4['post']['polymorph'][0]['resBody']>>
              function postRequest(option: { body: Methods4['post']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods4['post']['polymorph'][1]['resBody']>>
              function postRequest(option: any) {
                return fetch(prefix, prefix1, POST, option, 'FormData').json()
              }
              return postRequest
            })(),
            $post: (() => {
              function $postRequest(option: { body: Methods4['post']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods4['post']['polymorph'][0]['resBody']>
              function $postRequest(option: { body: Methods4['post']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods4['post']['polymorph'][1]['resBody']>
              function $postRequest(option: any) {
                return fetch(prefix, prefix1, POST, option, 'FormData').json().then(r => r.body)
              }
              return $postRequest
            })(),
            $path: () => `${prefix}${prefix1}`
          }
        },
        get: (() => {
          function getRequest(option: { body: Methods3['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['get']['polymorph'][0]['resBody']>>
          function getRequest(option: { body: Methods3['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['get']['polymorph'][1]['resBody']>>
          function getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json()
          }
          return getRequest
        })(),
        $get: (() => {
          function $getRequest(option: { body: Methods3['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods3['get']['polymorph'][0]['resBody']>
          function $getRequest(option: { body: Methods3['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods3['get']['polymorph'][1]['resBody']>
          function $getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json().then(r => r.body)
          }
          return $getRequest
        })(),
        post: (() => {
          function postRequest(option: { body: Methods3['post']['polymorph'][0]['reqBody'], query?: Methods3['post']['query'], config?: T }): Promise<AspidaResponse<Methods3['post']['polymorph'][0]['resBody']>>
          function postRequest(option: { body: Methods3['post']['polymorph'][1]['reqBody'], query?: Methods3['post']['query'], config?: T }): Promise<AspidaResponse<Methods3['post']['polymorph'][1]['resBody']>>
          function postRequest(option?: { query?: Methods3['post']['query'], config?: T }): Promise<AspidaResponse>
          function postRequest(option: any) {
            return fetch(prefix, PATH1, POST, option, 'FormData').json()
          }
          return postRequest
        })(),
        $post: (() => {
          function $postRequest(option: { body: Methods3['post']['polymorph'][0]['reqBody'], query?: Methods3['post']['query'], config?: T }): Promise<Methods3['post']['polymorph'][0]['resBody']>
          function $postRequest(option: { body: Methods3['post']['polymorph'][1]['reqBody'], query?: Methods3['post']['query'], config?: T }): Promise<Methods3['post']['polymorph'][1]['resBody']>
          function $postRequest(option?: { query?: Methods3['post']['query'], config?: T }): Promise<void>
          function $postRequest(option: any) {
            return fetch(prefix, PATH1, POST, option, 'FormData').json().then(r => r.body)
          }
          return $postRequest
        })(),
        patch: (option: { body: Methods3['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH1, PATCH, option).send(),
        $patch: (option: { body: Methods3['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH1, PATCH, option).send().then(r => r.body),
        put: (() => {
          function putRequest(option: { body: Methods3['put']['polymorph'][0]['reqBody'], query: Methods3['put']['polymorph'][0]['query'], config?: T }): Promise<AspidaResponse<Methods3['put']['resBody']>>
          function putRequest(option: { body: Methods3['put']['polymorph'][1]['reqBody'], query: Methods3['put']['polymorph'][1]['query'], config?: T }): Promise<AspidaResponse<Methods3['put']['resBody']>>
          function putRequest(option: any) {
            return fetch(prefix, PATH1, PUT, option).json()
          }
          return putRequest
        })(),
        $put: (() => {
          function $putRequest(option: { body: Methods3['put']['polymorph'][0]['reqBody'], query: Methods3['put']['polymorph'][0]['query'], config?: T }): Promise<Methods3['put']['resBody']>
          function $putRequest(option: { body: Methods3['put']['polymorph'][1]['reqBody'], query: Methods3['put']['polymorph'][1]['query'], config?: T }): Promise<Methods3['put']['resBody']>
          function $putRequest(option: any) {
            return fetch(prefix, PATH1, PUT, option).json().then(r => r.body)
          }
          return $putRequest
        })(),
        delete: (() => {
          function deleteRequest(option: { body?: Methods3['delete']['reqBody'], headers: Methods3['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<AspidaResponse<void, Methods3['delete']['polymorph'][0]['resHeaders']>>
          function deleteRequest(option?: { body?: Methods3['delete']['reqBody'], config?: T }): Promise<AspidaResponse<void, BasicHeaders, Methods3['delete']['polymorph'][1]['status']>>
          function deleteRequest(option: any) {
            return fetch(prefix, PATH1, DELETE, option).send()
          }
          return deleteRequest
        })(),
        $delete: (() => {
          function $deleteRequest(option: { body?: Methods3['delete']['reqBody'], headers: Methods3['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<void>
          function $deleteRequest(option?: { body?: Methods3['delete']['reqBody'], config?: T }): Promise<void>
          function $deleteRequest(option: any) {
            return fetch(prefix, PATH1, DELETE, option).send().then(r => r.body)
          }
          return $deleteRequest
        })(),
        $path: (option?: { method: 'post'; query: Methods3['post']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _hogeId_number: (val3: number) => {
          const prefix3 = `${PATH3}/${val3}`

          return {
            get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix, prefix3, GET, option).json(),
            $get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
              fetch<Methods7['get']['resBody']>(prefix, prefix3, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods7['get']['query'] }) =>
              `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        },
        _hogeId_string: (val4: string) => {
          const prefix4 = `${PATH3}/${val4}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody']>(prefix, `${prefix4}${PATH4}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods8['get']['resBody']>(prefix, `${prefix4}${PATH4}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix4}${PATH4}`
            },
            test_4: {
              _fugaId: (val5: number | string) => {
                const prefix5 = `${prefix4}${PATH5}/${val5}`

                return {
                  get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                    fetch<Methods10['get']['resBody']>(prefix, prefix5, GET, option).json(),
                  $get: (option?: { query?: Methods10['get']['query'], config?: T }) =>
                    fetch<Methods10['get']['resBody']>(prefix, prefix5, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
                    fetch<Methods10['post']['resBody']>(prefix, prefix5, POST, option).json(),
                  $post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
                    fetch<Methods10['post']['resBody']>(prefix, prefix5, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods10['put']['query'], config?: T }) =>
                    fetch<Methods10['put']['resBody']>(prefix, prefix5, PUT, option).json(),
                  $put: (option: { query: Methods10['put']['query'], config?: T }) =>
                    fetch<Methods10['put']['resBody']>(prefix, prefix5, PUT, option).json().then(r => r.body),
                  delete: (option: { query: Methods10['delete']['query'], config?: T }) =>
                    fetch<Methods10['delete']['resBody']>(prefix, prefix5, DELETE, option).json(),
                  $delete: (option: { query: Methods10['delete']['query'], config?: T }) =>
                    fetch<Methods10['delete']['resBody']>(prefix, prefix5, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods10['get']['query'] } | { method: 'post'; query: Methods10['post']['query'] } | { method: 'put'; query: Methods10['put']['query'] } | { method: 'delete'; query: Methods10['delete']['query'] }) =>
                    `${prefix}${prefix5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                get: (option: { query: Methods11['get']['query'], config?: T }) =>
                  fetch<Methods11['get']['resBody']>(prefix, `${prefix4}${PATH6}`, GET, option).json(),
                $get: (option: { query: Methods11['get']['query'], config?: T }) =>
                  fetch<Methods11['get']['resBody']>(prefix, `${prefix4}${PATH6}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods11['post']['reqBody'], query: Methods11['post']['query'], config?: T }) =>
                  fetch<Methods11['post']['resBody']>(prefix, `${prefix4}${PATH6}`, POST, option).json(),
                $post: (option: { body?: Methods11['post']['reqBody'], query: Methods11['post']['query'], config?: T }) =>
                  fetch<Methods11['post']['resBody']>(prefix, `${prefix4}${PATH6}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods11['put']['query'], config?: T }) =>
                  fetch<Methods11['put']['resBody']>(prefix, `${prefix4}${PATH6}`, PUT, option).json(),
                $put: (option: { query: Methods11['put']['query'], config?: T }) =>
                  fetch<Methods11['put']['resBody']>(prefix, `${prefix4}${PATH6}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods11['delete']['reqBody'], query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody']>(prefix, `${prefix4}${PATH6}`, DELETE, option).json(),
                $delete: (option: { body: Methods11['delete']['reqBody'], query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody']>(prefix, `${prefix4}${PATH6}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods11['get']['query'] } | { method: 'post'; query: Methods11['post']['query'] } | { method: 'put'; query: Methods11['put']['query'] } | { method: 'delete'; query: Methods11['delete']['query'] }) =>
                  `${prefix}${prefix4}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              get: (option: { query: Methods9['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix4}${PATH5}`, GET, option).send(),
              $get: (option: { query: Methods9['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix4}${PATH5}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods9['post']['reqBody'], query?: Methods9['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix4}${PATH5}`, POST, option).send(),
              $post: (option?: { body?: Methods9['post']['reqBody'], query?: Methods9['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix4}${PATH5}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods9['put']['query'], config?: T }) =>
                fetch<Methods9['put']['resBody']>(prefix, `${prefix4}${PATH5}`, PUT, option).json(),
              $put: (option?: { query?: Methods9['put']['query'], config?: T }) =>
                fetch<Methods9['put']['resBody']>(prefix, `${prefix4}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                fetch<Methods9['delete']['resBody']>(prefix, `${prefix4}${PATH5}`, DELETE, option).json(),
              $delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                fetch<Methods9['delete']['resBody']>(prefix, `${prefix4}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods9['get']['query'] } | { method: 'post'; query: Methods9['post']['query'] } | { method: 'put'; query: Methods9['put']['query'] } | { method: 'delete'; query: Methods9['delete']['query'] }) =>
                `${prefix}${prefix4}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      },
      $3_1: {
        get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
          fetch<Methods12['get']['resBody']>(prefix, PATH7, GET, option).json(),
        $get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
          fetch<Methods12['get']['resBody']>(prefix, PATH7, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
          fetch<Methods12['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods12['post']['reqBody'], query: Methods12['post']['query'], config?: T }) =>
          fetch<Methods12['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] }) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val6: number | string) => {
        const prefix6 = `${PATH2}/${val6}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods13['get']['resBody']>(prefix, prefix6, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods13['get']['resBody']>(prefix, prefix6, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix6}`
        }
      },
      users: {
        _userId: (val7: string) => {
          const prefix7 = `${PATH8}/${val7}`

          return {
            get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody']>(prefix, prefix7, GET, option).json(),
            $get: (option: { query: Methods14['get']['query'], headers: Methods14['get']['reqHeaders'], config?: T }) =>
              fetch<Methods14['get']['resBody']>(prefix, prefix7, GET, option).json().then(r => r.body),
            post: (option: { query: Methods14['post']['query'], config?: T }) =>
              fetch<Methods14['post']['resBody']>(prefix, prefix7, POST, option).json(),
            $post: (option: { query: Methods14['post']['query'], config?: T }) =>
              fetch<Methods14['post']['resBody']>(prefix, prefix7, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] }) =>
              `${prefix}${prefix7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
      `${prefix}${''}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
