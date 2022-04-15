/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Inline_response_200_8
  }

  post: {
    reqHeaders: {
      authorization: string
    }

    status: 201
    /** Created */
    resBody: Types.AcademicHistory
    reqBody: Types.Inline_object_10
  }
}
