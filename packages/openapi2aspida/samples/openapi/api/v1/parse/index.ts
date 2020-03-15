import * as Types from '../../../@types'

export interface Methods {
  post: {
    resBody: Types.ArticleModel | Types.QuoteModel

    reqBody?: {
      url: string
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { title: 'a', abstract: 'a', sourceName: 'a', image: 'a' } })
}
