import { MockMethods } from '~/src/types'
import { users } from './index'

export default {
  get: ({ values }) => [200, users.filter(user => user.id === values.userId)[0]]
} as MockMethods
