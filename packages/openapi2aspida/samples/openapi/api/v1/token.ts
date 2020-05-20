/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  post: {
    status: 200

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

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { token: 'a' } })
})
