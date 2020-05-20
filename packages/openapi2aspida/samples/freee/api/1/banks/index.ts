/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      offset?: number
      limit?: number
      type?: 'bank' | 'credit_card' | 'wallet'
    }

    status: 200

    resBody: {
      banks: Types.bankResponse['bank'][]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { banks: [{ id: 1, name: 'a', type: 'bank_account', name_kana: 'a' }] } })
})
