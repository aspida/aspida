/* eslint-disable */
import { AspidaClient } from 'aspida'
import * as ApiTypes from './@types'
import { Methods as Methods0 } from './auth/_provider/callback'
import { Methods as Methods1 } from './auth/email-confirmation'
import { Methods as Methods2 } from './auth/forgot-password'
import { Methods as Methods3 } from './auth/local/index'
import { Methods as Methods4 } from './auth/local/register'
import { Methods as Methods5 } from './auth/reset-password'
import { Methods as Methods6 } from './auth/send-email-confirmation'
import { Methods as Methods7 } from './connect/_any/index'
import { Methods as Methods8 } from './email'
import { Methods as Methods9 } from './upload'
import { Methods as Methods10 } from './upload/files/index'
import { Methods as Methods11 } from './upload/files/_id'
import { Methods as Methods12 } from './upload/files/count'
import { Methods as Methods13 } from './upload/search/_id'
import { Methods as Methods14 } from './users/index'
import { Methods as Methods15 } from './users/_id'
import { Methods as Methods16 } from './users/me'
import { Methods as Methods17 } from './users-permissions/init'
import { Methods as Methods18 } from './users-permissions/roles/index'
import { Methods as Methods19 } from './users-permissions/roles/_id'
import { Methods as Methods20 } from './users-permissions/roles/_role'
import { Methods as Methods21 } from './users-permissions/search/_id'

const api = <U>(client: AspidaClient<U>) => {
  const prefix = (client.baseURL === undefined ? 'http://localhost:1337' : client.baseURL).replace(/\/$/, '')

  return {
    auth: {
      _provider: (val0: number | string) => ({
        callback: {
          get: (option?: { config?: U }) =>
            client.fetch<Methods0['get']['resData']>(prefix, `/auth/${val0}/callback`, 'GET', option).json(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<Methods0['get']['resData']>(prefix, `/auth/${val0}/callback`, 'GET', option).json()).data
        }
      }),
      email_confirmation: {
        get: (option?: { config?: U }) =>
          client.fetch<Methods1['get']['resData']>(prefix, '/auth/email-confirmation', 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods1['get']['resData']>(prefix, '/auth/email-confirmation', 'GET', option).json()).data
      },
      forgot_password: {
        post: (option: { data: Methods2['post']['reqData'], config?: U }) =>
          client.fetch<Methods2['post']['resData']>(prefix, '/auth/forgot-password', 'POST', option).json(),
        $post: async (option: { data: Methods2['post']['reqData'], config?: U }) =>
          (await client.fetch<Methods2['post']['resData']>(prefix, '/auth/forgot-password', 'POST', option).json()).data
      },
      local: {
        register: {
          post: (option: { data: Methods4['post']['reqData'], config?: U }) =>
            client.fetch<Methods4['post']['resData']>(prefix, '/auth/local/register', 'POST', option).json(),
          $post: async (option: { data: Methods4['post']['reqData'], config?: U }) =>
            (await client.fetch<Methods4['post']['resData']>(prefix, '/auth/local/register', 'POST', option).json()).data
        },
        post: (option: { data: Methods3['post']['reqData'], config?: U }) =>
          client.fetch<Methods3['post']['resData']>(prefix, '/auth/local', 'POST', option).json(),
        $post: async (option: { data: Methods3['post']['reqData'], config?: U }) =>
          (await client.fetch<Methods3['post']['resData']>(prefix, '/auth/local', 'POST', option).json()).data
      },
      reset_password: {
        post: (option: { data: Methods5['post']['reqData'], config?: U }) =>
          client.fetch<Methods5['post']['resData']>(prefix, '/auth/reset-password', 'POST', option).json(),
        $post: async (option: { data: Methods5['post']['reqData'], config?: U }) =>
          (await client.fetch<Methods5['post']['resData']>(prefix, '/auth/reset-password', 'POST', option).json()).data
      },
      send_email_confirmation: {
        post: (option: { data: Methods6['post']['reqData'], config?: U }) =>
          client.fetch<Methods6['post']['resData']>(prefix, '/auth/send-email-confirmation', 'POST', option).json(),
        $post: async (option: { data: Methods6['post']['reqData'], config?: U }) =>
          (await client.fetch<Methods6['post']['resData']>(prefix, '/auth/send-email-confirmation', 'POST', option).json()).data
      }
    },
    connect: {
      _any: (val1: number | string) => ({
        get: (option?: { config?: U }) =>
          client.fetch<Methods7['get']['resData']>(prefix, `/connect/${val1}`, 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods7['get']['resData']>(prefix, `/connect/${val1}`, 'GET', option).json()).data
      })
    },
    email: {
      post: (option: { data: Methods8['post']['reqData'], config?: U }) =>
        client.fetch<Methods8['post']['resData']>(prefix, '/email', 'POST', option).json(),
      $post: async (option: { data: Methods8['post']['reqData'], config?: U }) =>
        (await client.fetch<Methods8['post']['resData']>(prefix, '/email', 'POST', option).json()).data
    },
    upload: {
      files: {
        _id: (val2: number | string) => ({
          get: (option?: { config?: U }) =>
            client.fetch<Methods11['get']['resData']>(prefix, `/upload/files/${val2}`, 'GET', option).json(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<Methods11['get']['resData']>(prefix, `/upload/files/${val2}`, 'GET', option).json()).data,
          delete: (option?: { config?: U }) =>
            client.fetch<Methods11['delete']['resData']>(prefix, `/upload/files/${val2}`, 'DELETE', option).json(),
          $delete: async (option?: { config?: U }) =>
            (await client.fetch<Methods11['delete']['resData']>(prefix, `/upload/files/${val2}`, 'DELETE', option).json()).data
        }),
        count: {
          get: (option?: { config?: U }) =>
            client.fetch<Methods12['get']['resData']>(prefix, '/upload/files/count', 'GET', option).json(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<Methods12['get']['resData']>(prefix, '/upload/files/count', 'GET', option).json()).data
        },
        get: (option?: { config?: U }) =>
          client.fetch<Methods10['get']['resData']>(prefix, '/upload/files', 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods10['get']['resData']>(prefix, '/upload/files', 'GET', option).json()).data
      },
      search: {
        _id: (val3: number | string) => ({
          get: (option?: { config?: U }) =>
            client.fetch<Methods13['get']['resData']>(prefix, `/upload/search/${val3}`, 'GET', option).json(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<Methods13['get']['resData']>(prefix, `/upload/search/${val3}`, 'GET', option).json()).data
        })
      },
      post: (option: { data: Methods9['post']['reqData'], config?: U }) =>
        client.fetch<Methods9['post']['resData']>(prefix, '/upload', 'POST', option).json(),
      $post: async (option: { data: Methods9['post']['reqData'], config?: U }) =>
        (await client.fetch<Methods9['post']['resData']>(prefix, '/upload', 'POST', option).json()).data
    },
    users: {
      _id: (val4: number | string) => ({
        get: (option?: { config?: U }) =>
          client.fetch<Methods15['get']['resData']>(prefix, `/users/${val4}`, 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods15['get']['resData']>(prefix, `/users/${val4}`, 'GET', option).json()).data,
        put: (option: { data: Methods15['put']['reqData'], config?: U }) =>
          client.fetch<Methods15['put']['resData']>(prefix, `/users/${val4}`, 'PUT', option).json(),
        $put: async (option: { data: Methods15['put']['reqData'], config?: U }) =>
          (await client.fetch<Methods15['put']['resData']>(prefix, `/users/${val4}`, 'PUT', option).json()).data,
        delete: (option?: { config?: U }) =>
          client.fetch<Methods15['delete']['resData']>(prefix, `/users/${val4}`, 'DELETE', option).json(),
        $delete: async (option?: { config?: U }) =>
          (await client.fetch<Methods15['delete']['resData']>(prefix, `/users/${val4}`, 'DELETE', option).json()).data
      }),
      me: {
        get: (option?: { config?: U }) =>
          client.fetch<Methods16['get']['resData']>(prefix, '/users/me', 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods16['get']['resData']>(prefix, '/users/me', 'GET', option).json()).data
      },
      get: (option: { query: Methods14['get']['query'], config?: U }) =>
        client.fetch<Methods14['get']['resData']>(prefix, '/users', 'GET', option).json(),
      $get: async (option: { query: Methods14['get']['query'], config?: U }) =>
        (await client.fetch<Methods14['get']['resData']>(prefix, '/users', 'GET', option).json()).data
    },
    users_permissions: {
      init: {
        get: (option?: { config?: U }) =>
          client.fetch<Methods17['get']['resData']>(prefix, '/users-permissions/init', 'GET', option).json(),
        $get: async (option?: { config?: U }) =>
          (await client.fetch<Methods17['get']['resData']>(prefix, '/users-permissions/init', 'GET', option).json()).data
      },
      roles: {
        _id: (val5: number | string) => ({
          get: (option?: { config?: U }) =>
            client.fetch<Methods19['get']['resData']>(prefix, `/users-permissions/roles/${val5}`, 'GET', option).json(),
          $get: async (option?: { config?: U }) =>
            (await client.fetch<Methods19['get']['resData']>(prefix, `/users-permissions/roles/${val5}`, 'GET', option).json()).data
        }),
        _role: (val6: number | string) => ({
          put: (option: { data: Methods20['put']['reqData'], config?: U }) =>
            client.fetch<Methods20['put']['resData']>(prefix, `/users-permissions/roles/${val6}`, 'PUT', option).json(),
          $put: async (option: { data: Methods20['put']['reqData'], config?: U }) =>
            (await client.fetch<Methods20['put']['resData']>(prefix, `/users-permissions/roles/${val6}`, 'PUT', option).json()).data,
          delete: (option?: { config?: U }) =>
            client.fetch<Methods20['delete']['resData']>(prefix, `/users-permissions/roles/${val6}`, 'DELETE', option).json(),
          $delete: async (option?: { config?: U }) =>
            (await client.fetch<Methods20['delete']['resData']>(prefix, `/users-permissions/roles/${val6}`, 'DELETE', option).json()).data
        }),
        get: (option: { query: Methods18['get']['query'], config?: U }) =>
          client.fetch<Methods18['get']['resData']>(prefix, '/users-permissions/roles', 'GET', option).json(),
        $get: async (option: { query: Methods18['get']['query'], config?: U }) =>
          (await client.fetch<Methods18['get']['resData']>(prefix, '/users-permissions/roles', 'GET', option).json()).data,
        post: (option: { data: Methods18['post']['reqData'], config?: U }) =>
          client.fetch<Methods18['post']['resData']>(prefix, '/users-permissions/roles', 'POST', option).json(),
        $post: async (option: { data: Methods18['post']['reqData'], config?: U }) =>
          (await client.fetch<Methods18['post']['resData']>(prefix, '/users-permissions/roles', 'POST', option).json()).data
      },
      search: {
        _id: (val7: number | string) => ({
          get: (option: { query: Methods21['get']['query'], config?: U }) =>
            client.fetch<Methods21['get']['resData']>(prefix, `/users-permissions/search/${val7}`, 'GET', option).json(),
          $get: async (option: { query: Methods21['get']['query'], config?: U }) =>
            (await client.fetch<Methods21['get']['resData']>(prefix, `/users-permissions/search/${val7}`, 'GET', option).json()).data
        })
      }
    }
  }
}

export { ApiTypes }
export type ApiInstance = ReturnType<typeof api>
export default api
