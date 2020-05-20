/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    query?: {
      unpublished?: boolean
      'read-only'?: boolean
    }

    status: 200
    resBody: {
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

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: [{ id: 1, name: 'a', role: 'a', created: 'a', subdomain: 'a', url: 'a', ownerEmail: 'a', ownerName: 'a', organisationName: 'a', ownerId: 1, organisationId: 1, pinnedStoryId: 1, stories: [{ id: 1, title: 1, status: 'a', ownerId: 1, allowAccessToEditorLimited: true }] }] })
})
