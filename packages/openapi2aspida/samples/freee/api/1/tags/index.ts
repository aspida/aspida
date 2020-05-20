/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200

    resBody: {
      tags: Types.tagResponse['tag'][]
    }
  }

  post: {
    status: 201
    resBody: Types.tagResponse
    reqFormat: URLSearchParams
    reqBody: Types.tagParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { tags: [{ id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' }] } }),
  post: () => ({ status: 201, resBody: { tag: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } })
})
