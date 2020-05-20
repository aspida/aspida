/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.companyIndexResponse
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { companies: [{ id: 1, name: 'a', name_kana: 'a', display_name: 'a', role: 'admin' }] } })
})
