/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      details?: true
      account_items?: true
      taxes?: true
      items?: true
      partners?: true
      sections?: true
      tags?: true
      walletables?: true
    }

    status: 200
    resBody: Types.companyResponse
  }

  put: {
    status: 200
    resBody: Types.companyUpdateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.companyParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { company: { id: 1, name: 'a', name_kana: 'a', display_name: 'a', tax_at_source_calc_type: 1, contact_name: 'a', head_count: 1, corporate_number: 'a', txn_number_format: 'not_used', default_wallet_account_id: 1, private_settlement: true, minus_format: 1, role: 'admin', phone1: 'a', phone2: 'a', fax: 'a', zipcode: 'a', prefecture_code: 1, street_name1: 'a', street_name2: 'a', invoice_layout: 1, invoice_style: 1, amount_fraction: 1, industry_class: '', industry_code: '', workflow_setting: 'enable', use_partner_code: true, fiscal_years: [{ use_industry_template: true, indirect_write_off_method: true, start_date: 'a', end_date: 'a', depreciation_record_method: 1, tax_method: 1, sales_tax_business_code: 1, tax_fraction: 1, tax_account_method: 1, return_code: 1 }] } } }),
  put: () => ({ status: 200, resBody: { company: { id: 1, name: 'a', name_kana: 'a', display_name: 'a', tax_at_source_calc_type: 1, contact_name: 'a', head_count: 1, corporate_number: 'a', txn_number_format: 'not_used', default_wallet_account_id: 1, private_settlement: true, minus_format: 1, role: 'admin', phone1: 'a', phone2: 'a', fax: 'a', zipcode: 'a', prefecture_code: 1, street_name1: 'a', street_name2: 'a', invoice_layout: 1, invoice_style: 1, amount_fraction: 1, industry_class: '', industry_code: '', workflow_setting: 'enable', fiscal_years: [{ use_industry_template: true, indirect_write_off_method: true, start_date: 'a', end_date: 'a', depreciation_record_method: 1, tax_method: 1, sales_tax_business_code: 1, tax_fraction: 1, tax_account_method: 1, return_code: 1 }] } } })
})
