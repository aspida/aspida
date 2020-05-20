/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.receiptResponse
  }

  put: {
    status: 200
    resBody: Types.receiptResponse
    reqFormat: URLSearchParams
    reqBody: Types.receiptUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { receipt: { id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } } } }),
  put: () => ({ status: 200, resBody: { receipt: { id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } } } }),
  delete: () => ({ status: 204 })
})
