/* eslint-disable */
export interface Methods {
  post: {
    resBody: {
      token: string
    }

    reqBody?: {
      organisationSubdomain: string
      channelSubdomain: string
      userId: number
    }
  }
}
