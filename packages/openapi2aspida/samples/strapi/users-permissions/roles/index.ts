/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  get: {
    query?: {
      _limit?: number
      _sort?: string
      _start?: number
      '='?: string
      _ne?: string
      _lt?: string
      _lte?: string
      _gt?: string
      _gte?: string
      _contains?: string
      _containss?: string
      _in?: string[]
      _nin?: string[]
    }

    resBody: Types.Users_PermissionsRole[]
  }

  post: {
    resBody: Types.Users_PermissionsRole
    reqBody: Types.NewUsers_PermissionsRole
  }
}
