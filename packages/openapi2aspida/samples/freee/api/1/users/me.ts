/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      companies?: true
    }

    status: 200
    resBody: Types.meResponse
  }

  put: {
    status: 200
    resBody: Types.userResponse
    reqFormat: URLSearchParams
    reqBody?: Types.userParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { user: { id: 1, email: 'a', display_name: 'a', first_name: 'a', last_name: 'a', first_name_kana: 'a', last_name_kana: 'a', companies: [{ id: 1, display_name: 'a', role: 'admin', use_custom_role: true }] } } }),
  put: () => ({ status: 200, resBody: { user: { id: 1, email: 'a', display_name: 'a', first_name: 'a', last_name: 'a', first_name_kana: 'a', last_name_kana: 'a' } } })
})
