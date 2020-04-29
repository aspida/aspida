/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200 })
})
