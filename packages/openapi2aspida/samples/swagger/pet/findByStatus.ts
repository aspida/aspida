import { mockMethods } from 'aspida-mock'
import * as Types from '../@types'

export interface Methods {
  get: {
    query: {
      status: ('available' | 'pending' | 'sold')[]
    }

    resBody: Types.Pet[]
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: [
      {
        id: 1,
        category: { id: 1, name: 'a' },
        name: 'a',
        photoUrls: ['a'],
        tags: [{ id: 1, name: 'a' }],
        status: 'available'
      }
    ]
  })
})
