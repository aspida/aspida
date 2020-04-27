/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    reqBody: {
      fcmToken: string
      deviceToken?: string
    }
  }
}

export default {
  post: () => ({ status: 200 })
}
