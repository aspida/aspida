/* eslint-disable */
import * as Types from '../../../@types'

export interface Methods {
  post: {
    resBody: Types.ArticleModel | Types.QuoteModel

    reqBody?: {
      url: string
    }
  }
}
