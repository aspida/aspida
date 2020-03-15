import * as Types from '../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader &
      Types.AppPlatformHeader &
      Types.AppVersionHeader &
      Types.AppOrganisationToken

    reqBody: {
      fcmToken?: string
      deviceToken?: string
    }
  }
}

export default {
  post: () => ({ status: 200 })
}
