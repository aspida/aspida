/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from '../../@types'
import { Methods as Methods0 } from './_hogeId@HogeId/entries.json'
import { Methods as Methods1 } from './_hogeId@HogeId/test-4'
import { Methods as Methods2 } from './_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods3 } from './_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods4 } from './_hogeId@number'

const GET = 'GET'
const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'
const PATH0 = '/entries.json/'
const PATH1 = '/test-4/'
const PATH2 = '/'
const PATH3 = '/test-4/fuga aa/'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = `${(baseURL === undefined ? '' : baseURL).replace(/\/$/, '')}/v1.1/2`

  return {
    _hogeId_0: (val0: ApiTypes.HogeId) => {
      const prefix0 = `${prefix}/${val0}`

      return {
        entries_json: {
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix0, PATH0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix0, PATH0, GET, option).json().then(r => r.body)
        },
        test_4: {
          _fugaId: (val1: number | string) => {
            const prefix1 = `${prefix0}/${val1}`

            return {
              get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
                fetch<Methods2['get']['resBody']>(prefix1, PATH2, GET, option).json(),
              $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
                fetch<Methods2['get']['resBody']>(prefix1, PATH2, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
                fetch<Methods2['post']['resBody']>(prefix1, PATH2, POST, option).json(),
              $post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
                fetch<Methods2['post']['resBody']>(prefix1, PATH2, POST, option).json().then(r => r.body),
              put: (option: { query: Methods2['put']['query'], config?: T }) =>
                fetch<Methods2['put']['resBody']>(prefix1, PATH2, PUT, option).json(),
              $put: (option: { query: Methods2['put']['query'], config?: T }) =>
                fetch<Methods2['put']['resBody']>(prefix1, PATH2, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
                fetch<Methods2['delete']['resBody']>(prefix1, PATH2, DELETE, option).json(),
              $delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
                fetch<Methods2['delete']['resBody']>(prefix1, PATH2, DELETE, option).json().then(r => r.body)
            }
          },
          fuga_aa: {
            get: (option: { query: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix0, PATH3, GET, option).json(),
            $get: (option: { query: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix0, PATH3, GET, option).json().then(r => r.body),
            post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<Methods3['post']['resBody']>(prefix0, PATH3, POST, option).json(),
            $post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<Methods3['post']['resBody']>(prefix0, PATH3, POST, option).json().then(r => r.body),
            put: (option: { query: Methods3['put']['query'], config?: T }) =>
              fetch<Methods3['put']['resBody']>(prefix0, PATH3, PUT, option).json(),
            $put: (option: { query: Methods3['put']['query'], config?: T }) =>
              fetch<Methods3['put']['resBody']>(prefix0, PATH3, PUT, option).json().then(r => r.body),
            delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
              fetch<Methods3['delete']['resBody']>(prefix0, PATH3, DELETE, option).json(),
            $delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
              fetch<Methods3['delete']['resBody']>(prefix0, PATH3, DELETE, option).json().then(r => r.body)
          },
          get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void>(prefix0, PATH1, GET, option).send(),
          $get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void>(prefix0, PATH1, GET, option).send().then(r => r.body),
          post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
            fetch<void>(prefix0, PATH1, POST, option).send(),
          $post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
            fetch<void>(prefix0, PATH1, POST, option).send().then(r => r.body),
          put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix0, PATH1, PUT, option).json(),
          $put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix0, PATH1, PUT, option).json().then(r => r.body),
          delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<Methods1['delete']['resBody']>(prefix0, PATH1, DELETE, option).json(),
          $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<Methods1['delete']['resBody']>(prefix0, PATH1, DELETE, option).json().then(r => r.body)
        }
      }
    },
    _hogeId_1: (val2: number) => {
      const prefix2 = `${prefix}/${val2}`

      return {
        get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
          fetch<Methods4['get']['resBody']>(prefix2, PATH2, GET, option).json(),
        $get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
          fetch<Methods4['get']['resBody']>(prefix2, PATH2, GET, option).json().then(r => r.body)
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
