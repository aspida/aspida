import { createController } from 'aspida-server'
import { Methods } from './'
import { Values } from './$values'

export default createController<Methods, Values>({
  get: async ({ params }) => ({ status: 200, body: { id: params.userId, name: 'bbb' } })
})
