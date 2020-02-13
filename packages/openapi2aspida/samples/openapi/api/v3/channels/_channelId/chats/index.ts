/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserPublicKey & Types.UserSignedChallenge

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
