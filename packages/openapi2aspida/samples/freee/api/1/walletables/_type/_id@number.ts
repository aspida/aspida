/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletableResponse
  }

  put: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.walletableResponse
    reqFormat: URLSearchParams
    reqBody?: Types.walletableUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { walletable: { id: 1, name: 'a', bank_id: 1, type: 'bank_account', last_balance: 1, walletable_balance: 1, meta: { up_to_date: true } } } }),
  put: () => ({ status: 200, resBody: { walletable: { id: 1, name: 'a', bank_id: 1, type: 'bank_account', last_balance: 1, walletable_balance: 1, meta: { up_to_date: true } } } }),
  delete: () => ({ status: 204 })
})
