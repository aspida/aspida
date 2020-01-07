import { MockMethods } from '~/axios-mock-server/src/types'

export default {
  get: () => [200, 'Hello world!']
} as MockMethods
