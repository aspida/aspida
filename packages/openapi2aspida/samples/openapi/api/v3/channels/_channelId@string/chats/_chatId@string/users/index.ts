/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200
    resBody: {
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
    status: 201

    reqBody: {
      users?: number[]
      bannedUsers?: number[]
      self?: boolean
    }
  }

  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    reqBody: {
      users: {
        id: number
        chatHidden?: boolean
        access?: 'r' | 'rw' | 'admin' | 'banned'
      }[]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: [{ id: 1, email: 'a', screenName: 'a', access: 'admin', isDeleted: 1, imageUrl: 'a', initials: 'a' }] }),
  post: () => ({ status: 201 }),
  put: () => ({ status: 200 })
})
