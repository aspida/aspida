/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.userCapability
      deals: Types.userCapability
      transfers: Types.userCapability
      docs: Types.userCapability
      doc_postings: Types.userCapability
      receipts: Types.userCapability
      receipt_stream_editor: Types.userCapability
      expense_applications: Types.userCapability
      spreadsheets: Types.userCapability
      payment_requests: Types.userCapability
      request_forms: Types.userCapability
      approval_requests: Types.userCapability
      reports: Types.userCapability
      reports_income_expense: Types.userCapability
      reports_receivables: Types.userCapability
      reports_payables: Types.userCapability
      reports_cash_balance: Types.userCapability
      reports_crosstabs: Types.userCapability
      reports_general_ledgers: Types.userCapability
      reports_pl: Types.userCapability
      reports_bs: Types.userCapability
      reports_journals: Types.userCapability
      reports_managements_planning: Types.userCapability
      reports_managements_navigation: Types.userCapability
      manual_journals: Types.userCapability
      fixed_assets: Types.userCapability
      inventory_refreshes: Types.userCapability
      biz_allocations: Types.userCapability
      payment_records: Types.userCapability
      annual_reports: Types.userCapability
      tax_reports: Types.userCapability
      consumption_entries: Types.userCapability
      tax_return: Types.userCapability
      account_item_statements: Types.userCapability
      month_end: Types.userCapability
      year_end: Types.userCapability
      walletables: Types.userCapability
      companies: Types.userCapability
      invitations: Types.userCapability
      sign_in_logs: Types.userCapability
      backups: Types.userCapability
      opening_balances: Types.userCapability
      system_conversion: Types.userCapability
      resets: Types.userCapability
      partners: Types.userCapability
      items: Types.userCapability
      sections: Types.userCapability
      tags: Types.userCapability
      account_items: Types.userCapability
      taxes: Types.userCapability
      user_matchers: Types.userCapability
      deal_templates: Types.userCapability
      manual_journal_templates: Types.userCapability
      cost_allocations: Types.userCapability
      approval_flow_routes: Types.userCapability
      expense_application_templates: Types.userCapability
      workflows: Types.userCapability
      oauth_applications: Types.userCapability
      oauth_authorizations: Types.userCapability
      bank_accountant_staff_users: Types.userCapability
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { wallet_txns: { read: true, create: true, update: true, destroy: true }, deals: { read: true, create: true, update: true, destroy: true }, transfers: { read: true, create: true, update: true, destroy: true }, docs: { read: true, create: true, update: true, destroy: true }, doc_postings: { read: true, create: true, update: true, destroy: true }, receipts: { read: true, create: true, update: true, destroy: true }, receipt_stream_editor: { read: true, create: true, update: true, destroy: true }, expense_applications: { read: true, create: true, update: true, destroy: true }, spreadsheets: { read: true, create: true, update: true, destroy: true }, payment_requests: { read: true, create: true, update: true, destroy: true }, request_forms: { read: true, create: true, update: true, destroy: true }, approval_requests: { read: true, create: true, update: true, destroy: true }, reports: { read: true, create: true, update: true, destroy: true }, reports_income_expense: { read: true, create: true, update: true, destroy: true }, reports_receivables: { read: true, create: true, update: true, destroy: true }, reports_payables: { read: true, create: true, update: true, destroy: true }, reports_cash_balance: { read: true, create: true, update: true, destroy: true }, reports_crosstabs: { read: true, create: true, update: true, destroy: true }, reports_general_ledgers: { read: true, create: true, update: true, destroy: true }, reports_pl: { read: true, create: true, update: true, destroy: true }, reports_bs: { read: true, create: true, update: true, destroy: true }, reports_journals: { read: true, create: true, update: true, destroy: true }, reports_managements_planning: { read: true, create: true, update: true, destroy: true }, reports_managements_navigation: { read: true, create: true, update: true, destroy: true }, manual_journals: { read: true, create: true, update: true, destroy: true }, fixed_assets: { read: true, create: true, update: true, destroy: true }, inventory_refreshes: { read: true, create: true, update: true, destroy: true }, biz_allocations: { read: true, create: true, update: true, destroy: true }, payment_records: { read: true, create: true, update: true, destroy: true }, annual_reports: { read: true, create: true, update: true, destroy: true }, tax_reports: { read: true, create: true, update: true, destroy: true }, consumption_entries: { read: true, create: true, update: true, destroy: true }, tax_return: { read: true, create: true, update: true, destroy: true }, account_item_statements: { read: true, create: true, update: true, destroy: true }, month_end: { read: true, create: true, update: true, destroy: true }, year_end: { read: true, create: true, update: true, destroy: true }, walletables: { read: true, create: true, update: true, destroy: true }, companies: { read: true, create: true, update: true, destroy: true }, invitations: { read: true, create: true, update: true, destroy: true }, sign_in_logs: { read: true, create: true, update: true, destroy: true }, backups: { read: true, create: true, update: true, destroy: true }, opening_balances: { read: true, create: true, update: true, destroy: true }, system_conversion: { read: true, create: true, update: true, destroy: true }, resets: { read: true, create: true, update: true, destroy: true }, partners: { read: true, create: true, update: true, destroy: true }, items: { read: true, create: true, update: true, destroy: true }, sections: { read: true, create: true, update: true, destroy: true }, tags: { read: true, create: true, update: true, destroy: true }, account_items: { read: true, create: true, update: true, destroy: true }, taxes: { read: true, create: true, update: true, destroy: true }, user_matchers: { read: true, create: true, update: true, destroy: true }, deal_templates: { read: true, create: true, update: true, destroy: true }, manual_journal_templates: { read: true, create: true, update: true, destroy: true }, cost_allocations: { read: true, create: true, update: true, destroy: true }, approval_flow_routes: { read: true, create: true, update: true, destroy: true }, expense_application_templates: { read: true, create: true, update: true, destroy: true }, workflows: { read: true, create: true, update: true, destroy: true }, oauth_applications: { read: true, create: true, update: true, destroy: true }, oauth_authorizations: { read: true, create: true, update: true, destroy: true }, bank_accountant_staff_users: { read: true, create: true, update: true, destroy: true } } })
})
