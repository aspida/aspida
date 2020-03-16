/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      offset?: number
    }

    resBody: {
      limit: number
      offset: number
    }
  }

  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: {
      id: string
    }

    reqBody: {
      type: Types.CardEnumModel
      title?: string
      abstract?: string
      sourceName?: string
      image?: string
      imageId?: string
      quotePerson?: string
      quote?: string
      url?: string
      quotePersonImageId?: string
      quotePersonImage?: string
      quoteSource?: string
      quotePersonHandle?: string
      videoId?: string
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
      formattedText?: string
    }
  }
}

export default {
  get: () => ({ status: 200, resBody: { limit: 1, offset: 1 } }),
  post: () => ({ status: 200, resBody: { id: 'a' } })
}
