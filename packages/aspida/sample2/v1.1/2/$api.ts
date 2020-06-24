/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from '../../@types'
import { Methods as Methods0 } from './_hogeId@HogeId/entries.json'
import { Methods as Methods1 } from './_hogeId@HogeId/test-4'
import { Methods as Methods2 } from './_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods3 } from './_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods4 } from './_hogeId@number'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = `${(client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')}/v1.1/2`

  return {
    _hogeId_0: (val0: ApiTypes.HogeId) => ({
      entries_json: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods0['get']['resBody']>(prefix, `/${val0}/entries.json/`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods0['get']['resBody']>(prefix, `/${val0}/entries.json/`, 'GET', option).json()).body
      },
      test_4: {
        _fugaId: (val1: number | string) => ({
          get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
            client.fetch<Methods2['get']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'GET', option).json(),
          $get: async (option?: { query?: Methods2['get']['query'], config?: T }) =>
            (await client.fetch<Methods2['get']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'GET', option).json()).body,
          post: (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
            client.fetch<Methods2['post']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'POST', option).json(),
          $post: async (option: { body?: Methods2['post']['reqBody'], query: Methods2['post']['query'], config?: T }) =>
            (await client.fetch<Methods2['post']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'POST', option).json()).body,
          put: (option: { query: Methods2['put']['query'], config?: T }) =>
            client.fetch<Methods2['put']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'PUT', option).json(),
          $put: async (option: { query: Methods2['put']['query'], config?: T }) =>
            (await client.fetch<Methods2['put']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'PUT', option).json()).body,
          delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
            client.fetch<Methods2['delete']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'DELETE', option).json(),
          $delete: async (option: { query: Methods2['delete']['query'], config?: T }) =>
            (await client.fetch<Methods2['delete']['resBody']>(prefix, `/${val0}/test-4/${val1}/`, 'DELETE', option).json()).body
        }),
        fuga_aa: {
          get: (option: { query: Methods3['get']['query'], config?: T }) =>
            client.fetch<Methods3['get']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'GET', option).json(),
          $get: async (option: { query: Methods3['get']['query'], config?: T }) =>
            (await client.fetch<Methods3['get']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'GET', option).json()).body,
          post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
            client.fetch<Methods3['post']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'POST', option).json(),
          $post: async (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
            (await client.fetch<Methods3['post']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'POST', option).json()).body,
          put: (option: { query: Methods3['put']['query'], config?: T }) =>
            client.fetch<Methods3['put']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'PUT', option).json(),
          $put: async (option: { query: Methods3['put']['query'], config?: T }) =>
            (await client.fetch<Methods3['put']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'PUT', option).json()).body,
          delete: (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
            client.fetch<Methods3['delete']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'DELETE', option).json(),
          $delete: async (option: { body: Methods3['delete']['reqBody'], query: Methods3['delete']['query'], config?: T }) =>
            (await client.fetch<Methods3['delete']['resBody']>(prefix, `/${val0}/test-4/fuga aa/`, 'DELETE', option).json()).body
        },
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          client.fetch<void>(prefix, `/${val0}/test-4/`, 'GET', option).send(),
        $get: async (option: { query: Methods1['get']['query'], config?: T }) =>
          (await client.fetch<void>(prefix, `/${val0}/test-4/`, 'GET', option).send()).body,
        post: (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
          client.fetch<void>(prefix, `/${val0}/test-4/`, 'POST', option).send(),
        $post: async (option?: { body?: Methods1['post']['reqBody'], query?: Methods1['post']['query'], config?: T }) =>
          (await client.fetch<void>(prefix, `/${val0}/test-4/`, 'POST', option).send()).body,
        put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
          client.fetch<Methods1['put']['resBody']>(prefix, `/${val0}/test-4/`, 'PUT', option).json(),
        $put: async (option?: { query?: Methods1['put']['query'], config?: T }) =>
          (await client.fetch<Methods1['put']['resBody']>(prefix, `/${val0}/test-4/`, 'PUT', option).json()).body,
        delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
          client.fetch<Methods1['delete']['resBody']>(prefix, `/${val0}/test-4/`, 'DELETE', option).json(),
        $delete: async (option: { query: Methods1['delete']['query'], config?: T }) =>
          (await client.fetch<Methods1['delete']['resBody']>(prefix, `/${val0}/test-4/`, 'DELETE', option).json()).body
      }
    }),
    _hogeId_1: (val2: number) => ({
      get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        client.fetch<Methods4['get']['resBody']>(prefix, `/${val2}/`, 'GET', option).json(),
      $get: async (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        (await client.fetch<Methods4['get']['resBody']>(prefix, `/${val2}/`, 'GET', option).json()).body
    })
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
