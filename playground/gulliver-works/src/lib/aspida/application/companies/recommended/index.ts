/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 希望の職種・雇用形態からおすすめの企業をいくつか取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Company[]
  }
}
