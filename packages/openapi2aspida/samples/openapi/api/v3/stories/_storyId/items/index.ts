/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      offset?: number
    }

    resData: {
      limit: number
      offset: number
      data: Types.ModelCard[]
    }
  }
}
