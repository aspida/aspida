/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  delete: {
    status: 204
  }

  get: {
    status: 200
    /** OK */
    resBody: Types.Company
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.Company
    reqBody: Types.Inline_object_1
  }
}
