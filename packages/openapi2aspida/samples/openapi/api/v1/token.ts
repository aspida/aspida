/* eslint-disable */
export type Methods = {
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

export default {
  post: () => ({ status: 200, resBody: { token: 'a' } })
}
