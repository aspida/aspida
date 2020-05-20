/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      base_date?: string
    }

    status: 200
    resBody: Types.accountItemsResponse
  }

  post: {
    status: 201
    resBody: Types.accountItemResponse
    reqFormat: URLSearchParams
    reqBody: Types.accountItemParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { account_items: [{ id: 1, name: 'a', shortcut: 'a', shortcut_num: 'a', default_tax_id: 1, default_tax_code: 1, account_category: 'a', account_category_id: 1, categories: ['a'], available: true, walletable_id: 1, group_name: 'a', corresponding_income_name: 'a', corresponding_income_id: 1, corresponding_expense_name: 'a', corresponding_expense_id: 1 }] } }),
  post: () => ({ status: 201, resBody: { account_item: { id: 1, name: 'a', company_id: 1, tax_code: 1, account_category: 'a', account_category_id: 1, shortcut: 'a', shortcut_num: 'a', corresponding_type_expense: 1, corresponding_type_income: 1, searchable: 1, accumulated_dep_account_item_name: 'a', items: [{ id: 1, name: 'a' }], partners: [{ id: 1, name: 'a' }], available: true, walletable_id: 1, group_name: 'a', corresponding_income_name: 'a', corresponding_income_id: 1, corresponding_expense_name: 'a', corresponding_expense_id: 1 } } })
})
