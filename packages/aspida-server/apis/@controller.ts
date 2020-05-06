import { createController } from 'aspida-server'
import { Methods } from '.'

export default createController<Methods>({
  get: v => {
    return new Promise(resolve => resolve({ status: 200, resBody: v.query }))
  },
  post: async () => ({ status: 200, resBody: { id: 1 } })
})
