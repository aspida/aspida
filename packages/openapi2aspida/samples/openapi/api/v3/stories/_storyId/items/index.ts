/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      offset?: number
    }

    resBody: {
      limit: number
      offset: number
      data: Types.ModelCard[]
    }
  }
}
