/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date: string
      end_date: string
      user_name?: string
      number?: number
      comment_type?: 'posted' | 'raised' | 'resolved'
      comment_important?: boolean
      category?: 'all' | 'without_deal' | 'with_expense_application_line' | 'with_deal' | 'ignored'
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      receipts: Types.receiptResponse['receipt'][]
    }
  }

  post: {
    status: 201
    resBody: Types.receiptResponse
    reqFormat: FormData
    reqBody: Types.receiptCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { receipts: [{ id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } }] } }),
  post: () => ({ status: 201, resBody: { receipt: { id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } } } })
})
