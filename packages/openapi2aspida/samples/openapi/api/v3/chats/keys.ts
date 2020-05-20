/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge
    status: 200

    resBody: {
      token?: string
      publishKey?: string
      subscribeKey?: string
      cipherKey?: string

      senderDevice?: {
        ios?: string[]
        android?: string[]
      }
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { token: 'a', publishKey: 'a', subscribeKey: 'a', cipherKey: 'a', senderDevice: { ios: ['a'], android: ['a'] } } })
})
