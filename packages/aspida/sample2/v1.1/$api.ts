/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import * as ApiTypes from '../@types'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './2/_hogeId@HogeId/entries.json'
import { Methods as Methods2 } from './2/_hogeId@HogeId/test-4'
import { Methods as Methods3 } from './2/_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods4 } from './2/_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods5 } from './2/_hogeId@number'
import { Methods as Methods6 } from './3.1'
import { Methods as Methods7 } from './_articleId.json'
import { Methods as Methods8 } from './users/_userId@User[\'id\']'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATH0 = '/'
const PATH1 = '/entries.json/'
const PATH2 = '/test-4/'
const PATH3 = '/test-4/fuga aa/'
const PATH4 = '/3.1/'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = `${(baseURL === undefined ? '' : baseURL).replace(/\/$/, '')}/v1.1`

  return {
    $2: {
      _hogeId_0: (val0: ApiTypes.HogeId) => {
        const prefix0 = `${prefix}/${val0}`

        return {
          entries_json: {
            get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix0, PATH1, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix0, PATH1, GET, option).json().then(r => r.body)
          },
          test_4: {
            _fugaId: (val1: number | string) => {
              const prefix1 = `${prefix0}/${val1}`

              return {
                get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
                  fetch<Methods3['get']['resBody']>(prefix1, PATH0, GET, option).json(),
                $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
                  fetch<Methods3['get']['resBody']>(prefix1, PATH0, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
                  fetch<Methods3['post']['resBody']>(prefix1, PATH0, POST, option).json(),
                $post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
                  fetch<Methods3['post']['resBody']>(prefix1, PATH0, POST, option).json().then(r => r.body),
                put: (option: { query: Methods3['put']['query'], config?: T }) =>
                  fetch<Methods3['put']['resBody']>(prefix1, PATH0, PUT, option).json(),
                $put: (option: { query: Methods3['put']['query'], config?: T }) =>
                  fetch<Methods3['put']['resBody']>(prefix1, PATH0, PUT, option).json().then(r => r.body),
                delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                  fetch<Methods3['delete']['resBody']>(prefix1, PATH0, DELETE, option).json(),
                $delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
                  fetch<Methods3['delete']['resBody']>(prefix1, PATH0, DELETE, option).json().then(r => r.body)
              }
            },
            fuga_aa: {
              get: (option: { query: Methods4['get']['query'], config?: T }) =>
                fetch<Methods4['get']['resBody']>(prefix0, PATH3, GET, option).json(),
              $get: (option: { query: Methods4['get']['query'], config?: T }) =>
                fetch<Methods4['get']['resBody']>(prefix0, PATH3, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: T }) =>
                fetch<Methods4['post']['resBody']>(prefix0, PATH3, POST, option).json(),
              $post: (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: T }) =>
                fetch<Methods4['post']['resBody']>(prefix0, PATH3, POST, option).json().then(r => r.body),
              put: (option: { query: Methods4['put']['query'], config?: T }) =>
                fetch<Methods4['put']['resBody']>(prefix0, PATH3, PUT, option).json(),
              $put: (option: { query: Methods4['put']['query'], config?: T }) =>
                fetch<Methods4['put']['resBody']>(prefix0, PATH3, PUT, option).json().then(r => r.body),
              delete: (option: { body: Methods4['delete']['reqBody'], query: Methods4['delete']['query'], config?: T }) =>
                fetch<Methods4['delete']['resBody']>(prefix0, PATH3, DELETE, option).json(),
              $delete: (option: { body: Methods4['delete']['reqBody'], query: Methods4['delete']['query'], config?: T }) =>
                fetch<Methods4['delete']['resBody']>(prefix0, PATH3, DELETE, option).json().then(r => r.body)
            },
            get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<void>(prefix0, PATH2, GET, option).send(),
            $get: (option: { query: Methods2['get']['query'], config?: T }) =>
              fetch<void>(prefix0, PATH2, GET, option).send().then(r => r.body),
            post: (option?: { body?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
              fetch<void>(prefix0, PATH2, POST, option).send(),
            $post: (option?: { body?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
              fetch<void>(prefix0, PATH2, POST, option).send().then(r => r.body),
            put: (option?: { query?: Methods2['put']['query'], config?: T }) =>
              fetch<Methods2['put']['resBody']>(prefix0, PATH2, PUT, option).json(),
            $put: (option?: { query?: Methods2['put']['query'], config?: T }) =>
              fetch<Methods2['put']['resBody']>(prefix0, PATH2, PUT, option).json().then(r => r.body),
            delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
              fetch<Methods2['delete']['resBody']>(prefix0, PATH2, DELETE, option).json(),
            $delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
              fetch<Methods2['delete']['resBody']>(prefix0, PATH2, DELETE, option).json().then(r => r.body)
          }
        }
      },
      _hogeId_1: (val2: number) => {
        const prefix2 = `${prefix}/${val2}`

        return {
          get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix2, PATH0, GET, option).json(),
          $get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix2, PATH0, GET, option).json().then(r => r.body)
        }
      }
    },
    $3_1: {
      get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
        fetch<Methods6['post']['resBody']>(prefix, PATH4, POST, option, 'URLSearchParams').json(),
      $post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
        fetch<Methods6['post']['resBody']>(prefix, PATH4, POST, option, 'URLSearchParams').json().then(r => r.body)
    },
    _articleId_json: (val3: number | string) => {
      const prefix3 = `${prefix}/${val3}.json`

      return {
        get: (option?: { config?: T }) =>
          fetch<Methods7['get']['resBody']>(prefix3, PATH0, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods7['get']['resBody']>(prefix3, PATH0, GET, option).json().then(r => r.body)
      }
    },
    users: {
      _userId: (val4: ApiTypes.User['id']) => {
        const prefix4 = `${prefix}/${val4}`

        return {
          get: (option: { query: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
            fetch<Methods8['get']['resBody']>(prefix4, PATH0, GET, option).json(),
          $get: (option: { query: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
            fetch<Methods8['get']['resBody']>(prefix4, PATH0, GET, option).json().then(r => r.body),
          post: (option: { query: Methods8['post']['query'], config?: T }) =>
            fetch<Methods8['post']['resBody']>(prefix4, PATH0, POST, option).json(),
          $post: (option: { query: Methods8['post']['query'], config?: T }) =>
            fetch<Methods8['post']['resBody']>(prefix4, PATH0, POST, option).json().then(r => r.body)
        }
      }
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
