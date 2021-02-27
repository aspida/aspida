/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './_hogeId'
import { Methods as Methods1 } from './_hogeId@number'
import { Methods as Methods2 } from './_hogeId@string/entries.json'
import { Methods as Methods3 } from './_hogeId@string/test-4'
import { Methods as Methods4 } from './_hogeId@string/test-4/_fugaId'
import { Methods as Methods5 } from './_hogeId@string/test-4/fuga aa'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1.1/2'
  const PATH1 = '/entries.json'
  const PATH2 = '/test-4'
  const PATH3 = '/test-4/fuga aa'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _hogeId: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        $get: (option?: { config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _hogeId_number: (val0: number) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        $get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    _hogeId_string: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        entries_json: {
          $get: (option?: { config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        },
        test_4: {
          /**
           * _fugaId comment
           */
          _fugaId: (val2: number | string) => {
            const prefix2 = `${prefix0}${PATH2}/${val2}`

            return {
              $get: (option?: { query?: Methods4['get']['query'], config?: T }) =>
                fetch<Methods4['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
              $post: (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: T }) =>
                fetch<Methods4['post']['resBody']>(prefix, prefix2, POST, option).json().then(r => r.body),
              $put: (option: { query: Methods4['put']['query'], config?: T }) =>
                fetch<Methods4['put']['resBody']>(prefix, prefix2, PUT, option).json().then(r => r.body),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              $delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
                fetch<Methods4['delete']['resBody']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods4['get']['query'] } | { method: 'post'; query: Methods4['post']['query'] } | { method: 'put'; query: Methods4['put']['query'] } | { method: 'delete'; query: Methods4['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          },
          fuga_aa: {
            $get: (option: { query: Methods5['get']['query'], config?: T }) =>
              fetch<Methods5['get']['resBody']>(prefix, `${prefix0}${PATH3}`, GET, option).json().then(r => r.body),
            $post: (option: { body?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
              fetch<Methods5['post']['resBody']>(prefix, `${prefix0}${PATH3}`, POST, option).json().then(r => r.body),
            $put: (option: { query: Methods5['put']['query'], config?: T }) =>
              fetch<Methods5['put']['resBody']>(prefix, `${prefix0}${PATH3}`, PUT, option).json().then(r => r.body),
            $delete: (option: { body: Methods5['delete']['reqBody'], query: Methods5['delete']['query'], config?: T }) =>
              fetch<Methods5['delete']['resBody']>(prefix, `${prefix0}${PATH3}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods5['get']['query'] } | { method: 'post'; query: Methods5['post']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | { method: 'delete'; query: Methods5['delete']['query'] }) =>
              `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          },
          $get: (option: { query: Methods3['get']['query'], config?: T }) =>
            fetch(prefix, `${prefix0}${PATH2}`, GET, option).send().then(r => r.body),
          $post: (option?: { body?: Methods3['post']['reqBody'], query?: Methods3['post']['query'], config?: T }) =>
            fetch(prefix, `${prefix0}${PATH2}`, POST, option).send().then(r => r.body),
          $put: (option?: { query?: Methods3['put']['query'], config?: T }) =>
            fetch<Methods3['put']['resBody']>(prefix, `${prefix0}${PATH2}`, PUT, option).json().then(r => r.body),
          $delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
            fetch<Methods3['delete']['resBody']>(prefix, `${prefix0}${PATH2}`, DELETE, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] } | { method: 'post'; query: Methods3['post']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | { method: 'delete'; query: Methods3['delete']['query'] }) =>
            `${prefix}${prefix0}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
