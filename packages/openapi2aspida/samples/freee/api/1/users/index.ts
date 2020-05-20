/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      limit?: number
    }

    status: 200

    resBody: {
      users: Types.userResponse['user'][]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { users: [{ id: 1, email: 'a', display_name: 'a', first_name: 'a', last_name: 'a', first_name_kana: 'a', last_name_kana: 'a' }] } })
})
