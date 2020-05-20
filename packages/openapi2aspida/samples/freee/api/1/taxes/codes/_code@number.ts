/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.taxResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { tax: { code: 1, name: 'a', name_ja: 'a' } } })
})
