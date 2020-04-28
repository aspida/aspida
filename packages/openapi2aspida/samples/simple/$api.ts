/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './dummy/_id/content'
import { Methods as Methods1 } from './dummy/_id/query'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')

  return {
    dummy: {
      _id: (val0: number | string) => ({
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
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
