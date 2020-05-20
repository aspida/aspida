/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Order
  }

  delete: {
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { id: 1, petId: 1, quantity: 1, shipDate: 'a', status: 'placed', complete: true } }),
  delete: () => ({ status: 204 })
})
