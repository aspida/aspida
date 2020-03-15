import * as Types from '../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader &
      Types.AppPlatformHeader &
      Types.AppVersionHeader &
      Types.AppOrganisationToken
    resBody: Types.UserInfo
  }
}

export default {
  get: () => ({ status: 200, resBody: { id: 1, username: 'a', email: 'a', avatar: 'a', url: 'a' } })
}
