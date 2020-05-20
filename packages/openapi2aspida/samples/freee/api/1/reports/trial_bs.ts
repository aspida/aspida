/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      fiscal_year?: number
      start_month?: number
      end_month?: number
      start_date?: string
      end_date?: string
      account_item_display_type?: 'account_item' | 'group'
      breakdown_display_type?: 'partner' | 'item' | 'account_item'
      partner_id?: number
      partner_code?: string
      item_id?: number
      adjustment?: 'only' | 'without'
    }

    status: 200
    resBody: Types.trialBsResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { trial_bs: { company_id: 1, up_to_date: true, fiscal_year: 1, start_month: 1, end_month: 1, start_date: 'a', end_date: 'a', account_item_display_type: 'account_item', breakdown_display_type: 'partner', partner_id: 1, partner_code: 'a', item_id: 1, adjustment: 'only', created_at: 'a', balances: [{ account_item_id: 1, account_item_name: 'a', partners: [{ id: 1, name: 'a', opening_balance: 1, debit_amount: 1, credit_amount: 1, closing_balance: 1, composition_ratio: 1 }], items: [{ id: 1, name: 'a', opening_balance: 1, debit_amount: 1, credit_amount: 1, closing_balance: 1, composition_ratio: 1 }], account_category_id: 1, account_category_name: 'a', total_line: true, hierarchy_level: 1, parent_account_category_id: 1, parent_account_category_name: 'a', opening_balance: 1, debit_amount: 1, credit_amount: 1, closing_balance: 1, composition_ratio: 1 }] } } })
})
