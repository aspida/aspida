import { MockMethods } from 'axios-mock-server'

export interface Methods {
  get: {
    params: { aa?: number }
    headers: {}
    response: { id: number }
  }

  post: {
    params: { aa: number }
    response: { id: number }
  }
}

export default {
  get: () => [200, { id: 1 }],
  post: () => [200, { id: 1 }]
} as MockMethods
