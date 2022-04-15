/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  delete: {
    status: 204
  }

  get: {
    status: 200
    /** OK */
    resBody: Types.InterestedList
  }

  patch: {
    status: 200
    /** OK */
    resBody: Types.InterestedList
    reqBody: Types.Inline_object_2
  }
}
