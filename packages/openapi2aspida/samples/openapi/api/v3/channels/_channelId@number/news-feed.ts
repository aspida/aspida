/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      timestamp?: number
      offset?: number
      limit?: number
      reverse?: boolean
    }

    status: 200

    resBody: {
      count: number
      data: (Types.ModelCard & {
        storyId?: number

        reactions?: Types.ReactionCountModel & {
          myReaction?: Types.ReactionEnumModel
        }
      })[]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { count: 1, data: [{ id: 1, type: 'article', createdByLabel: 'a', created: 'a', postedTime: 'a', updated: 'a', published: true, position: 1, headline: 'a', quotePerson: 'a', quotePersonHandle: 'a', quote: 'a', title: 'a', sourceName: 'a', url: 'a', abstract: 'a', image: { id: 1, statusCopyright: 1, rightholder: 'a', thumb: 'a', status: 'ok', url: 'a' }, audio: { id: 1, url: 'a', thumb: 'a', originalThumb: 'a', status: 'a', duration: 1, width: 1, height: 1 }, styles: { showAuthor: true, teaserStyle: 'standard' }, author: { type: 'curate-backend', name: 'a', email: 'a', image: { id: 1, statusCopyright: 1, rightholder: 'a', thumb: 'a', status: 'ok', url: 'a' } }, ...{ storyId: 1, reactions: { like: 1, love: 1, haha: 1, wow: 1, sad: 1, angry: 1, ...{ myReaction: 'like' } } } }] } })
})
