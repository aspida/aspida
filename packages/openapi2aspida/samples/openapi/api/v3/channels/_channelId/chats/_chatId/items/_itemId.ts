/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resData: {
      ok: boolean
    }

    reqData?: {
      formattedText?: string
    }
  }
}
