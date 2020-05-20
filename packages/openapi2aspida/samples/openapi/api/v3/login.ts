/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

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

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { id: 1, username: 'a', email: 'a', avatar: 'a', url: 'a', ...{ token: 'a', settings: { isAppLocked: true } } } })
})
