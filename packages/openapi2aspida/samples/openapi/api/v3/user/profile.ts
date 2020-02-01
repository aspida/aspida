/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    reqType: FormData

    reqData?: {
      screenName?: string
      url?: string
      image?: ArrayBuffer
      imageId?: string
    }
  }
}
