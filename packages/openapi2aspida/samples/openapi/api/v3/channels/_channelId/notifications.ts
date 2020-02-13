/* eslint-disable */
import * as Types from '../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query?: {
      published?: boolean
      offset?: number
    }

    resBody: {
      count?: number
      limit?: number
      data?: {
        id: number
        message: string
        title: string
        priority: 'normal' | 'high'
        isSent: boolean
        ownerId: string
        organisationId: number
        deliveringTime: string
        expirationTime: string
        created: string
      }[]
    }
  }
}
