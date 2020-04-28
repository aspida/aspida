/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  put: {
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200 })
})
