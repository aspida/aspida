/* eslint-disable */
import * as Types from '../@types'

export type Methods = {
  get: {
    resBody: Types.Users_PermissionsUser
  }

  put: {
    resBody: Types.Users_PermissionsUser
    reqBody: Types.NewUsers_PermissionsUser
  }

  delete: {
    resBody: {
      foo?: string
    }
  }
}
