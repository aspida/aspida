/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Inline_response_200_6
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.Applicant
    reqBody: Types.Inline_object_6
  }
}
