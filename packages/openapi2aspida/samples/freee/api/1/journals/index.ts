/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      download_type: 'csv' | 'pdf' | 'yayoi' | 'generic'
      company_id: number
      visible_tags?: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      start_date?: string
      end_date?: string
    }

    status: 202
    resBody: Types.journalsResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 202, resBody: { journals: { id: 1, messages: 'a', company_id: 1, download_type: 'csv', start_date: 'a', end_date: 'a', visible_tags: ['partner'], status_url: 'a' } } })
})
