/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 希望の職種・募集形態からおすすめの募集をいくつか取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Recruitment[]
  }
}
