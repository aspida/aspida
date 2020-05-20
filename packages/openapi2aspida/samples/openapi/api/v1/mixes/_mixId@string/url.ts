/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  post: {
    status: 204

    reqBody?: {
      url: string
      published?: boolean
      enableImage?: boolean
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 204 })
})
