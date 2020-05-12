import { createController } from 'aspida-server'
import { Methods } from './'

export default createController<Methods>([
  (req, res, next) => {
    console.log('Controller level middleware:', req.path)
    next()
  },
  {
    get: v => {
      return new Promise(resolve => resolve({ status: 200, body: { id: +v.query.id } }))
    },
    post: async v => ({
      status: 200,
      body: { id: +v.query.id, port: v.body.port, fileName: v.files[0].originalname }
    })
  }
])
