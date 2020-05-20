/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Pet
  }

  post: {
    reqFormat: URLSearchParams

    reqBody?: {
      name?: string
      status?: string
    }
  }

  delete: {
    reqHeaders?: {
      api_key?: string
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { id: 1, category: { id: 1, name: 'a' }, name: 'a', photoUrls: ['a'], tags: [{ id: 1, name: 'a' }], status: 'available' } }),
  post: () => ({ status: 204 }),
  delete: () => ({ status: 204 })
})
