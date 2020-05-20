/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.manualJournalResponse
  }

  put: {
    status: 200
    resBody: Types.manualJournalResponse
    reqFormat: URLSearchParams
    reqBody?: Types.manualJournalUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { manual_journal: { id: 1, company_id: 1, issue_date: 'a', adjustment: true, txn_number: 'a', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, partner_id: 1, partner_name: 'a', partner_code: 'a', partner_long_name: 'a', item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 1, segment_2_tag_id: 1, segment_2_tag_name: 1, segment_3_tag_id: 1, segment_3_tag_name: 1, amount: 1, vat: 1, description: 'a' }] } } }),
  put: () => ({ status: 200, resBody: { manual_journal: { id: 1, company_id: 1, issue_date: 'a', adjustment: true, txn_number: 'a', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, partner_id: 1, partner_name: 'a', partner_code: 'a', partner_long_name: 'a', item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 1, segment_2_tag_id: 1, segment_2_tag_name: 1, segment_3_tag_id: 1, segment_3_tag_name: 1, amount: 1, vat: 1, description: 'a' }] } } }),
  delete: () => ({ status: 204 })
})
