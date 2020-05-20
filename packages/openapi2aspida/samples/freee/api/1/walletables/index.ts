/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      with_balance?: boolean
      type?: 'bank_account' | 'credit_card' | 'wallet'
    }

    status: 200

    resBody: {
      walletables: Types.walletableResponse['walletable'][]

      meta?: {
        up_to_date?: boolean
      }
    }
  }

  post: {
    status: 201
    resBody: Types.walletableCreateResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { walletables: [{ id: 1, name: 'a', bank_id: 1, type: 'bank_account', last_balance: 1, walletable_balance: 1, meta: { up_to_date: true } }], meta: { up_to_date: true } } }),
  post: () => ({ status: 201, resBody: { id: 1, name: 'a', bank_id: 1, type: 'bank_account' } })
})
