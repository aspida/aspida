/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.invoiceResponse
  }

  put: {
    status: 200
    resBody: Types.invoiceResponse
    reqFormat: URLSearchParams
    reqBody?: Types.invoiceUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { invoice: { id: 1, company_id: 1, issue_date: 'a', partner_id: 1, partner_code: 'a', invoice_number: 'a', title: 'a', due_date: 'a', total_amount: 1, total_vat: 1, sub_total: 1, booking_date: 'a', description: 'a', invoice_status: 'draft', payment_status: '', payment_date: 'a', web_published_at: 'a', web_downloaded_at: 'a', web_confirmed_at: 'a', mail_sent_at: 'a', posting_status: '', partner_name: 'a', partner_long_name: 'a', partner_title: 'a', partner_zipcode: 'a', partner_prefecture_code: 1, partner_prefecture_name: 'a', partner_address1: 'a', partner_address2: 'a', partner_contact_info: 'a', company_name: 'a', company_zipcode: 'a', company_prefecture_code: 1, company_prefecture_name: 'a', company_address1: 'a', company_address2: 'a', company_contact_info: 'a', payment_type: '', payment_bank_info: 'a', message: 'a', notes: 'a', invoice_layout: 'default_classic', tax_entry_method: '', deal_id: 1, invoice_contents: [{ id: 1, order: 1, type: 'normal', qty: 1, unit: 'a', unit_price: 1, amount: 1, vat: 1, reduced_vat: true, description: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 'a', segment_2_tag_id: 1, segment_2_tag_name: 'a', segment_3_tag_id: 1, segment_3_tag_name: 'a' }], total_amount_per_vat_rate: { vat_5: 1, vat_8: 1, reduced_vat_8: 1, vat_10: 1 } } } }),
  put: () => ({ status: 200, resBody: { invoice: { id: 1, company_id: 1, issue_date: 'a', partner_id: 1, partner_code: 'a', invoice_number: 'a', title: 'a', due_date: 'a', total_amount: 1, total_vat: 1, sub_total: 1, booking_date: 'a', description: 'a', invoice_status: 'draft', payment_status: '', payment_date: 'a', web_published_at: 'a', web_downloaded_at: 'a', web_confirmed_at: 'a', mail_sent_at: 'a', posting_status: '', partner_name: 'a', partner_long_name: 'a', partner_title: 'a', partner_zipcode: 'a', partner_prefecture_code: 1, partner_prefecture_name: 'a', partner_address1: 'a', partner_address2: 'a', partner_contact_info: 'a', company_name: 'a', company_zipcode: 'a', company_prefecture_code: 1, company_prefecture_name: 'a', company_address1: 'a', company_address2: 'a', company_contact_info: 'a', payment_type: '', payment_bank_info: 'a', message: 'a', notes: 'a', invoice_layout: 'default_classic', tax_entry_method: '', deal_id: 1, invoice_contents: [{ id: 1, order: 1, type: 'normal', qty: 1, unit: 'a', unit_price: 1, amount: 1, vat: 1, reduced_vat: true, description: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 'a', segment_2_tag_id: 1, segment_2_tag_name: 'a', segment_3_tag_id: 1, segment_3_tag_name: 'a' }], total_amount_per_vat_rate: { vat_5: 1, vat_8: 1, reduced_vat_8: 1, vat_10: 1 } } } }),
  delete: () => ({ status: 204 })
})
