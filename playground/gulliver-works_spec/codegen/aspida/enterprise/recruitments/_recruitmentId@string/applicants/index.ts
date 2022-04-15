/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    query?: {
      /** 対応中とか */
      managementStatus?: string | undefined
      /** 職種絞り込み */
      occupationId?: string | undefined
      /** 募集絞り込み */
      recruitmentId?: string | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Inline_response_200_2
  }
}
