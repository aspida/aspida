/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resBody: {
      ok: boolean
    }

    reqBody?: {
      formattedText?: string
    }
  }

  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader
    resBody: Types.ModelCard
  }
}
