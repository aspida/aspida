/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  delete: {
    status: 204
  }

  get: {
    status: 200
    /** OK */
    resBody: Types.Recruitment
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.Recruitment
    reqBody: Types.Inline_object_3
  }
}
