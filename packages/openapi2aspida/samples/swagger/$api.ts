/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './pet/index'
import { Methods as Methods1 } from './pet/_petId/index'
import { Methods as Methods2 } from './pet/_petId/uploadImage'
import { Methods as Methods3 } from './pet/findByStatus'
import { Methods as Methods4 } from './pet/findByTags'
import { Methods as Methods5 } from './store/inventory'
import { Methods as Methods6 } from './store/order/index'
import { Methods as Methods7 } from './store/order/_orderId'
import { Methods as Methods8 } from './user/index'
import { Methods as Methods9 } from './user/_username'
import { Methods as Methods10 } from './user/createWithArray'
import { Methods as Methods11 } from './user/createWithList'
import { Methods as Methods12 } from './user/login'
import { Methods as Methods13 } from './user/logout'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://petstore.swagger.io/v2' : client.baseURL).replace(/\/$/, '')

  return {
    pet: {
      _petId: (val0: number | string) => ({
        uploadImage: {
          post: (option?: { data?: Methods2['post']['reqData'], config?: T }) =>
            client.fetch<Methods2['post']['resData']>(prefix, `/pet/${val0}/uploadImage`, 'POST', option, 'FormData').json(),
          $post: async (option?: { data?: Methods2['post']['reqData'], config?: T }) =>
            (await client.fetch<Methods2['post']['resData']>(prefix, `/pet/${val0}/uploadImage`, 'POST', option, 'FormData').json()).data
        },
        get: (option?: { config?: T }) =>
          client.fetch<Methods1['get']['resData']>(prefix, `/pet/${val0}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods1['get']['resData']>(prefix, `/pet/${val0}`, 'GET', option).json()).data,
        post: (option?: { data?: Methods1['post']['reqData'], config?: T }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option, 'URLSearchParams').send(),
        $post: async (option?: { data?: Methods1['post']['reqData'], config?: T }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option, 'URLSearchParams').send()).data,
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send(),
        $delete: async (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send()).data
      }),
      findByStatus: {
        get: (option: { query: Methods3['get']['query'], config?: T }) =>
          client.fetch<Methods3['get']['resData']>(prefix, '/pet/findByStatus', 'GET', option).json(),
        $get: async (option: { query: Methods3['get']['query'], config?: T }) =>
          (await client.fetch<Methods3['get']['resData']>(prefix, '/pet/findByStatus', 'GET', option).json()).data
      },
      findByTags: {
        get: (option: { query: Methods4['get']['query'], config?: T }) =>
          client.fetch<Methods4['get']['resData']>(prefix, '/pet/findByTags', 'GET', option).json(),
        $get: async (option: { query: Methods4['get']['query'], config?: T }) =>
          (await client.fetch<Methods4['get']['resData']>(prefix, '/pet/findByTags', 'GET', option).json()).data
      },
      post: (option: { data: Methods0['post']['reqData'], config?: T }) =>
        client.fetch<void>(prefix, '/pet', 'POST', option).send(),
      $post: async (option: { data: Methods0['post']['reqData'], config?: T }) =>
        (await client.fetch<void>(prefix, '/pet', 'POST', option).send()).data,
      put: (option: { data: Methods0['put']['reqData'], config?: T }) =>
        client.fetch<void>(prefix, '/pet', 'PUT', option).send(),
      $put: async (option: { data: Methods0['put']['reqData'], config?: T }) =>
        (await client.fetch<void>(prefix, '/pet', 'PUT', option).send()).data
    },
    store: {
      inventory: {
        get: (option?: { config?: T }) =>
          client.fetch<void>(prefix, '/store/inventory', 'GET', option).send(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, '/store/inventory', 'GET', option).send()).data
      },
      order: {
        _orderId: (val1: number | string) => ({
          get: (option?: { config?: T }) =>
            client.fetch<Methods7['get']['resData']>(prefix, `/store/order/${val1}`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods7['get']['resData']>(prefix, `/store/order/${val1}`, 'GET', option).json()).data,
          delete: (option?: { config?: T }) =>
            client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send(),
          $delete: async (option?: { config?: T }) =>
            (await client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send()).data
        }),
        post: (option: { data: Methods6['post']['reqData'], config?: T }) =>
          client.fetch<Methods6['post']['resData']>(prefix, '/store/order', 'POST', option).json(),
        $post: async (option: { data: Methods6['post']['reqData'], config?: T }) =>
          (await client.fetch<Methods6['post']['resData']>(prefix, '/store/order', 'POST', option).json()).data
      }
    },
    user: {
      _username: (val2: number | string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods9['get']['resData']>(prefix, `/user/${val2}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods9['get']['resData']>(prefix, `/user/${val2}`, 'GET', option).json()).data,
        put: (option: { data: Methods9['put']['reqData'], config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send(),
        $put: async (option: { data: Methods9['put']['reqData'], config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send()).data,
        delete: (option?: { config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send()).data
      }),
      createWithArray: {
        post: (option: { data: Methods10['post']['reqData'], config?: T }) =>
          client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send(),
        $post: async (option: { data: Methods10['post']['reqData'], config?: T }) =>
          (await client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send()).data
      },
      createWithList: {
        post: (option: { data: Methods11['post']['reqData'], config?: T }) =>
          client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send(),
        $post: async (option: { data: Methods11['post']['reqData'], config?: T }) =>
          (await client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send()).data
      },
      login: {
        get: (option: { query: Methods12['get']['query'], config?: T }) =>
          client.fetch<Methods12['get']['resData'], Methods12['get']['resHeaders']>(prefix, '/user/login', 'GET', option).text(),
        $get: async (option: { query: Methods12['get']['query'], config?: T }) =>
          (await client.fetch<Methods12['get']['resData'], Methods12['get']['resHeaders']>(prefix, '/user/login', 'GET', option).text()).data
      },
      logout: {
        get: (option?: { config?: T }) =>
          client.fetch<void>(prefix, '/user/logout', 'GET', option).send(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, '/user/logout', 'GET', option).send()).data
      },
      post: (option: { data: Methods8['post']['reqData'], config?: T }) =>
        client.fetch<void>(prefix, '/user', 'POST', option).send(),
      $post: async (option: { data: Methods8['post']['reqData'], config?: T }) =>
        (await client.fetch<void>(prefix, '/user', 'POST', option).send()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
