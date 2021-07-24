import { AspidaMethods } from 'aspida-v2'

export type Methods = AspidaMethods<{
  get: {
    req: {
      query: { val: string }
      headers: { 'content-type': string }
    }
    res: {
      status: 200 | 204
      headers: { token: string }
      body: string
    }
  }
}>
