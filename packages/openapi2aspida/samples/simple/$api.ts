/* eslint-disable */
import { AspidaClient, BasicHeaders } from 'aspida'
import { Methods as Methods0 } from './dummy/_id@number/content'
import { Methods as Methods1 } from './dummy/_id@number/query'
import { Methods as Methods2 } from './dummy/_id@number/simple'
import { Methods as Methods3 } from './file/_id@number/upload'
import { Methods as Methods4 } from './user/_id@number/index'
import { Methods as Methods5 } from './user/_id@number/abc'
import { Methods as Methods6 } from './user/_id@number/xyz'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')

  return {
    dummy: {
      _id: (val0: number) => ({
        content: {
          put: (option?: { config?: T }) =>
            client.fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `/dummy/${val0}/content`, 'PUT', option).text(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<Methods0['put']['resBody'], BasicHeaders, Methods0['put']['status']>(prefix, `/dummy/${val0}/content`, 'PUT', option).text()).data
        },
        query: {
          put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            client.fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `/dummy/${val0}/query`, 'PUT', option).send(),
          $put: async (option?: { query?: Methods1['put']['query'], config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, `/dummy/${val0}/query`, 'PUT', option).send()).data
        },
        simple: {
          put: (option?: { config?: T }) =>
            client.fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `/dummy/${val0}/simple`, 'PUT', option).send(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, `/dummy/${val0}/simple`, 'PUT', option).send()).data
        }
      })
    },
    file: {
      _id: (val1: number) => ({
        upload: {
          post: (option?: { data?: Methods3['post']['reqBody'], query?: Methods3['post']['query'], config?: T }) =>
            client.fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `/file/${val1}/upload`, 'POST', option, 'Blob').send(),
          $post: async (option?: { data?: Methods3['post']['reqBody'], query?: Methods3['post']['query'], config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, `/file/${val1}/upload`, 'POST', option, 'Blob').send()).data
        }
      })
    },
    user: {
      _id: (val2: number) => ({
        abc: {
          get: (option?: { query?: Methods5['get']['query'], config?: T }) =>
            client.fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, `/user/${val2}/abc`, 'GET', option).send(),
          $get: async (option?: { query?: Methods5['get']['query'], config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods5['get']['status']>(prefix, `/user/${val2}/abc`, 'GET', option).send()).data
        },
        xyz: {
          get: (option?: { config?: T }) =>
            client.fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, `/user/${val2}/xyz`, 'GET', option).send(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods6['get']['status']>(prefix, `/user/${val2}/xyz`, 'GET', option).send()).data,
          put: (option?: { config?: T }) =>
            client.fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, `/user/${val2}/xyz`, 'PUT', option).send(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, `/user/${val2}/xyz`, 'PUT', option).send()).data
        },
        get: (option?: { config?: T }) =>
          client.fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, `/user/${val2}`, 'GET', option).send(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, `/user/${val2}`, 'GET', option).send()).data,
        patch: (option?: { config?: T }) =>
          client.fetch<void, BasicHeaders, Methods4['patch']['status']>(prefix, `/user/${val2}`, 'PATCH', option).send(),
        $patch: async (option?: { config?: T }) =>
          (await client.fetch<void, BasicHeaders, Methods4['patch']['status']>(prefix, `/user/${val2}`, 'PATCH', option).send()).data,
        delete: (option?: { config?: T }) =>
          client.fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, `/user/${val2}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: T }) =>
          (await client.fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, `/user/${val2}`, 'DELETE', option).send()).data
      })
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
