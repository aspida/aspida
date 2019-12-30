import { MockMethods } from '~/aspida-mock/src/types'
import { users } from './index'

export default { get: () => [200, users[0]] } as MockMethods
