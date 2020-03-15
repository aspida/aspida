import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export interface Methods {
  get: {
    resBody: Types.Order
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: { id: 1, petId: 1, quantity: 1, shipDate: 'a', status: 'placed', complete: true }
  })
})
