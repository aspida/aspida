/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired
    status: 200

    resBody: {
      dataUrl?: string
      otpURL?: string
      secret?: string
    }

    reqBody: {
      email: string
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { dataUrl: 'a', otpURL: 'a', secret: 'a' } })
})
