import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    resBody: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ values }) => ({ status: 200, resBody: { id: +values.articleId } })
})
