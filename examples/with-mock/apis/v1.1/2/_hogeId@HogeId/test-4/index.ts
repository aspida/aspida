import { MockMethods } from 'axios-mock-server'

export interface Methods {
  get: {
    params: { aa?: number }
  }

  post: {
    params?: { aa: number }
    data?: { name: string }
  }

  put: {
    params?: { aa: number }
    response: { id: number }
  }

  delete: {
    params: { aa: number }
    response: { id: number }
  }
}

export default {
  get: () => [200, { aa: 1 }],
  post: () => [200, { name: 'hoge' }],
  put: () => [200, { id: 3 }],
  delete: () => [200, { id: 4 }]
} as MockMethods
