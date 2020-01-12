/* eslint-disable */
export interface Methods {
  get: {
    resData: {
      id: number
      title: number
      createdByCurrentClientAPI: boolean
    }[]
  }

  post: {
    resData: {
      id: number
    }

    reqData: {
      name: string
      title: string
    }
  }
}
