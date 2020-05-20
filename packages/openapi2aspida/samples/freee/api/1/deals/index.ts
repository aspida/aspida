/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      partner_id?: number
      account_item_id?: number
      partner_code?: string
      status?: 'unsettled' | 'settled'
      type?: 'income' | 'expense'
      start_issue_date?: string
      end_issue_date?: string
      start_due_date?: string
      end_due_date?: string
      start_renew_date?: string
      end_renew_date?: string
      offset?: number
      limit?: number
      registered_from?: 'me'
      accruals?: 'without' | 'with'
    }

    status: 200

    resBody: {
      deals: Types.dealResponse['deal'][]

      meta: {
        total_count: number
      }
    }
  }

  post: {
    status: 201
    resBody: Types.dealCreateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.dealCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { deals: [{ id: 1, company_id: 1, issue_date: 'a', due_date: 'a', amount: 1, due_amount: 1, type: 'income', partner_id: 1, partner_code: 'a', ref_number: 'a', status: 'unsettled', details: [{ id: 1, account_item_id: 1, tax_id: 1, tax_code: 1, item_id: 1, section_id: 1, tag_ids: [1], segment_1_tag_id: 1, segment_2_tag_id: 1, segment_3_tag_id: 1, amount: 1, vat: 1, description: 'a', entry_side: 'credit' }], renews: [{ id: 1, update_date: 'a', renew_target_id: 1, renew_target_type: 'detail', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, item_id: 1, section_id: 1, tag_ids: [1], segment_1_tag_id: 1, segment_2_tag_id: 1, segment_3_tag_id: 1, amount: 1, vat: 1, description: 'a' }] }], payments: [{ id: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, amount: 1 }], receipts: [{ id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } }] }], meta: { total_count: 1 } } }),
  post: () => ({ status: 201, resBody: { deal: { id: 1, company_id: 1, issue_date: 'a', due_date: 'a', amount: 1, due_amount: 1, type: 'income', partner_id: 1, partner_code: 'a', ref_number: 'a', status: 'unsettled', details: [{ id: 1, account_item_id: 1, tax_id: 1, tax_code: 1, item_id: 1, section_id: 1, tag_ids: [1], segment_1_tag_id: 1, segment_2_tag_id: 1, segment_3_tag_id: 1, amount: 1, vat: 1, description: 'a', entry_side: 'credit' }], payments: [{ id: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, amount: 1 }] } } })
})
