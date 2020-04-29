/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: {
      items: Types.itemResponse['item'][]
    }
  }

  post: {
    resBody: Types.itemResponse
    reqFormat: URLSearchParams
    reqBody?: Types.itemParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { items: [{ id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' }] } }),
  post: () => ({ status: 200, resBody: { item: { id: 1, company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a' } } })
})
