/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  put: {
    status: 200
    resBody: Types.Users_PermissionsRole
    reqBody: Types.NewUsers_PermissionsRole
  }

  delete: {
    status: 200

    resBody: {
      foo?: string
    }
  }
}
