/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
    query: {
      username: string
      password: string
    }

    status: 200
    resBody: string

    resHeaders: {
      'X-Expires-After': string
      'X-Rate-Limit': number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: 'a', resHeaders: { 'X-Expires-After': 'a', 'X-Rate-Limit': 1 } })
})
