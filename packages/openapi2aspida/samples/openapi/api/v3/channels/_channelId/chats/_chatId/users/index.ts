/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resData: {
      id?: number
      email?: string
      screenName?: string
      access?: 'admin' | 'r' | 'rw' | 'banned'
      isDeleted?: number
      imageUrl?: string
      initials?: string
    }[]
  }

  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    reqData: {
      users?: number[]
      bannedUsers?: number[]
      self?: boolean
    }
  }

  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    reqData: {
      users: {
        id: number
        chatHidden?: boolean
        access?: 'r' | 'rw' | 'admin' | 'banned'
      }[]
    }
  }
}
