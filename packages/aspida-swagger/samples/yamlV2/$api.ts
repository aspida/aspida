/* eslint-disable */
import { AspidaClient, optionToRequest } from 'aspida'
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

const api = (client: AspidaClient, baseURL?: string) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')

  return {
    pet: {
      _petId: (val0: number) => ({
        uploadImage: {
          post: () =>
            client.fetch<void>(`${prefix}/pet/${val0}/uploadImage`, 'POST').send(),
          $post: async () =>
            (await client.fetch<void>(`${prefix}/pet/${val0}/uploadImage`, 'POST').send()).data
        },
        get: () =>
          client.fetch<void>(`${prefix}/pet/${val0}`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/pet/${val0}`, 'GET').send()).data,
        post: () =>
          client.fetch<void>(`${prefix}/pet/${val0}`, 'POST').send(),
        $post: async () =>
          (await client.fetch<void>(`${prefix}/pet/${val0}`, 'POST').send()).data,
        delete: () =>
          client.fetch<void>(`${prefix}/pet/${val0}`, 'DELETE').send(),
        $delete: async () =>
          (await client.fetch<void>(`${prefix}/pet/${val0}`, 'DELETE').send()).data
      }),
      findByStatus: {
        get: () =>
          client.fetch<void>(`${prefix}/pet/findByStatus`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/pet/findByStatus`, 'GET').send()).data
      },
      findByTags: {
        get: () =>
          client.fetch<void>(`${prefix}/pet/findByTags`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/pet/findByTags`, 'GET').send()).data
      },
      post: () =>
        client.fetch<void>(`${prefix}/pet`, 'POST').send(),
      $post: async () =>
        (await client.fetch<void>(`${prefix}/pet`, 'POST').send()).data,
      put: () =>
        client.fetch<void>(`${prefix}/pet`, 'PUT').send(),
      $put: async () =>
        (await client.fetch<void>(`${prefix}/pet`, 'PUT').send()).data
    },
    store: {
      inventory: {
        get: () =>
          client.fetch<void>(`${prefix}/store/inventory`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/store/inventory`, 'GET').send()).data
      },
      order: {
        _orderId: (val1: number) => ({
          get: () =>
            client.fetch<void>(`${prefix}/store/order/${val1}`, 'GET').send(),
          $get: async () =>
            (await client.fetch<void>(`${prefix}/store/order/${val1}`, 'GET').send()).data,
          delete: () =>
            client.fetch<void>(`${prefix}/store/order/${val1}`, 'DELETE').send(),
          $delete: async () =>
            (await client.fetch<void>(`${prefix}/store/order/${val1}`, 'DELETE').send()).data
        }),
        post: () =>
          client.fetch<void>(`${prefix}/store/order`, 'POST').send(),
        $post: async () =>
          (await client.fetch<void>(`${prefix}/store/order`, 'POST').send()).data
      }
    },
    user: {
      _username: (val2: string) => ({
        get: () =>
          client.fetch<void>(`${prefix}/user/${val2}`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/user/${val2}`, 'GET').send()).data,
        put: () =>
          client.fetch<void>(`${prefix}/user/${val2}`, 'PUT').send(),
        $put: async () =>
          (await client.fetch<void>(`${prefix}/user/${val2}`, 'PUT').send()).data,
        delete: () =>
          client.fetch<void>(`${prefix}/user/${val2}`, 'DELETE').send(),
        $delete: async () =>
          (await client.fetch<void>(`${prefix}/user/${val2}`, 'DELETE').send()).data
      }),
      createWithArray: {
        post: () =>
          client.fetch<void>(`${prefix}/user/createWithArray`, 'POST').send(),
        $post: async () =>
          (await client.fetch<void>(`${prefix}/user/createWithArray`, 'POST').send()).data
      },
      createWithList: {
        post: () =>
          client.fetch<void>(`${prefix}/user/createWithList`, 'POST').send(),
        $post: async () =>
          (await client.fetch<void>(`${prefix}/user/createWithList`, 'POST').send()).data
      },
      login: {
        get: () =>
          client.fetch<void>(`${prefix}/user/login`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/user/login`, 'GET').send()).data
      },
      logout: {
        get: () =>
          client.fetch<void>(`${prefix}/user/logout`, 'GET').send(),
        $get: async () =>
          (await client.fetch<void>(`${prefix}/user/logout`, 'GET').send()).data
      },
      post: () =>
        client.fetch<void>(`${prefix}/user`, 'POST').send(),
      $post: async () =>
        (await client.fetch<void>(`${prefix}/user`, 'POST').send()).data
    }
  }
}

export { ApiTypes }
export type ApiInstance = ReturnType<typeof api>
export default api
