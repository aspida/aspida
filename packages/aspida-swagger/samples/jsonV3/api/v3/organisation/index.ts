/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  get: {
    reqHeaders: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired

    resData: Types.OrganisationModel
  }
}
