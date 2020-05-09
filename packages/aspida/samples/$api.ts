/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from './@types'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './_sampleId.json@number'
import { Methods as Methods2 } from './v1.1'
import { Methods as Methods3 } from './v1.1/2/_hogeId@HogeId/entries.json'
import { Methods as Methods4 } from './v1.1/2/_hogeId@HogeId/test-4/index'
import { Methods as Methods5 } from './v1.1/2/_hogeId@HogeId/test-4/_fugaId'
import { Methods as Methods6 } from './v1.1/2/_hogeId@HogeId/test-4/fuga aa'
import { Methods as Methods7 } from './v1.1/2/_hogeId@number'
import { Methods as Methods8 } from './v1.1/3.1'
import { Methods as Methods9 } from './v1.1/_articleId.json'
import { Methods as Methods10 } from './v1.1/users/_userId@User[\'id\']'
import { Methods as Methods11 } from './v2.0/index'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://example.com/api/' : client.baseURL).replace(/\/$/, '')

  return {
    _sampleId_json: (val0: number) => ({
      get: (option?: { config?: T }) =>
        client.fetch<Methods1['get']['resBody']>(prefix, `/${val0}.json`, 'GET', option).json(),
      $get: async (option?: { config?: T }) =>
        (await client.fetch<Methods1['get']['resBody']>(prefix, `/${val0}.json`, 'GET', option).json()).data
    }),
    v1_1: {
      $2: {
        _hogeId_0: (val1: ApiTypes.HogeId) => ({
          entries_json: {
            get: (option?: { config?: T }) =>
              client.fetch<Methods3['get']['resBody']>(prefix, `/v1.1/2/${val1}/entries.json`, 'GET', option).json(),
            $get: async (option?: { config?: T }) =>
              (await client.fetch<Methods3['get']['resBody']>(prefix, `/v1.1/2/${val1}/entries.json`, 'GET', option).json()).data
          },
          test_4: {
            _fugaId: (val2: number | string) => ({
              get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
                client.fetch<Methods5['get']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'GET', option).json(),
              $get: async (option?: { query?: Methods5['get']['query'], config?: T }) =>
                (await client.fetch<Methods5['get']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'GET', option).json()).data,
              post: (option: { data?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                client.fetch<Methods5['post']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'POST', option).json(),
              $post: async (option: { data?: Methods5['post']['reqBody'], query: Methods5['post']['query'], config?: T }) =>
                (await client.fetch<Methods5['post']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'POST', option).json()).data,
              put: (option: { query: Methods5['put']['query'], config?: T }) =>
                client.fetch<Methods5['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'PUT', option).json(),
              $put: async (option: { query: Methods5['put']['query'], config?: T }) =>
                (await client.fetch<Methods5['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'PUT', option).json()).data,
              delete: (option: { query: Methods5['delete']['query'], config?: T }) =>
                client.fetch<Methods5['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'DELETE', option).json(),
              $delete: async (option: { query: Methods5['delete']['query'], config?: T }) =>
                (await client.fetch<Methods5['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/${val2}`, 'DELETE', option).json()).data
            }),
            fuga_aa: {
              get: (option: { query: Methods6['get']['query'], config?: T }) =>
                client.fetch<Methods6['get']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'GET', option).json(),
              $get: async (option: { query: Methods6['get']['query'], config?: T }) =>
                (await client.fetch<Methods6['get']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'GET', option).json()).data,
              post: (option: { data?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                client.fetch<Methods6['post']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'POST', option).json(),
              $post: async (option: { data?: Methods6['post']['reqBody'], query: Methods6['post']['query'], config?: T }) =>
                (await client.fetch<Methods6['post']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'POST', option).json()).data,
              put: (option: { query: Methods6['put']['query'], config?: T }) =>
                client.fetch<Methods6['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'PUT', option).json(),
              $put: async (option: { query: Methods6['put']['query'], config?: T }) =>
                (await client.fetch<Methods6['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'PUT', option).json()).data,
              delete: (option: { data: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                client.fetch<Methods6['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'DELETE', option).json(),
              $delete: async (option: { data: Methods6['delete']['reqBody'], query: Methods6['delete']['query'], config?: T }) =>
                (await client.fetch<Methods6['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4/fuga aa`, 'DELETE', option).json()).data
            },
            get: (option: { query: Methods4['get']['query'], config?: T }) =>
              client.fetch<void>(prefix, `/v1.1/2/${val1}/test-4`, 'GET', option).send(),
            $get: async (option: { query: Methods4['get']['query'], config?: T }) =>
              (await client.fetch<void>(prefix, `/v1.1/2/${val1}/test-4`, 'GET', option).send()).data,
            post: (option?: { data?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
              client.fetch<void>(prefix, `/v1.1/2/${val1}/test-4`, 'POST', option).send(),
            $post: async (option?: { data?: Methods4['post']['reqBody'], query?: Methods4['post']['query'], config?: T }) =>
              (await client.fetch<void>(prefix, `/v1.1/2/${val1}/test-4`, 'POST', option).send()).data,
            put: (option?: { query?: Methods4['put']['query'], config?: T }) =>
              client.fetch<Methods4['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4`, 'PUT', option).json(),
            $put: async (option?: { query?: Methods4['put']['query'], config?: T }) =>
              (await client.fetch<Methods4['put']['resBody']>(prefix, `/v1.1/2/${val1}/test-4`, 'PUT', option).json()).data,
            delete: (option: { query: Methods4['delete']['query'], config?: T }) =>
              client.fetch<Methods4['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4`, 'DELETE', option).json(),
            $delete: async (option: { query: Methods4['delete']['query'], config?: T }) =>
              (await client.fetch<Methods4['delete']['resBody']>(prefix, `/v1.1/2/${val1}/test-4`, 'DELETE', option).json()).data
          }
        }),
        _hogeId_1: (val3: number) => ({
          get: (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods7['get']['resBody']>(prefix, `/v1.1/2/${val3}`, 'GET', option).json(),
          $get: async (option: { query?: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods7['get']['resBody']>(prefix, `/v1.1/2/${val3}`, 'GET', option).json()).data
        })
      },
      $3_1: {
        get: (option: { query?: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          client.fetch<Methods8['get']['resBody']>(prefix, '/v1.1/3.1', 'GET', option).json(),
        $get: async (option: { query?: Methods8['get']['query'], headers: Methods8['get']['reqHeaders'], config?: T }) =>
          (await client.fetch<Methods8['get']['resBody']>(prefix, '/v1.1/3.1', 'GET', option).json()).data,
        post: (option: { data?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
          client.fetch<Methods8['post']['resBody']>(prefix, '/v1.1/3.1', 'POST', option, 'URLSearchParams').json(),
        $post: async (option: { data?: Methods8['post']['reqBody'], query: Methods8['post']['query'], config?: T }) =>
          (await client.fetch<Methods8['post']['resBody']>(prefix, '/v1.1/3.1', 'POST', option, 'URLSearchParams').json()).data
      },
      _articleId_json: (val4: number | string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods9['get']['resBody']>(prefix, `/v1.1/${val4}.json`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods9['get']['resBody']>(prefix, `/v1.1/${val4}.json`, 'GET', option).json()).data
      }),
      users: {
        _userId: (val5: ApiTypes.User['id']) => ({
          get: (option: { query: Methods10['get']['query'], headers: Methods10['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods10['get']['resBody']>(prefix, `/v1.1/users/${val5}`, 'GET', option).json(),
          $get: async (option: { query: Methods10['get']['query'], headers: Methods10['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods10['get']['resBody']>(prefix, `/v1.1/users/${val5}`, 'GET', option).json()).data,
          post: (option: { query: Methods10['post']['query'], config?: T }) =>
            client.fetch<Methods10['post']['resBody']>(prefix, `/v1.1/users/${val5}`, 'POST', option).json(),
          $post: async (option: { query: Methods10['post']['query'], config?: T }) =>
            (await client.fetch<Methods10['post']['resBody']>(prefix, `/v1.1/users/${val5}`, 'POST', option).json()).data
        })
      },
      get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
        client.fetch<Methods2['get']['resBody']>(prefix, '/v1.1', 'GET', option).json(),
      $get: async (option?: { query?: Methods2['get']['query'], config?: T }) =>
        (await client.fetch<Methods2['get']['resBody']>(prefix, '/v1.1', 'GET', option).json()).data
    },
    v2_0: {
      get: (option: { data: Methods11['get']['reqBody'], query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
        client.fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders']>(prefix, '/v2.0', 'GET', option, 'FormData').json(),
      $get: async (option: { data: Methods11['get']['reqBody'], query: Methods11['get']['query'], headers: Methods11['get']['reqHeaders'], config?: T }) =>
        (await client.fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders']>(prefix, '/v2.0', 'GET', option, 'FormData').json()).data
    },
    get: (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      client.fetch<Methods0['get']['resBody']>(prefix, '', 'GET', option).formData(),
    $get: async (option?: { query?: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'], config?: T }) =>
      (await client.fetch<Methods0['get']['resBody']>(prefix, '', 'GET', option).formData()).data,
    post: (option: { data: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      client.fetch<Methods0['post']['resBody']>(prefix, '', 'POST', option).arrayBuffer(),
    $post: async (option: { data: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'], config?: T }) =>
      (await client.fetch<Methods0['post']['resBody']>(prefix, '', 'POST', option).arrayBuffer()).data,
    put: (option: { query: Methods0['put']['query'], config?: T }) =>
      client.fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders']>(prefix, '', 'PUT', option).json(),
    $put: async (option: { query: Methods0['put']['query'], config?: T }) =>
      (await client.fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders']>(prefix, '', 'PUT', option).json()).data,
    delete: (option: { query: Methods0['delete']['query'], config?: T }) =>
      client.fetch<void, Methods0['delete']['resHeaders']>(prefix, '', 'DELETE', option).send(),
    $delete: async (option: { query: Methods0['delete']['query'], config?: T }) =>
      (await client.fetch<void, Methods0['delete']['resHeaders']>(prefix, '', 'DELETE', option).send()).data
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
