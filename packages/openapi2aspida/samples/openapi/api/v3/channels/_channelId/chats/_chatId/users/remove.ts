/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    reqBody: {
      users?: number[]
      self?: boolean
    }
  }
}

export default {
  post: () => ({ status: 200 })
}
