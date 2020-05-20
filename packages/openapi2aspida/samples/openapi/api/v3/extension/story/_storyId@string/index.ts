/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

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
      video?: Blob
      audioId?: number
      audio?: Blob
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { id: 'a' } })
})
