/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 204

    reqBody: {
      fcmToken?: string
      deviceToken?: string
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 204 })
})
