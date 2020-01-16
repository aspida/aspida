/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from './@types'
import { Methods as Methods0 } from './pet/index'
import { Methods as Methods1 } from './pet/_petId@number/index'
import { Methods as Methods2 } from './pet/_petId@number/uploadImage'
import { Methods as Methods3 } from './pet/findByStatus'
import { Methods as Methods4 } from './pet/findByTags'
import { Methods as Methods5 } from './store/inventory'
import { Methods as Methods6 } from './store/order/index'
import { Methods as Methods7 } from './store/order/_orderId@number'
import { Methods as Methods8 } from './user/index'
import { Methods as Methods9 } from './user/_username@string'
import { Methods as Methods10 } from './user/createWithArray'
import { Methods as Methods11 } from './user/createWithList'
import { Methods as Methods12 } from './user/login'
import { Methods as Methods13 } from './user/logout'

const api = <U>(client: AspidaClient<U>) => {
  const prefix = (client.baseURL === undefined ? 'https://petstore.swagger.io/v2' : client.baseURL).replace(/\/$/, '')

  return {
    pet: {
      _petId: (val0: number) => ({
        uploadImage: {
          post: (option?: { config?: U }) =>
            client.fetch<void>(prefix, `/pet/${val0}/uploadImage`, 'POST', option).send(),
          $post: async (option?: { config?: U }) =>
            (await client.fetch<void>(prefix, `/pet/${val0}/uploadImage`, 'POST', option).send()).data
        },
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'GET', option).send()).data,
        post: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option).send(),
        $post: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'POST', option).send()).data,
        delete: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/pet/${val0}`, 'DELETE', option).send()).data
      }),
      findByStatus: {
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/pet/findByStatus', 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/pet/findByStatus', 'GET', option).send()).data
      },
      findByTags: {
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/pet/findByTags', 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/pet/findByTags', 'GET', option).send()).data
      },
      post: (option?: { config?: U }) =>
        client.fetch<void>(prefix, '/pet', 'POST', option).send(),
      $post: async (option?: { config?: U }) =>
        (await client.fetch<void>(prefix, '/pet', 'POST', option).send()).data,
      put: (option?: { config?: U }) =>
        client.fetch<void>(prefix, '/pet', 'PUT', option).send(),
      $put: async (option?: { config?: U }) =>
        (await client.fetch<void>(prefix, '/pet', 'PUT', option).send()).data
    },
    store: {
      inventory: {
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/store/inventory', 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/store/inventory', 'GET', option).send()).data
      },
      order: {
        _orderId: (val1: number) => ({
          get: (option?: { config?: U }) =>
            client.fetch<void>(prefix, `/store/order/${val1}`, 'GET', option).send(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<void>(prefix, `/store/order/${val1}`, 'GET', option).send()).data,
          delete: (option?: { config?: U }) =>
            client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send(),
          $delete: async (option?: { config?: U }) =>
            (await client.fetch<void>(prefix, `/store/order/${val1}`, 'DELETE', option).send()).data
        }),
        post: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/store/order', 'POST', option).send(),
        $post: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/store/order', 'POST', option).send()).data
      }
    },
    user: {
      _username: (val2: string) => ({
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'GET', option).send()).data,
        put: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send(),
        $put: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'PUT', option).send()).data,
        delete: (option?: { config?: U }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send()).data
      }),
      createWithArray: {
        post: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send(),
        $post: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/user/createWithArray', 'POST', option).send()).data
      },
      createWithList: {
        post: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send(),
        $post: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/user/createWithList', 'POST', option).send()).data
      },
      login: {
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/user/login', 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/user/login', 'GET', option).send()).data
      },
      logout: {
        get: (option?: { config?: U }) =>
          client.fetch<void>(prefix, '/user/logout', 'GET', option).send(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<void>(prefix, '/user/logout', 'GET', option).send()).data
      },
      post: (option?: { config?: U }) =>
        client.fetch<void>(prefix, '/user', 'POST', option).send(),
      $post: async (option?: { config?: U }) =>
        (await client.fetch<void>(prefix, '/user', 'POST', option).send()).data
    }
  }
}

export { ApiTypes }
export type ApiInstance = ReturnType<typeof api>
export default api
