import { AspidaMethods } from 'aspida-v2'

export type Methods = AspidaMethods<{
  get: {
    req: {
      query: { aa?: number }
    }
    res: {
      body: { id: number }
    }
  }
  post: {
    req: {
      query: { aa: number }
      body?: { name: string }
    }
    res: {
      body: { id: number }
    }
  }
  put: {
    req: {
      query: { aa: number }
    }
    res: {
      body: { id: number }
    }
  }
  delete: {
    req: {
      query: { aa: number }
      body: { name: string }
    }
    res: {
      body: { id: number }
    }
  }
}>
