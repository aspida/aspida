/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.bankResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { bank: { id: 1, name: 'a', type: 'bank_account', name_kana: 'a' } } })
})
