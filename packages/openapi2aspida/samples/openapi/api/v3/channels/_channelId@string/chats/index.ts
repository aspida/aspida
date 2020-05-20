/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge
    status: 200

    resBody: {
      chats?: {
        access?: 'admin' | 'r' | 'w' | 'banned'
        chatId?: number
        chatDescriptor?: string
        channelId?: number
        organisationId?: number
        name?: string
        payload?: string
        type?: 'group' | 'p2p'
        accessType?: 'private' | 'publicWrite' | 'publicRead'
        storyId?: number
        itemId?: number
        storyIdPinned?: number
        storyPinnedEmpty?: boolean
        usersCount?: number
        publicToJoin?: boolean
        thumbnails?: {
          image?: string
          initials?: string
        }[]
        level?: 'channel' | 'organisation'
        recipientId?: number
        created?: string
        updated?: string
      }[]
      token?: string
      publishKey?: string
      subscribeKey?: string
      cipherKey?: string

      senderDevice?: {
        ios?: string[]
        android?: string[]
      }
    }
  }

  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 201

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

    reqBody: {
      name: string
      type: 'p2p' | 'group'
      level: 'channel' | 'organisation'
      accessType: 'private' | 'publicRead' | 'publicWrite'
      payload?: string
      storyId?: number
      itemId?: number
      users?: number[]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { chats: [{ access: 'admin', chatId: 1, chatDescriptor: 'a', channelId: 1, organisationId: 1, name: 'a', payload: 'a', type: 'group', accessType: 'private', storyId: 1, itemId: 1, storyIdPinned: 1, storyPinnedEmpty: true, usersCount: 1, publicToJoin: true, thumbnails: [{ image: 'a', initials: 'a' }], level: 'channel', recipientId: 1, created: 'a', updated: 'a' }], token: 'a', publishKey: 'a', subscribeKey: 'a', cipherKey: 'a', senderDevice: { ios: ['a'], android: ['a'] } } }),
  post: () => ({ status: 201, resBody: { chatId: 1, chatDescriptor: 'a', channelId: 1, organisationId: 1, storyId: 1, itemId: 1, pinnedContent: { pinType: 'mix' }, type: 'group', accessType: 'private', usersCount: 1, name: 'a', payload: 'a', access: 'admin', thumbnails: [{ image: 'a', initials: 'a' }], level: 'channel', recipientId: 1, created: 'a', updated: 'a' } })
})
