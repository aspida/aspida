/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_date?: string
      end_date?: string
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      transfers: Types.transferResponse['transfer'][]
    }
  }

  post: {
    status: 201
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody?: Types.transferParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { transfers: [{ id: 1, company_id: 1, amount: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, to_walletable_type: 'bank_account', to_walletable_id: 1, description: 'a' }] } }),
  post: () => ({ status: 201, resBody: { transfer: { id: 1, company_id: 1, amount: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, to_walletable_type: 'bank_account', to_walletable_id: 1, description: 'a' } } })
})
