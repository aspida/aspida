/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  delete: {
    status: 204
  }

  get: {
    status: 200
    /** OK */
    resBody: Types.Employee
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.Employee
    reqBody: Types.Inline_object_7
  }
}
