/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  put: {
    query?: {
      q?: string
    }
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200 })
})
