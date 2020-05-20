/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      excludeItems?: boolean
      excludePinned?: boolean
    }

    status: 200
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200 })
})
