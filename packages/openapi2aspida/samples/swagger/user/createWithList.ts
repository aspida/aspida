/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../@types'

export interface Methods {
  post: {
    reqBody: Types.User[]
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200 })
})
