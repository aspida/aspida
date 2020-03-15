/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import api from './$api'
import mock0 from './user/login'
import mock1 from './user/index'
import mock2 from './user/createWithList'
import mock3 from './user/createWithArray'
import mock4 from './user/_username'
import mock5 from './store/order/index'
import mock6 from './store/order/_orderId'
import mock7 from './pet/index'
import mock8 from './pet/findByStatus'
import mock9 from './pet/_petId/uploadImage'
import mock10 from './pet/_petId/index'

export const mockRoutes = () => [
  { path: '/user/login', methods: mock0 },
  { path: '/user', methods: mock1 },
  { path: '/user/createWithList', methods: mock2 },
  { path: '/user/createWithArray', methods: mock3 },
  { path: '/user/_username', methods: mock4 },
  { path: '/store/order', methods: mock5 },
  { path: '/store/order/_orderId', methods: mock6 },
  { path: '/pet', methods: mock7 },
  { path: '/pet/findByStatus', methods: mock8 },
  { path: '/pet/_petId/uploadImage', methods: mock9 },
  { path: '/pet/_petId', methods: mock10 }
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {
  client.attachRoutes(mockRoutes(), config)

  return api(client)
}
