/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      expense_application_line_templates: Types.expenseApplicationLineTemplateResponse['expense_application_line_template'][]
    }
  }

  post: {
    status: 201
    resBody: Types.expenseApplicationLineTemplateResponse
    reqFormat: URLSearchParams
    reqBody: Types.expenseApplicationLineTemplateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { expense_application_line_templates: [{ id: 1, name: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, tax_name: 'a', description: 'a', line_description: 'a' }] } }),
  post: () => ({ status: 201, resBody: { expense_application_line_template: { id: 1, name: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, tax_name: 'a', description: 'a', line_description: 'a' } } })
})
