/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.AccountProfile
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.AccountProfile
    reqBody: Types.Inline_object_12
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.AccountProfile
    reqBody: Types.Inline_object_11
  }
}
