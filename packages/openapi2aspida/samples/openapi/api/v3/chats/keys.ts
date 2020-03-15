import * as Types from '../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader &
      Types.AppPlatformHeader &
      Types.AppVersionHeader &
      Types.AppOrganisationToken &
      Types.UserPublicKey &
      Types.UserSignedChallenge

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

export default {
  get: () => ({
    status: 200,
    resBody: {
      token: 'a',
      publishKey: 'a',
      subscribeKey: 'a',
      cipherKey: 'a',
      senderDevice: { ios: ['a'], android: ['a'] }
    }
  })
}
