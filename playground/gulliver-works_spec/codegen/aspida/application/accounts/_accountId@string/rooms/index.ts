/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Inline_response_200_4
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.Room
    reqBody: Types.Inline_object_4
  }
}
