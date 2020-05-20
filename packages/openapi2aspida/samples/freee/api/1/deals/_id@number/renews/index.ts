/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.dealResponse
    reqFormat: URLSearchParams
    reqBody: Types.renewCreateParams
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 201, resBody: { deal: { id: 1, company_id: 1, issue_date: 'a', due_date: 'a', amount: 1, due_amount: 1, type: 'income', partner_id: 1, partner_code: 'a', ref_number: 'a', status: 'unsettled', details: [{ id: 1, account_item_id: 1, tax_id: 1, tax_code: 1, item_id: 1, section_id: 1, tag_ids: [1], segment_1_tag_id: 1, segment_2_tag_id: 1, segment_3_tag_id: 1, amount: 1, vat: 1, description: 'a', entry_side: 'credit' }], renews: [{ id: 1, update_date: 'a', renew_target_id: 1, renew_target_type: 'detail', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, item_id: 1, section_id: 1, tag_ids: [1], segment_1_tag_id: 1, segment_2_tag_id: 1, segment_3_tag_id: 1, amount: 1, vat: 1, description: 'a' }] }], payments: [{ id: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, amount: 1 }], receipts: [{ id: 1, status: 'unconfirmed', description: 'a', mime_type: 'a', issue_date: 'a', origin: 'unknown', created_at: 'a', file_src: 'a', user: { id: 1, email: 'a', display_name: 'a' } }] } } })
})
