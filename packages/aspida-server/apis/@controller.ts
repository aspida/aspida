import { createController, createMiddleware } from 'aspida-server'
import { Methods } from './'

export const middleware = createMiddleware((req, res, next) => {
  console.log('Controller level middleware:', req.path)
  next()
})

export default createController<Methods>({
  get: async v => {
    return await { status: 200, body: { id: +(v.query?.id || 0) } }
  },
  post: v => ({
    status: 200,
    body: { id: +v.query.id, port: v.body.port, fileName: v.files[0].originalname }
  })
})
