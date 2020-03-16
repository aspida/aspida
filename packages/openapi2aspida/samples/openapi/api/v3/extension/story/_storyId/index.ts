/* eslint-disable */
import * as Types from '../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      type: Types.CardEnumModel
      caption?: string
      title?: string
      abstract?: string
      sourceName?: string
      image?: string
      imageId?: number
      quotePerson?: string
      quote?: string
      url?: string
      quotePersonImageId?: number
      quotePersonImage?: string
      quoteSource?: string
      quotePersonHandle?: string
      videoId?: number
      video?: ArrayBuffer
      audioId?: number
      audio?: ArrayBuffer
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { id: 'a' } })
}
