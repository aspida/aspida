/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.tagResponse
  }

  put: {
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody?: Types.tagParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { tag: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  put: () => ({ status: 200, resBody: { tag: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  delete: () => ({ status: 200 })
})
