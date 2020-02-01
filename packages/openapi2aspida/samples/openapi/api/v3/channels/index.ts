/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query?: {
      unpublished?: boolean
      'read-only'?: boolean
    }

    resData: {
      id: number
      name: string
      role: string
      created: string
      subdomain: string
      url: string
      ownerEmail: string
      ownerName: string
      organisationName?: string
      ownerId: number
      organisationId: number
      pinnedStoryId?: number
      stories: {
        id: number
        title: number
        status: string
        ownerId: number
        allowAccessToEditorLimited: boolean
      }[]
    }[]
  }
}
