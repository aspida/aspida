/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './dummy/_id@number/content'
import { Methods as Methods1 } from './dummy/_id@number/query'
import { Methods as Methods2 } from './file/_id@number/upload'
import { Methods as Methods3 } from './user/_id@number/abc'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')

  return {
    dummy: {
      _id: (val0: number) => ({
        content: {
          put: (option?: { config?: T }) =>
            client.fetch<Methods0['put']['resBody']>(prefix, `/dummy/${val0}/content`, 'PUT', option).text(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<Methods0['put']['resBody']>(prefix, `/dummy/${val0}/content`, 'PUT', option).text()).data
        },
        query: {
          put: (option?: { query?: Methods1['put']['query'], config?: T }) =>
            client.fetch<void>(prefix, `/dummy/${val0}/query`, 'PUT', option).send(),
          $put: async (option?: { query?: Methods1['put']['query'], config?: T }) =>
            (await client.fetch<void>(prefix, `/dummy/${val0}/query`, 'PUT', option).send()).data
        },
        simple: {
          put: (option?: { config?: T }) =>
            client.fetch<void>(prefix, `/dummy/${val0}/simple`, 'PUT', option).send(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<void>(prefix, `/dummy/${val0}/simple`, 'PUT', option).send()).data
        }
      })
    },
    file: {
      _id: (val1: number) => ({
        upload: {
          post: (option?: { data?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            client.fetch<void>(prefix, `/file/${val1}/upload`, 'POST', option, 'Blob').send(),
          $post: async (option?: { data?: Methods2['post']['reqBody'], query?: Methods2['post']['query'], config?: T }) =>
            (await client.fetch<void>(prefix, `/file/${val1}/upload`, 'POST', option, 'Blob').send()).data
        }
      })
    },
    user: {
      _id: (val2: number) => ({
        abc: {
          get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
            client.fetch<void>(prefix, `/user/${val2}/abc`, 'GET', option).send(),
          $get: async (option?: { query?: Methods3['get']['query'], config?: T }) =>
            (await client.fetch<void>(prefix, `/user/${val2}/abc`, 'GET', option).send()).data
        },
        xyz: {
          get: (option?: { config?: T }) =>
            client.fetch<void>(prefix, `/user/${val2}/xyz`, 'GET', option).send(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<void>(prefix, `/user/${val2}/xyz`, 'GET', option).send()).data,
          put: (option?: { config?: T }) =>
            client.fetch<void>(prefix, `/user/${val2}/xyz`, 'PUT', option).send(),
          $put: async (option?: { config?: T }) =>
            (await client.fetch<void>(prefix, `/user/${val2}/xyz`, 'PUT', option).send()).data
        },
        get: (option?: { config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'GET', option).send(),
        $get: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'GET', option).send()).data,
        patch: (option?: { config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'PATCH', option).send(),
        $patch: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'PATCH', option).send()).data,
        delete: (option?: { config?: T }) =>
          client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send(),
        $delete: async (option?: { config?: T }) =>
          (await client.fetch<void>(prefix, `/user/${val2}`, 'DELETE', option).send()).data
      })
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
