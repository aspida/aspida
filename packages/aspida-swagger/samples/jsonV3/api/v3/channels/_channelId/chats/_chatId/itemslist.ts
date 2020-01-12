/* eslint-disable */
import * as Types from '../../../../../../@types'

export interface Methods {
  get: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query: {
      ids: string
    }

    resData: Types.ModelCard[]
  }
}
