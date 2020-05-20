/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    resBody: {
      chatId?: number
      chatDescriptor?: string
      channelId?: number
      organisationId?: number
      storyId?: number
      itemId?: number

      pinnedContent?: {
        pinType?: 'mix' | 'card'
      }

      storyIdPinned?: number
      type?: 'group' | 'p2p'
      accessType?: 'private' | 'publicRead' | 'publicWrite'
      usersCount?: number
      name?: string
      payload?: string
      access?: 'admin' | 'banned' | 'r' | 'rw'
      thumbnails?: {
        image?: string
        initials?: string
      }[]
      level?: 'channel' | 'organisation'
      recipientId?: number
      created?: string
      updated?: string
    }
  }

  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    reqBody: {
      name?: string
      accessType?: 'private' | 'publicWrite' | 'publicRead'
      payload?: string
      storyId?: number
      itemId?: number
      level?: 'channel' | 'organisation'
    }
  }

  delete: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { chatId: 1, chatDescriptor: 'a', channelId: 1, organisationId: 1, storyId: 1, itemId: 1, pinnedContent: { pinType: 'mix' }, storyIdPinned: 1, type: 'group', accessType: 'private', usersCount: 1, name: 'a', payload: 'a', access: 'admin', thumbnails: [{ image: 'a', initials: 'a' }], level: 'channel', recipientId: 1, created: 'a', updated: 'a' } }),
  put: () => ({ status: 200 }),
  delete: () => ({ status: 200 })
})
