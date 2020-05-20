/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      includes?: 'account_item'
    }

    status: 200
    resBody: Types.selectablesIndexResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { account_categories: [{ balance: 'expense', org_code: 'personal', role: 'a', title: 'a', desc: 'a', account_items: [{ id: 1, name: 'a', desc: 'a', help: 'a', shortcut: 'a', default_tax: { tax_rate_5: { id: 1, name: 'a' }, tax_rate_8: { id: 1, name: 'a' } } }] }], account_groups: [{ id: 1, name: 'a', account_structure_id: 1, account_category_id: 1, detail_type: 1, index: 1, created_at: 'a', updated_at: 'a' }] } })
})
