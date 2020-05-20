/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
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

    status: 200
    resBody: Types.Users_PermissionsUser[]
  }
}
