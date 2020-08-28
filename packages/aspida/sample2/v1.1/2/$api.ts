/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import * as ApiTypes from '../../@types'
import { Methods as Methods0 } from './_hogeId@HogeId/entries.json'
import { Methods as Methods1 } from './_hogeId@HogeId/test-4'
import { Methods as Methods2 } from './_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods3 } from './_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods4 } from './_hogeId@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/2/'
  const PATH1 = '/entries.json/'
  const PATH2 = '/test-4/'
  const PATH3 = '/'
  const PATH4 = '/test-4/fuga aa/'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _hogeId_0: (val0: ApiTypes.HogeId) => {
      const prefix0 = `${PATH0}${val0}`

      return {
        entries_json: {
          get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        test_4: {
          /**
           * _fugaId comment
           */
          _fugaId: (val1: number | string) => {
            const prefix1 = `${prefix0}${PATH2}${val1}`

            return {
              get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
                fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
              $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
                fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
                fetch<Methods2['post']['resBody']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
              $post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
                fetch<Methods2['post']['resBody']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
              put: (option: { query: Methods2['put']['query'], config?: T }) =>
                fetch<Methods2['put']['resBody']>(prefix, `${prefix1}${PATH3}`, PUT, option).json(),
              $put: (option: { query: Methods2['put']['query'], config?: T }) =>
                fetch<Methods2['put']['resBody']>(prefix, `${prefix1}${PATH3}`, PUT, option).json().then(r => r.body),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
                fetch<Methods2['delete']['resBody']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json(),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              $delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
                fetch<Methods2['delete']['resBody']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods2['get']['query'] } | { method: 'post'; query: Methods2['post']['query'] } | { method: 'put'; query: Methods2['put']['query'] } | { method: 'delete'; query: Methods2['delete']['query'] }) =>
                `${prefix}${prefix1}${PATH3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          fuga_aa: {
            get: (option: { query: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
            $get: (option: { query: Methods3['get']['query'], config?: T }) =>
              fetch<Methods3['get']['resBody']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
            post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<Methods3['post']['resBody']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
            $post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              fetch<Methods3['post']['resBody']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
            put: (option: { query: Methods3['put']['query'], config?: T }) =>
              fetch<Methods3['put']['resBody']>(prefix, `${prefix0}${PATH4}`, PUT, option).json(),
            $put: (option: { query: Methods3['put']['query'], config?: T }) =>
              fetch<Methods3['put']['resBody']>(prefix, `${prefix0}${PATH4}`, PUT, option).json().then(r => r.body),
            delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
              fetch<Methods3['delete']['resBody']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json(),
            $delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
              fetch<Methods3['delete']['resBody']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods3['get']['query'] } | { method: 'post'; query: Methods3['post']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | { method: 'delete'; query: Methods3['delete']['query'] }) =>
              `${prefix}${prefix0}${PATH4}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void>(prefix, `${prefix0}${PATH2}`, GET, option).send(),
          $get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<void>(prefix, `${prefix0}${PATH2}`, GET, option).send().then(r => r.body),
          post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
            fetch<void>(prefix, `${prefix0}${PATH2}`, POST, option).send(),
          $post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
            fetch<void>(prefix, `${prefix0}${PATH2}`, POST, option).send().then(r => r.body),
          put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix, `${prefix0}${PATH2}`, PUT, option).json(),
          $put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix, `${prefix0}${PATH2}`, PUT, option).json().then(r => r.body),
          delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<Methods1['delete']['resBody']>(prefix, `${prefix0}${PATH2}`, DELETE, option).json(),
          $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<Methods1['delete']['resBody']>(prefix, `${prefix0}${PATH2}`, DELETE, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'post'; query: Methods1['post']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
            `${prefix}${prefix0}${PATH2}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    },
    _hogeId_1: (val2: number) => {
      const prefix2 = `${PATH0}${val2}`

      return {
        get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
          fetch<Methods4['get']['resBody']>(prefix, `${prefix2}${PATH3}`, GET, option).json(),
        $get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
          fetch<Methods4['get']['resBody']>(prefix, `${prefix2}${PATH3}`, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
          `${prefix}${prefix2}${PATH3}${option?.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
