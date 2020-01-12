/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  get: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resData: {
      state: 'no_update' | 'force_update'
      link: string
    }
  }
}
