/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import baseMiddleware from './@middleware'
import api from './$api'
import mock0 from './v2.0/index'
import mock1 from './v1.1/users/_userId@number'
import mock2 from './v1.1/3.1'
import mock3 from './v1.1/2/_hogeId@HogeId/test-4/_fugaId'
import mock4 from './index'

export const mockRoutes = () => [
  {
    path: '/v2.0',
    methods: mock0
  },
  {
    path: '/v1.1/users/_userId@number',
    methods: mock1
  },
  {
    path: '/v1.1/3.1',
    methods: mock2
  },
  {
    path: '/v1.1/2/_hogeId@HogeId/test-4/_fugaId',
    methods: mock3
  },
  {
    path: '',
    methods: mock4
  }
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {
  const middleware = [...baseMiddleware, ...(config && config.middleware || [])]
  client.attachRoutes(mockRoutes(), { ...config, middleware })

  return api(client)
}
