/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  post: {
    reqBody?: {
      url: string
      published?: boolean
      enableImage?: boolean
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200 })
})
