/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resBody: {
      type: Types.CardEnumModel
      url: string
      sourceName?: string
      abstract?: string
      quotePerson?: string
      quotePersonHandle?: string
      quote?: string
      quoteSource?: string
      quoteCreated?: string
    }

    reqBody: {
      url: string
    }
  }
}
