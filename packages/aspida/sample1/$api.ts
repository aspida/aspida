/* eslint-disable */
import { AspidaClient, AspidaResponse, BasicHeaders, dataToURLString } from 'aspida'
import * as ApiTypes from './@types'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './_sampleId.json@number'
import { Methods as Methods2 } from './polymorphism/users'
import { Methods as Methods3 } from './polymorphism/users/_userId'
import { Methods as Methods4 } from './v1.1'
import { Methods as Methods5 } from './v1.1/2/_hogeId@HogeId/entries.json'
import { Methods as Methods6 } from './v1.1/2/_hogeId@HogeId/test-4'
import { Methods as Methods7 } from './v1.1/2/_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods8 } from './v1.1/2/_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods9 } from './v1.1/2/_hogeId@number'
import { Methods as Methods10 } from './v1.1/3.1'
import { Methods as Methods11 } from './v1.1/_articleId.json'
import { Methods as Methods12 } from './v1.1/users/_userId@User[\'id\']'
import { Methods as Methods13 } from './v2.0'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/polymorphism/users'
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
    polymorphism: {
      users: {
        _userId: (val1: number | string) => {
          const prefix1 = `${PATH0}/${val1}`

          return {
            get: (() => {
              function getRequest(option: { body: Methods3['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['get']['polymorph'][0]['resBody'], BasicHeaders, Methods3['get']['polymorph'][0]['status']>>
              function getRequest(option: { body: Methods3['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['get']['polymorph'][1]['resBody'], Methods3['get']['polymorph'][1]['resHeaders']>>
              function getRequest(option: any) {
                return fetch(prefix, prefix1, GET, option).text()
              }
              return getRequest
            })(),
            $get: (() => {
              function $getRequest(option: { body: Methods3['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods3['get']['polymorph'][0]['resBody']>
              function $getRequest(option: { body: Methods3['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods3['get']['polymorph'][1]['resBody']>
              function $getRequest(option: any) {
                return fetch(prefix, prefix1, GET, option).text().then(r => r.body)
              }
              return $getRequest
            })(),
            post: (() => {
              function postRequest(option: { body: Methods3['post']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['post']['polymorph'][0]['resBody']>>
              function postRequest(option: { body: Methods3['post']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods3['post']['polymorph'][1]['resBody']>>
              function postRequest(option: any) {
                return fetch(prefix, prefix1, POST, option, 'FormData').json()
              }
              return postRequest
            })(),
            $post: (() => {
              function $postRequest(option: { body: Methods3['post']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods3['post']['polymorph'][0]['resBody']>
              function $postRequest(option: { body: Methods3['post']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods3['post']['polymorph'][1]['resBody']>
              function $postRequest(option: any) {
                return fetch(prefix, prefix1, POST, option, 'FormData').json().then(r => r.body)
              }
              return $postRequest
            })(),
            $path: () => `${prefix}${prefix1}`
          }
        },
        get: (() => {
          function getRequest(option: { body: Methods2['get']['polymorph'][0]['reqBody'], config?: T }): Promise<AspidaResponse<Methods2['get']['polymorph'][0]['resBody']>>
          function getRequest(option: { body: Methods2['get']['polymorph'][1]['reqBody'], config?: T }): Promise<AspidaResponse<Methods2['get']['polymorph'][1]['resBody']>>
          function getRequest(option: any) {
            return fetch(prefix, PATH0, GET, option).json()
          }
          return getRequest
        })(),
        $get: (() => {
          function $getRequest(option: { body: Methods2['get']['polymorph'][0]['reqBody'], config?: T }): Promise<Methods2['get']['polymorph'][0]['resBody']>
          function $getRequest(option: { body: Methods2['get']['polymorph'][1]['reqBody'], config?: T }): Promise<Methods2['get']['polymorph'][1]['resBody']>
          function $getRequest(option: any) {
            return fetch(prefix, PATH0, GET, option).json().then(r => r.body)
          }
          return $getRequest
        })(),
        post: (() => {
          function postRequest(option: { body: Methods2['post']['polymorph'][0]['reqBody'], query?: Methods2['post']['query'], config?: T }): Promise<AspidaResponse<Methods2['post']['polymorph'][0]['resBody']>>
          function postRequest(option: { body: Methods2['post']['polymorph'][1]['reqBody'], query?: Methods2['post']['query'], config?: T }): Promise<AspidaResponse<Methods2['post']['polymorph'][1]['resBody']>>
          function postRequest(option?: { query?: Methods2['post']['query'], config?: T }): Promise<AspidaResponse>
          function postRequest(option: any) {
            return fetch(prefix, PATH0, POST, option, 'FormData').json()
          }
          return postRequest
        })(),
        $post: (() => {
          function $postRequest(option: { body: Methods2['post']['polymorph'][0]['reqBody'], query?: Methods2['post']['query'], config?: T }): Promise<Methods2['post']['polymorph'][0]['resBody']>
          function $postRequest(option: { body: Methods2['post']['polymorph'][1]['reqBody'], query?: Methods2['post']['query'], config?: T }): Promise<Methods2['post']['polymorph'][1]['resBody']>
          function $postRequest(option?: { query?: Methods2['post']['query'], config?: T }): Promise<void>
          function $postRequest(option: any) {
            return fetch(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body)
          }
          return $postRequest
        })(),
        patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH0, PATCH, option).send(),
        $patch: (option: { body: Methods2['patch']['reqBody'], config?: T }) =>
          fetch(prefix, PATH0, PATCH, option).send().then(r => r.body),
        put: (() => {
          function putRequest(option: { body: Methods2['put']['polymorph'][0]['reqBody'], query: Methods2['put']['polymorph'][0]['query'], config?: T }): Promise<AspidaResponse<Methods2['put']['resBody']>>
          function putRequest(option: { body: Methods2['put']['polymorph'][1]['reqBody'], query: Methods2['put']['polymorph'][1]['query'], config?: T }): Promise<AspidaResponse<Methods2['put']['resBody']>>
          function putRequest(option: any) {
            return fetch(prefix, PATH0, PUT, option).json()
          }
          return putRequest
        })(),
        $put: (() => {
          function $putRequest(option: { body: Methods2['put']['polymorph'][0]['reqBody'], query: Methods2['put']['polymorph'][0]['query'], config?: T }): Promise<Methods2['put']['resBody']>
          function $putRequest(option: { body: Methods2['put']['polymorph'][1]['reqBody'], query: Methods2['put']['polymorph'][1]['query'], config?: T }): Promise<Methods2['put']['resBody']>
          function $putRequest(option: any) {
            return fetch(prefix, PATH0, PUT, option).json().then(r => r.body)
          }
          return $putRequest
        })(),
        delete: (() => {
          function deleteRequest(option: { body?: Methods2['delete']['reqBody'], headers: Methods2['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<AspidaResponse<void, Methods2['delete']['polymorph'][0]['resHeaders']>>
          function deleteRequest(option?: { body?: Methods2['delete']['reqBody'], config?: T }): Promise<AspidaResponse<void, BasicHeaders, Methods2['delete']['polymorph'][1]['status']>>
          function deleteRequest(option: any) {
            return fetch(prefix, PATH0, DELETE, option).send()
          }
          return deleteRequest
        })(),
        $delete: (() => {
          function $deleteRequest(option: { body?: Methods2['delete']['reqBody'], headers: Methods2['delete']['polymorph'][0]['reqHeaders'], config?: T }): Promise<void>
          function $deleteRequest(option?: { body?: Methods2['delete']['reqBody'], config?: T }): Promise<void>
          function $deleteRequest(option: any) {
            return fetch(prefix, PATH0, DELETE, option).send().then(r => r.body)
          }
          return $deleteRequest
        })(),
        $path: (option?: { method: 'post'; query: Methods2['post']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    v1_1: {
      $2: {
        _hogeId_0: (val2: ApiTypes.HogeId) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            entries_json: {
              get: (option?: { config?: T }) =>
                fetch<Methods5['get']['resBody']>(prefix, `${prefix2}${PATH3}`, GET, option).json(),
              $get: (option?: { config?: T }) =>
                fetch<Methods5['get']['resBody']>(prefix, `${prefix2}${PATH3}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`
            },
            test_4: {
              _fugaId: (val3: number | string) => {
                const prefix3 = `${prefix2}${PATH4}/${val3}`

                return {
                  get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
                    fetch<Methods7['get']['resBody']>(prefix, prefix3, GET, option).json(),
                  $get: (option?: { query?: Methods7['get']['query'], config?: T }) =>
                    fetch<Methods7['get']['resBody']>(prefix, prefix3, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
                    fetch<Methods7['post']['resBody']>(prefix, prefix3, POST, option).json(),
                  $post: (option: { body?: Methods7['post']['reqBody'], query: Methods7['post']['query'], config?: T }) =>
                    fetch<Methods7['post']['resBody']>(prefix, prefix3, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods7['put']['query'], config?: T }) =>
                    fetch<Methods7['put']['resBody']>(prefix, prefix3, PUT, option).json(),
                  $put: (option: { query: Methods7['put']['query'], config?: T }) =>
                    fetch<Methods7['put']['resBody']>(prefix, prefix3, PUT, option).json().then(r => r.body),
                  delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
                    fetch<Methods7['delete']['resBody']>(prefix, prefix3, DELETE, option).json(),
                  $delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
                    fetch<Methods7['delete']['resBody']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get'; query: Methods7['get']['query'] } | { method: 'post'; query: Methods7['post']['query'] } | { method: 'put'; query: Methods7['put']['query'] } | { method: 'delete'; query: Methods7['delete']['query'] }) =>
                    `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
                }
              },
              fuga_aa: {
                get: (option: { query: Methods8['get']['query'], config?: T }) =>
                  fetch<Methods8['get']['resBody']>(prefix, `${prefix2}${PATH5}`, GET, option).json(),
                $get: (option: { query: Methods8['get']['query'], config?: T }) =>
                  fetch<Methods8['get']['resBody']>(prefix, `${prefix2}${PATH5}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
                  fetch<Methods8['post']['resBody']>(prefix, `${prefix2}${PATH5}`, POST, option).json(),
                $post: (option: { body?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
                  fetch<Methods8['post']['resBody']>(prefix, `${prefix2}${PATH5}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods8['put']['query'], config?: T }) =>
                  fetch<Methods8['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json(),
                $put: (option: { query: Methods8['put']['query'], config?: T }) =>
                  fetch<Methods8['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods8['delete']['reqBody'], query: Methods8['delete']['query'], config?: T }) =>
                  fetch<Methods8['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json(),
                $delete: (option: { body: Methods8['delete']['reqBody'], query: Methods8['delete']['query'], config?: T }) =>
                  fetch<Methods8['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get'; query: Methods8['get']['query'] } | { method: 'post'; query: Methods8['post']['query'] } | { method: 'put'; query: Methods8['put']['query'] } | { method: 'delete'; query: Methods8['delete']['query'] }) =>
                  `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              },
              get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH4}`, GET, option).send(),
              $get: (option: { query: Methods6['get']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH4}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods6['post']['reqBody'], query?: Methods6['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH4}`, POST, option).send(),
              $post: (option?: { body?: Methods6['post']['reqBody'], query?: Methods6['post']['query'], config?: T }) =>
                fetch(prefix, `${prefix2}${PATH4}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix2}${PATH4}`, PUT, option).json(),
              $put: (option?: { query?: Methods6['put']['query'], config?: T }) =>
                fetch<Methods6['put']['resBody']>(prefix, `${prefix2}${PATH4}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix2}${PATH4}`, DELETE, option).json(),
              $delete: (option: { query: Methods6['delete']['query'], config?: T }) =>
                fetch<Methods6['delete']['resBody']>(prefix, `${prefix2}${PATH4}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods6['get']['query'] } | { method: 'post'; query: Methods6['post']['query'] } | { method: 'put'; query: Methods6['put']['query'] } | { method: 'delete'; query: Methods6['delete']['query'] }) =>
                `${prefix}${prefix2}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        },
        _hogeId_1: (val4: number) => {
          const prefix4 = `${PATH2}/${val4}`

          return {
            get: (option: { query?: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix4, GET, option).json(),
            $get: (option: { query?: Methods9['get']['query'], headers: Methods9['get']['reqHeaders'], config?: T }) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix4, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods9['get']['query'] }) =>
              `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      $3_1: {
        get: (option?: { query?: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
          fetch<Methods10['get']['resBody']>(prefix, PATH6, GET, option).json(),
        $get: (option?: { query?: Methods10['get']['query'], headers?: Methods10['get']['reqHeaders'], config?: T }) =>
          fetch<Methods10['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
          fetch<Methods10['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods10['post']['reqBody'], query: Methods10['post']['query'], config?: T }) =>
          fetch<Methods10['post']['resBody']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods10['get']['query'] } | { method: 'post'; query: Methods10['post']['query'] }) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      _articleId_json: (val5: number | string) => {
        const prefix5 = `${PATH1}/${val5}.json`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods11['get']['resBody']>(prefix, prefix5, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods11['get']['resBody']>(prefix, prefix5, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix5}`
        }
      },
      users: {
        _userId: (val6: ApiTypes.User['id']) => {
          const prefix6 = `${PATH7}/${val6}`

          return {
            get: (option: { query: Methods12['get']['query'], headers: Methods12['get']['reqHeaders'], config?: T }) =>
              fetch<Methods12['get']['resBody']>(prefix, prefix6, GET, option).json(),
            $get: (option: { query: Methods12['get']['query'], headers: Methods12['get']['reqHeaders'], config?: T }) =>
              fetch<Methods12['get']['resBody']>(prefix, prefix6, GET, option).json().then(r => r.body),
            post: (option: { query: Methods12['post']['query'], config?: T }) =>
              fetch<Methods12['post']['resBody']>(prefix, prefix6, POST, option).json(),
            $post: (option: { query: Methods12['post']['query'], config?: T }) =>
              fetch<Methods12['post']['resBody']>(prefix, prefix6, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] }) =>
              `${prefix}${prefix6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    v2_0: {
      get: (option: { query: Methods13['get']['query'], headers: Methods13['get']['reqHeaders'], config?: T }) =>
        fetch<Methods13['get']['resBody'], Methods13['get']['resHeaders'], Methods13['get']['status']>(prefix, PATH8, GET, option).text(),
      $get: (option: { query: Methods13['get']['query'], headers: Methods13['get']['reqHeaders'], config?: T }) =>
        fetch<Methods13['get']['resBody'], Methods13['get']['resHeaders'], Methods13['get']['status']>(prefix, PATH8, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods13['get']['query'] }) =>
        `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
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
