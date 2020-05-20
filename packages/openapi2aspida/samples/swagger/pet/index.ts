/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../@types'

export type Methods = {
  post: {
    reqBody: Types.Pet
  }

  put: {
    reqBody: Types.Pet
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 204 }),
  put: () => ({ status: 204 })
})
