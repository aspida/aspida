/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.User
  }

  put: {
    reqBody: Types.User
  }

  delete: {
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { id: 1, username: 'a', firstName: 'a', lastName: 'a', email: 'a', password: 'a', phone: 'a', userStatus: 1 } }),
  put: () => ({ status: 204 }),
  delete: () => ({ status: 204 })
})
