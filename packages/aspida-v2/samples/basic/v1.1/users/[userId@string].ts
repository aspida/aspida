import { AspidaMethods } from 'aspida-v2'

export type Methods = AspidaMethods<{
  get: {
    req: { query: { aa?: number }; headers: {} }
    res: { body: { id: number } }
  }

  post: {
    req: { query: { aa: number } }
    res: { body: { id: number } }
  }
}>
