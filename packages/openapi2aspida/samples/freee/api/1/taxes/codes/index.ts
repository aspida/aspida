/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200

    resBody: {
      taxes: Types.taxResponse['tax'][]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { taxes: [{ code: 1, name: 'a', name_ja: 'a' }] } })
})
