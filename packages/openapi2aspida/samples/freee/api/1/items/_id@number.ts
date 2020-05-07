/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.itemResponse
  }

  put: {
    resBody: Types.itemResponse
    reqFormat: URLSearchParams
    reqBody?: Types.itemParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { item: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  put: () => ({ status: 200, resBody: { item: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  delete: () => ({ status: 200 })
})
