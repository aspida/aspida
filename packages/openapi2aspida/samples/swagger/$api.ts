/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './pet/index'
import { Methods as Methods1 } from './pet/_petId@number/index'
import { Methods as Methods2 } from './pet/_petId@number/uploadImage'
import { Methods as Methods3 } from './pet/findByStatus'
import { Methods as Methods4 } from './store/inventory'
import { Methods as Methods5 } from './store/order/index'
import { Methods as Methods6 } from './store/order/_orderId@number'
import { Methods as Methods7 } from './user/index'
import { Methods as Methods8 } from './user/_username@string'
import { Methods as Methods9 } from './user/createWithArray'
import { Methods as Methods10 } from './user/createWithList'
import { Methods as Methods11 } from './user/login'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'https://petstore.swagger.io/v2' : client.baseURL).replace(/\/$/, '')

  return {
    pet: {
      _petId: (val0: number) => ({
        uploadImage: {
          post: (option?: { data?: Methods2['post']['reqBody'], config?: T }) =>
            client.fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `/pet/${val0}/uploadImage`, 'POST', option, 'FormData').json(),
          $post: async (option?: { data?: Methods2['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `/pet/${val0}/uploadImage`, 'POST', option, 'FormData').json()).data
        },
        get: (option?: { config?: T }) =>
          client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `/pet/${val0}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, `/pet/${val0}`, 'GET', option).json()).data,
        post: (option?: { data?: Methods1['post']['reqBody'], config?: T }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option, 'URLSearchParams').send(),
        $post: async (option?: { data?: Methods1['post']['reqBody'], config?: T }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option, 'URLSearchParams').send()).data,
        delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send(),
        $delete: async (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send()).data
      }),
      findByStatus: {
        get: (option: { query: Methods3['get']['query'], config?: T }) =>
          client.fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, '/pet/findByStatus', 'GET', option).json(),
        $get: async (option: { query: Methods3['get']['query'], config?: T }) =>
          (await client.fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, '/pet/findByStatus', 'GET', option).json()).data
      },
      post: (option: { data: Methods0['post']['reqBody'], config?: T }) =>
        client.fetch<void>(prefix, '/pet', 'POST', option).send(),
      $post: async (option: { data: Methods0['post']['reqBody'], config?: T }) =>
        (await client.fetch<void>(prefix, '/pet', 'POST', option).send()).data,
      put: (option: { data: Methods0['put']['reqBody'], config?: T }) =>
        client.fetch<void>(prefix, '/pet', 'PUT', option).send(),
      $put: async (option: { data: Methods0['put']['reqBody'], config?: T }) =>
        (await client.fetch<void>(prefix, '/pet', 'PUT', option).send()).data
    },
    store: {
      inventory: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, '/store/inventory', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, '/store/inventory', 'GET', option).json()).data
      },
      order: {
        _orderId: (val1: number) => ({
          get: (option?: { config?: T }) =>
            client.fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `/store/order/${val1}`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, `/store/order/${val1}`, 'GET', option).json()).data,
          delete: (option?: { config?: T }) =>
            client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send(),
          $delete: async (option?: { config?: T }) =>
            (await client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send()).data
        }),
        post: (option: { data: Methods5['post']['reqBody'], config?: T }) =>
          client.fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, '/store/order', 'POST', option).json(),
        $post: async (option: { data: Methods5['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, '/store/order', 'POST', option).json()).data
      }
    },
    user: {
      _username: (val2: string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `/user/${val2}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, `/user/${val2}`, 'GET', option).json()).data,
        put: (option: { data: Methods8['put']['reqBody'], config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send(),
        $put: async (option: { data: Methods8['put']['reqBody'], config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send()).data,
        delete: (option?: { config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send()).data
      }),
      createWithArray: {
        post: (option: { data: Methods9['post']['reqBody'], config?: T }) =>
          client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send(),
        $post: async (option: { data: Methods9['post']['reqBody'], config?: T }) =>
          (await client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send()).data
      },
      createWithList: {
        post: (option: { data: Methods10['post']['reqBody'], config?: T }) =>
          client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send(),
        $post: async (option: { data: Methods10['post']['reqBody'], config?: T }) =>
          (await client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send()).data
      },
      login: {
        get: (option: { query: Methods11['get']['query'], config?: T }) =>
          client.fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, '/user/login', 'GET', option).text(),
        $get: async (option: { query: Methods11['get']['query'], config?: T }) =>
          (await client.fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, '/user/login', 'GET', option).text()).data
      },
      logout: {
        get: (option?: { config?: T }) =>
          client.fetch<void>(prefix, '/user/logout', 'GET', option).send(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, '/user/logout', 'GET', option).send()).data
      },
      post: (option: { data: Methods7['post']['reqBody'], config?: T }) =>
        client.fetch<void>(prefix, '/user', 'POST', option).send(),
      $post: async (option: { data: Methods7['post']['reqBody'], config?: T }) =>
        (await client.fetch<void>(prefix, '/user', 'POST', option).send()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
