/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
    status: 200

    resBody: {
      [key: string]: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { foo: 1 } })
})
