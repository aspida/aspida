/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query?: {
      /** 職種 */
      'occupationIds[]'?: string | undefined
      /** 業種 */
      'industryIds[]'?: string | undefined
      /** 勤務地 */
      'workplaceIds[]'?: string | undefined
      /** 雇用形態 */
      'employmentStatusIds[]'?: string | undefined
      /** タイプ */
      type?: string | undefined
      /** 最高金額 */
      maxIncome?: number | undefined
      /** 最低金額 */
      minIncome?: number | undefined
      /** キーワード */
      keyword?: string | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Inline_response_200_2
  }
}
