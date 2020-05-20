/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 204 })
})
