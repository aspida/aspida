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
      expense_applications: Types.expenseApplicationResponse['expense_application'][]
    }
  }

  post: {
    status: 201
    resBody: Types.expenseApplicationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.expenseApplicationCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { expense_applications: [{ id: 1, company_id: 1, title: 'a', issue_date: 'a', description: 'a', editable_on_web: true, total_amount: 1, status: 'draft', section_id: 1, tag_ids: [1], expense_application_lines: [{ id: 1, transaction_date: 'a', description: 'a', amount: 1, expense_application_line_template_id: 1, receipt_id: 1 }], deal_id: 1, deal_status: 'settled' }] } }),
  post: () => ({ status: 201, resBody: { expense_application: { id: 1, company_id: 1, title: 'a', issue_date: 'a', description: 'a', editable_on_web: true, total_amount: 1, status: 'draft', section_id: 1, tag_ids: [1], expense_application_lines: [{ id: 1, transaction_date: 'a', description: 'a', amount: 1, expense_application_line_template_id: 1, receipt_id: 1 }], deal_id: 1, deal_status: 'settled' } } })
})
