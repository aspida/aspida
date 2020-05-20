/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    resBody: Types.Order
    reqBody: Types.Order
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { id: 1, petId: 1, quantity: 1, shipDate: 'a', status: 'placed', complete: true } })
})
