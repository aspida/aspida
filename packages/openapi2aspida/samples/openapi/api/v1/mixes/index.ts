/* eslint-disable */
export interface Methods {
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
