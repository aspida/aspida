/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired
    resBody: Types.OrganisationModel
  }
}

export default {
  get: () => ({ status: 200, resBody: { name: 'a', subdomain: 'a', locale: 'a', androidStoreLink: 'a', androidAppId: 'a', androidHokeyStoreLink: 'a', androidAppHokeyId: 'a', iosStoreLink: 'a', iosAppId: 'a', iosHokeyStoreLink: 'a', iosAppHokeyId: 'a', fcmServerKeyId: 1, allowToStoreOriginalImageFile: 'a', twoFactorForce: 'a', sessionExpirationTime: 'a', appLockEnabled: true, id: 1, uuid: 'a', created: 'a', isSystem: true, pinnedStoryId: 1, hasPinnedMixes: true } })
}
