/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 200

    resBody: Types.ArticleModel | Types.QuoteModel

    reqBody?: {
      url: string
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { title: 'a', abstract: 'a', sourceName: 'a', image: 'a' } })
})
