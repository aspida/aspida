/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
    resBody: {
      id: number
      title: number
      createdByCurrentClientAPI: boolean
    }[]
  }

  post: {
    resBody: {
      id: number
    }

    reqBody?: {
      name: string
      title?: string
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: [{ id: 1, title: 1, createdByCurrentClientAPI: true }] }),
  post: () => ({ status: 200, resBody: { id: 1 } })
})
