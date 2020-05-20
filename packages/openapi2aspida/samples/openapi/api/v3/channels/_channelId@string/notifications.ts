/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query?: {
      published?: boolean
      offset?: number
    }

    status: 200

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

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { count: 1, limit: 1, data: [{ id: 1, message: 'a', title: 'a', priority: 'normal', isSent: true, ownerId: 'a', organisationId: 1, deliveringTime: 'a', expirationTime: 'a', created: 'a' }] } })
})
