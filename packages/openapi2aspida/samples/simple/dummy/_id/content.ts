/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  put: {
    resBody: string
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200, resBody: 'a' })
})
