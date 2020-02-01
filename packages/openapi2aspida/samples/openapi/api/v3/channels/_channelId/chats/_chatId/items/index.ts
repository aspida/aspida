/* eslint-disable */
import * as Types from '../../../../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      offset?: number
    }

    resData: {
      limit: number
      offset: number
      data: []
    }
  }

  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resData: {
      id: string
    }

    reqData: {
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
