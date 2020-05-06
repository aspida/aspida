import { createController } from 'aspida-server'
import { Methods } from '.'

export default createController<Methods>([
  (req, res, next) => {
    next()
  },
  {
    get: async () => ({ status: 200, resBody: [{ id: 1, name: 'aa' }] })
  }
])
