/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletTxnResponse
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { wallet_txn: { id: 1, company_id: 1, date: 'a', amount: 1, due_amount: 1, balance: 1, entry_side: 'income', walletable_type: 'bank_account', walletable_id: 1, description: 'a', status: 1 } } }),
  delete: () => ({ status: 204 })
})
