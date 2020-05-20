/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      walletable_type?: 'bank_account' | 'credit_card' | 'wallet'
      walletable_id?: number
      start_date?: string
      end_date?: string
      entry_side?: 'income' | 'expense'
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      wallet_txns: Types.walletTxnResponse['wallet_txn'][]
    }
  }

  post: {
    status: 201
    resBody: Types.walletTxnResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletTxnParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { wallet_txns: [{ id: 1, company_id: 1, date: 'a', amount: 1, due_amount: 1, balance: 1, entry_side: 'income', walletable_type: 'bank_account', walletable_id: 1, description: 'a', status: 1 }] } }),
  post: () => ({ status: 201, resBody: { wallet_txn: { id: 1, company_id: 1, date: 'a', amount: 1, due_amount: 1, balance: 1, entry_side: 'income', walletable_type: 'bank_account', walletable_id: 1, description: 'a', status: 1 } } })
})
