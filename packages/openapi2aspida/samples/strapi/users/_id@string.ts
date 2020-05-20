/* eslint-disable */
import * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Users_PermissionsUser
  }

  put: {
    status: 200
    resBody: Types.Users_PermissionsUser
    reqBody: Types.NewUsers_PermissionsUser
  }

  delete: {
    status: 200

    resBody: {
      foo?: string
    }
  }
}
