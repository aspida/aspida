import { createController } from 'aspida-server'
import { Methods } from '.'

export default createController<Methods>([
  (req, res, next) => {
    console.log('Controller level middleware:', req.path)
    next()
  },
  {
    get: v => {
      return new Promise(resolve => resolve({ status: 200, body: { id: +v.query.id } }))
    },
    post: async () => ({ status: 200, body: { id: 1 } })
  }
])
