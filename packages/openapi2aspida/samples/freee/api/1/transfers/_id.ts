/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.transferResponse
  }

  put: {
    resBody: Types.transferResponse
    reqFormat: URLSearchParams
    reqBody: Types.transferParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { transfer: { id: 1, company_id: 1, amount: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, to_walletable_type: 'bank_account', to_walletable_id: 1, description: 'a' } } }),
  put: () => ({ status: 200, resBody: { transfer: { id: 1, company_id: 1, amount: 1, date: 'a', from_walletable_type: 'bank_account', from_walletable_id: 1, to_walletable_type: 'bank_account', to_walletable_id: 1, description: 'a' } } }),
  delete: () => ({ status: 200 })
})
