/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  post: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resData: {
      id: string
    }

    reqType: FormData

    reqData: {
      file: ArrayBuffer
      caption: string
      headline: string
      text: string
      published: boolean
    }
  }
}
