/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../@types'

export type Methods = {
  post: {
    reqBody: Types.User
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 204 })
})
