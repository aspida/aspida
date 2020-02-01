/* eslint-disable */
import * as Types from '../../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    resData: {
      action?: 'add' | 'remove' | 'replace'
      reactions?: Types.ReactionCountModel & {

      }
      userType?: 'anonymous' | 'unique'
    }

    reqData: {

    }
  }
}
