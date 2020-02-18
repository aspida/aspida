/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: Types.UserInfo & {
      token: string
      settings?: Types.UserSettings
    }

    reqBody: {
      pwd: string
      email: string
      fcmToken?: string
      deviceToken?: string
      otp?: number
    }
  }
}
