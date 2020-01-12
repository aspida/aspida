/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  post: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.UserTokenHeader & Types.AppOrganisationToken

    resData: {
      id: string
    }

    reqType: FormData

    reqData: {
      file: ArrayBuffer
      caption: string
      headline: string
      imageId: string
      published: boolean
      formattedText: string
    }
  }
}
