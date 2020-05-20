/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
      keyword?: string
    }

    status: 200
    resBody: Types.partnersResponse
  }

  post: {
    status: 201
    resBody: Types.partnerResponse
    reqFormat: URLSearchParams
    reqBody: Types.partnerCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { partners: [{ id: 1, code: 'a', company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a', long_name: 'a', name_kana: 'a', default_title: 'a', phone: 'a', contact_name: 'a', email: 'a', payer_walletable_id: 1, transfer_fee_handling_side: 'payer', 'address_attributes[zipcode]': 'a', 'address_attributes[prefecture_code]': 1, 'address_attributes[street_name1]': 'a', 'address_attributes[street_name2]': 'a', 'partner_doc_setting_attributes[sending_method]': 'mail', 'partner_bank_account_attributes[bank_name]': 'a', 'partner_bank_account_attributes[bank_name_kana]': 'a', 'partner_bank_account_attributes[bank_code]': 'a', 'partner_bank_account_attributes[branch_name]': 'a', 'partner_bank_account_attributes[branch_kana]': 'a', 'partner_bank_account_attributes[branch_code]': 'a', 'partner_bank_account_attributes[account_type]': 'ordinary', 'partner_bank_account_attributes[account_number]': 'a', 'partner_bank_account_attributes[account_name]': 'a', 'partner_bank_account_attributes[long_account_name]': 'a' }] } }),
  post: () => ({ status: 201, resBody: { partner: { id: 1, code: 'a', company_id: 1, name: 'a', shortcut1: 'a', shortcut2: 'a', long_name: 'a', name_kana: 'a', default_title: 'a', phone: 'a', contact_name: 'a', email: 'a', payer_walletable_id: 1, transfer_fee_handling_side: 'payer', 'address_attributes[zipcode]': 'a', 'address_attributes[prefecture_code]': 1, 'address_attributes[street_name1]': 'a', 'address_attributes[street_name2]': 'a', 'partner_doc_setting_attributes[sending_method]': 'email', 'partner_bank_account_attributes[bank_name]': 'a', 'partner_bank_account_attributes[bank_name_kana]': 'a', 'partner_bank_account_attributes[bank_code]': 'a', 'partner_bank_account_attributes[branch_name]': 'a', 'partner_bank_account_attributes[branch_kana]': 'a', 'partner_bank_account_attributes[branch_code]': 'a', 'partner_bank_account_attributes[account_type]': 'ordinary', 'partner_bank_account_attributes[account_number]': 'a', 'partner_bank_account_attributes[account_name]': 'a', 'partner_bank_account_attributes[long_account_name]': 'a', 'payment_term_attributes[cutoff_day]': 1, 'payment_term_attributes[additional_months]': 1, 'payment_term_attributes[fixed_day]': 1, 'invoice_payment_term_attributes[cutoff_day]': 1, 'invoice_payment_term_attributes[additional_months]': 1, 'invoice_payment_term_attributes[fixed_day]': 1 } } })
})
