/* eslint-disable */
import * as Types from '../@types'

export interface Methods {
  get: {
    resData: Types.Users_PermissionsUser
  }

  put: {
    resData: Types.Users_PermissionsUser

    reqData: Types.NewUsers_PermissionsUser
  }

  delete: {
    resData: {
      foo?: string
    }
  }
}
