/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './auth/_provider@string/callback'
import { Methods as Methods1 } from './auth/email-confirmation'
import { Methods as Methods2 } from './auth/forgot-password'
import { Methods as Methods3 } from './auth/local/index'
import { Methods as Methods4 } from './auth/local/register'
import { Methods as Methods5 } from './auth/reset-password'
import { Methods as Methods6 } from './auth/send-email-confirmation'
import { Methods as Methods7 } from './connect/_any'
import { Methods as Methods8 } from './email'
import { Methods as Methods9 } from './upload'
import { Methods as Methods10 } from './upload/files/index'
import { Methods as Methods11 } from './upload/files/_id@string'
import { Methods as Methods12 } from './upload/files/count'
import { Methods as Methods13 } from './upload/search/_id@string'
import { Methods as Methods14 } from './users/index'
import { Methods as Methods15 } from './users/_id@string'
import { Methods as Methods16 } from './users/me'
import { Methods as Methods17 } from './users-permissions/init'
import { Methods as Methods18 } from './users-permissions/roles/index'
import { Methods as Methods19 } from './users-permissions/roles/_id@string'
import { Methods as Methods20 } from './users-permissions/roles/_role@string'
import { Methods as Methods21 } from './users-permissions/search/_id@string'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? 'http://localhost:1337' : client.baseURL).replace(/\/$/, '')

  return {
    auth: {
      _provider: (val0: string) => ({
        callback: {
          get: (option?: { config?: T }) =>
            client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `/auth/${val0}/callback`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `/auth/${val0}/callback`, 'GET', option).json()).data
        }
      }),
      email_confirmation: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, '/auth/email-confirmation', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, '/auth/email-confirmation', 'GET', option).json()).data
      },
      forgot_password: {
        post: (option: { data: Methods2['post']['reqBody'], config?: T }) =>
          client.fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, '/auth/forgot-password', 'POST', option).json(),
        $post: async (option: { data: Methods2['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, '/auth/forgot-password', 'POST', option).json()).data
      },
      local: {
        register: {
          post: (option: { data: Methods4['post']['reqBody'], config?: T }) =>
            client.fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, '/auth/local/register', 'POST', option).json(),
          $post: async (option: { data: Methods4['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, '/auth/local/register', 'POST', option).json()).data
        },
        post: (option: { data: Methods3['post']['reqBody'], config?: T }) =>
          client.fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, '/auth/local', 'POST', option).json(),
        $post: async (option: { data: Methods3['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, '/auth/local', 'POST', option).json()).data
      },
      reset_password: {
        post: (option: { data: Methods5['post']['reqBody'], config?: T }) =>
          client.fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, '/auth/reset-password', 'POST', option).json(),
        $post: async (option: { data: Methods5['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, '/auth/reset-password', 'POST', option).json()).data
      },
      send_email_confirmation: {
        post: (option: { data: Methods6['post']['reqBody'], config?: T }) =>
          client.fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, '/auth/send-email-confirmation', 'POST', option).json(),
        $post: async (option: { data: Methods6['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, '/auth/send-email-confirmation', 'POST', option).json()).data
      }
    },
    connect: {
      _any: (val1: number | string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `/connect/${val1}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, `/connect/${val1}`, 'GET', option).json()).data
      })
    },
    email: {
      post: (option: { data: Methods8['post']['reqBody'], config?: T }) =>
        client.fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, '/email', 'POST', option).json(),
      $post: async (option: { data: Methods8['post']['reqBody'], config?: T }) =>
        (await client.fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, '/email', 'POST', option).json()).data
    },
    upload: {
      files: {
        _id: (val2: string) => ({
          get: (option?: { config?: T }) =>
            client.fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `/upload/files/${val2}`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, `/upload/files/${val2}`, 'GET', option).json()).data,
          delete: (option?: { config?: T }) =>
            client.fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, `/upload/files/${val2}`, 'DELETE', option).json(),
          $delete: async (option?: { config?: T }) =>
            (await client.fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, `/upload/files/${val2}`, 'DELETE', option).json()).data
        }),
        count: {
          get: (option?: { config?: T }) =>
            client.fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, '/upload/files/count', 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, '/upload/files/count', 'GET', option).json()).data
        },
        get: (option?: { config?: T }) =>
          client.fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, '/upload/files', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, '/upload/files', 'GET', option).json()).data
      },
      search: {
        _id: (val3: string) => ({
          get: (option?: { config?: T }) =>
            client.fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `/upload/search/${val3}`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, `/upload/search/${val3}`, 'GET', option).json()).data
        })
      },
      post: (option: { data: Methods9['post']['reqBody'], config?: T }) =>
        client.fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, '/upload', 'POST', option).json(),
      $post: async (option: { data: Methods9['post']['reqBody'], config?: T }) =>
        (await client.fetch<Methods9['post']['resBody'], BasicHeaders, Methods9['post']['status']>(prefix, '/upload', 'POST', option).json()).data
    },
    users: {
      _id: (val4: string) => ({
        get: (option?: { config?: T }) =>
          client.fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `/users/${val4}`, 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, `/users/${val4}`, 'GET', option).json()).data,
        put: (option: { data: Methods15['put']['reqBody'], config?: T }) =>
          client.fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, `/users/${val4}`, 'PUT', option).json(),
        $put: async (option: { data: Methods15['put']['reqBody'], config?: T }) =>
          (await client.fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, `/users/${val4}`, 'PUT', option).json()).data,
        delete: (option?: { config?: T }) =>
          client.fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, `/users/${val4}`, 'DELETE', option).json(),
        $delete: async (option?: { config?: T }) =>
          (await client.fetch<Methods15['delete']['resBody'], BasicHeaders, Methods15['delete']['status']>(prefix, `/users/${val4}`, 'DELETE', option).json()).data
      }),
      me: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, '/users/me', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, '/users/me', 'GET', option).json()).data
      },
      get: (option?: { query?: Methods14['get']['query'], config?: T }) =>
        client.fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, '/users', 'GET', option).json(),
      $get: async (option?: { query?: Methods14['get']['query'], config?: T }) =>
        (await client.fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, '/users', 'GET', option).json()).data
    },
    users_permissions: {
      init: {
        get: (option?: { config?: T }) =>
          client.fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, '/users-permissions/init', 'GET', option).json(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, '/users-permissions/init', 'GET', option).json()).data
      },
      roles: {
        _id: (val5: string) => ({
          get: (option?: { config?: T }) =>
            client.fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `/users-permissions/roles/${val5}`, 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, `/users-permissions/roles/${val5}`, 'GET', option).json()).data
        }),
        _role: (val6: string) => ({
          put: (option: { data: Methods20['put']['reqBody'], config?: T }) =>
            client.fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, `/users-permissions/roles/${val6}`, 'PUT', option).json(),
          $put: async (option: { data: Methods20['put']['reqBody'], config?: T }) =>
            (await client.fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, `/users-permissions/roles/${val6}`, 'PUT', option).json()).data,
          delete: (option?: { config?: T }) =>
            client.fetch<Methods20['delete']['resBody'], BasicHeaders, Methods20['delete']['status']>(prefix, `/users-permissions/roles/${val6}`, 'DELETE', option).json(),
          $delete: async (option?: { config?: T }) =>
            (await client.fetch<Methods20['delete']['resBody'], BasicHeaders, Methods20['delete']['status']>(prefix, `/users-permissions/roles/${val6}`, 'DELETE', option).json()).data
        }),
        get: (option?: { query?: Methods18['get']['query'], config?: T }) =>
          client.fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, '/users-permissions/roles', 'GET', option).json(),
        $get: async (option?: { query?: Methods18['get']['query'], config?: T }) =>
          (await client.fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, '/users-permissions/roles', 'GET', option).json()).data,
        post: (option: { data: Methods18['post']['reqBody'], config?: T }) =>
          client.fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, '/users-permissions/roles', 'POST', option).json(),
        $post: async (option: { data: Methods18['post']['reqBody'], config?: T }) =>
          (await client.fetch<Methods18['post']['resBody'], BasicHeaders, Methods18['post']['status']>(prefix, '/users-permissions/roles', 'POST', option).json()).data
      },
      search: {
        _id: (val7: string) => ({
          get: (option?: { query?: Methods21['get']['query'], config?: T }) =>
            client.fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, `/users-permissions/search/${val7}`, 'GET', option).json(),
          $get: async (option?: { query?: Methods21['get']['query'], config?: T }) =>
            (await client.fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, `/users-permissions/search/${val7}`, 'GET', option).json()).data
        })
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
