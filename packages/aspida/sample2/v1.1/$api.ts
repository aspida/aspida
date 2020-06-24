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

const api = <T>(client: AspidaClient<T>) => {
  const prefix = `${(client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')}/v1.1`

  return {
    $2: {
      _hogeId_0: (val0: ApiTypes.HogeId) => ({
        entries_json: {
          get: (option?: { config?: T }) =>
            client.fetch<Methods1['get']['resBody']>(prefix, `/2/${val0}/entries.json/`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods1['get']['resBody']>(prefix, `/2/${val0}/entries.json/`, 'GET', option).json()).body
        },
        test_4: {
          _fugaId: (val1: number | string) => ({
            get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
              client.fetch<Methods3['get']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'GET', option).json(),
            $get: async (option?: { query?: Methods3['get']['query'], config?: T }) =>
              (await client.fetch<Methods3['get']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'GET', option).json()).body,
            post: (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              client.fetch<Methods3['post']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'POST', option).json(),
            $post: async (option: { body?: Methods3['post']['reqBody'], query: Methods3['post']['query'], config?: T }) =>
              (await client.fetch<Methods3['post']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'POST', option).json()).body,
            put: (option: { query: Methods3['put']['query'], config?: T }) =>
              client.fetch<Methods3['put']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'PUT', option).json(),
            $put: async (option: { query: Methods3['put']['query'], config?: T }) =>
              (await client.fetch<Methods3['put']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'PUT', option).json()).body,
            delete: (option: { query: Methods3['delete']['query'], config?: T }) =>
              client.fetch<Methods3['delete']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'DELETE', option).json(),
            $delete: async (option: { query: Methods3['delete']['query'], config?: T }) =>
              (await client.fetch<Methods3['delete']['resBody']>(prefix, `/2/${val0}/test-4/${val1}/`, 'DELETE', option).json()).body
          }),
          fuga_aa: {
            get: (option: { query: Methods4['get']['query'], config?: T }) =>
              client.fetch<Methods4['get']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'GET', option).json(),
            $get: async (option: { query: Methods4['get']['query'], config?: T }) =>
              (await client.fetch<Methods4['get']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'GET', option).json()).body,
            post: (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: T }) =>
              client.fetch<Methods4['post']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'POST', option).json(),
            $post: async (option: { body?: Methods4['post']['reqBody'], query: Methods4['post']['query'], config?: T }) =>
              (await client.fetch<Methods4['post']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'POST', option).json()).body,
            put: (option: { query: Methods4['put']['query'], config?: T }) =>
              client.fetch<Methods4['put']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'PUT', option).json(),
            $put: async (option: { query: Methods4['put']['query'], config?: T }) =>
              (await client.fetch<Methods4['put']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'PUT', option).json()).body,
            delete: (option: { body: Methods4['delete']['reqBody'], query: Methods4['delete']['query'], config?: T }) =>
              client.fetch<Methods4['delete']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'DELETE', option).json(),
            $delete: async (option: { body: Methods4['delete']['reqBody'], query: Methods4['delete']['query'], config?: T }) =>
              (await client.fetch<Methods4['delete']['resBody']>(prefix, `/2/${val0}/test-4/fuga aa/`, 'DELETE', option).json()).body
          },
          get: (option: { query: Methods2['get']['query'], config?: T }) =>
            client.fetch<void>(prefix, `/2/${val0}/test-4/`, 'GET', option).send(),
          $get: async (option: { query: Methods2['get']['query'], config?: T }) =>
            (await client.fetch<void>(prefix, `/2/${val0}/test-4/`, 'GET', option).send()).body,
          post: (option?: { body?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            client.fetch<void>(prefix, `/2/${val0}/test-4/`, 'POST', option).send(),
          $post: async (option?: { body?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            (await client.fetch<void>(prefix, `/2/${val0}/test-4/`, 'POST', option).send()).body,
          put: (option?: { query?: Methods2['put']['query'], config?: T }) =>
            client.fetch<Methods2['put']['resBody']>(prefix, `/2/${val0}/test-4/`, 'PUT', option).json(),
          $put: async (option?: { query?: Methods2['put']['query'], config?: T }) =>
            (await client.fetch<Methods2['put']['resBody']>(prefix, `/2/${val0}/test-4/`, 'PUT', option).json()).body,
          delete: (option: { query: Methods2['delete']['query'], config?: T }) =>
            client.fetch<Methods2['delete']['resBody']>(prefix, `/2/${val0}/test-4/`, 'DELETE', option).json(),
          $delete: async (option: { query: Methods2['delete']['query'], config?: T }) =>
            (await client.fetch<Methods2['delete']['resBody']>(prefix, `/2/${val0}/test-4/`, 'DELETE', option).json()).body
        }
      }),
      _hogeId_1: (val2: number) => ({
        get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
          client.fetch<Methods5['get']['resBody']>(prefix, `/2/${val2}/`, 'GET', option).json(),
        $get: async (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
          (await client.fetch<Methods5['get']['resBody']>(prefix, `/2/${val2}/`, 'GET', option).json()).body
      })
    },
    $3_1: {
      get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        client.fetch<Methods6['get']['resBody']>(prefix, '/3.1/', 'GET', option).json(),
      $get: async (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        (await client.fetch<Methods6['get']['resBody']>(prefix, '/3.1/', 'GET', option).json()).body,
      post: (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
        client.fetch<Methods6['post']['resBody']>(prefix, '/3.1/', 'POST', option, 'URLSearchParams').json(),
      $post: async (option: { body?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
        (await client.fetch<Methods6['post']['resBody']>(prefix, '/3.1/', 'POST', option, 'URLSearchParams').json()).body
    },
    _articleId_json: (val3: number | string) => ({
      get: (option?: { config?: T }) =>
        client.fetch<Methods7['get']['resBody']>(prefix, `/${val3}.json/`, 'GET', option).json(),
      $get: async (option?: { config?: T }) =>
        (await client.fetch<Methods7['get']['resBody']>(prefix, `/${val3}.json/`, 'GET', option).json()).body
    }),
    users: {
      _userId: (val4: ApiTypes.User['id']) => ({
        get: (option: { query: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          client.fetch<Methods8['get']['resBody']>(prefix, `/users/${val4}/`, 'GET', option).json(),
        $get: async (option: { query: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          (await client.fetch<Methods8['get']['resBody']>(prefix, `/users/${val4}/`, 'GET', option).json()).body,
        post: (option: { query: Methods8['post']['query'], config?: T }) =>
          client.fetch<Methods8['post']['resBody']>(prefix, `/users/${val4}/`, 'POST', option).json(),
        $post: async (option: { query: Methods8['post']['query'], config?: T }) =>
          (await client.fetch<Methods8['post']['resBody']>(prefix, `/users/${val4}/`, 'POST', option).json()).body
      })
    },
    get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
      client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '/', 'GET', option).json(),
    $get: async (option?: { query?: Methods0['get']['query'], config?: T }) =>
      (await client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '/', 'GET', option).json()).body
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
