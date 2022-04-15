/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Inline_response_200_1
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.Recruitment
    reqBody: Types.Inline_object_2
  }
}
