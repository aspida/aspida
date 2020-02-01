/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resData: Types.UserInfo & {
      token: string
      settings?: Types.UserSettings
    }

    reqData: {
      pwd: string
      email: string
      fcmToken?: string
      deviceToken?: string
      otp?: number
    }
  }
}
