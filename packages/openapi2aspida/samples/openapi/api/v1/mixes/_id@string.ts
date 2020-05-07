/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  put: {
    reqBody?: {
      name: string
      title?: string
    }
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200 })
})
