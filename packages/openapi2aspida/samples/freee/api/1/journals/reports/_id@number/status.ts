/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      visible_tags?: ('partner' | 'item' | 'tag' | 'section' | 'description' | 'wallet_txn_description' | 'all')[]
      start_date?: string
      end_date?: string
    }

    status: 200
    resBody: Types.journalStatusResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { journals: { id: 1, company_id: 1, download_type: 'csv', status: 'enqueued', start_date: 'a', end_date: 'a', visible_tags: ['partner'], download_url: 'a' } } })
})
