/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      ok: boolean
    }

    reqBody?: {
      formattedText?: string
    }
  }

  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader
    status: 200
    resBody: Types.ModelCard
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { ok: true } }),
  get: () => ({ status: 200, resBody: { id: 1, type: 'article', createdByLabel: 'a', created: 'a', postedTime: 'a', updated: 'a', published: true, position: 1, headline: 'a', quotePerson: 'a', quotePersonHandle: 'a', quote: 'a', title: 'a', sourceName: 'a', url: 'a', abstract: 'a', image: { id: 1, statusCopyright: 1, rightholder: 'a', thumb: 'a', status: 'ok', url: 'a' }, audio: { id: 1, url: 'a', thumb: 'a', originalThumb: 'a', status: 'a', duration: 1, width: 1, height: 1 }, styles: { showAuthor: true, teaserStyle: 'standard' }, author: { type: 'curate-backend', name: 'a', email: 'a', image: { id: 1, statusCopyright: 1, rightholder: 'a', thumb: 'a', status: 'ok', url: 'a' } } } })
})
