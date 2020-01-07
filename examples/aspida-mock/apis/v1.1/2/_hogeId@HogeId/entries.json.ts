import { MockMethods } from 'axios-mock-server'

export interface Methods {
  get: {
    response: {
      id: number
      title: string
    }[]
  }
}

export default {
  get: () => [200, [{ id: 1, title: 'fuga' }]]
} as MockMethods
