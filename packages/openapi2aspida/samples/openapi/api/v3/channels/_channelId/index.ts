import * as Types from '../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader &
      Types.AppPlatformHeader &
      Types.AppVersionHeader &
      Types.AppOrganisationToken &
      Types.UserInstanceIdHeader

    query?: {
      excludeItems?: boolean
      excludePinned?: boolean
    }
  }
}

export default {
  get: () => ({ status: 200 })
}
