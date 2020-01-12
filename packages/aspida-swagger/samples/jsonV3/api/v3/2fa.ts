/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired

    resData: {
      dataUrl: string
      otpURL: string
      secret: string
    }

    reqData: {
      email: string
    }
  }
}
