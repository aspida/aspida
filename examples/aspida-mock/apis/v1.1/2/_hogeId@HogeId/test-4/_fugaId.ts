import { MockMethods } from 'axios-mock-server'

export interface Methods {
  get: {
    params?: { aa?: number }
    response: { id: number }
  }

  post: {
    params: { aa: number }
    data?: { name: string }
    response: { id: number }
  }

  put: {
    params: { aa: number }
    response: { id: number }
  }

  delete: {
    params: { aa: number }
    response: { id: number }
  }
}

export default {
  get: () => [200, { id: 1 }],
  post: () => [200, { id: 2 }],
  put: () => [200, { id: 3 }],
  delete: () => [200, { id: 4 }]
} as MockMethods
