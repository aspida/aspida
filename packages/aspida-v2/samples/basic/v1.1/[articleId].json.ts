import { AspidaMethods } from 'aspida-v2'

export type Methods = AspidaMethods<{
  get: {
    res: { body: { id: number } }
  }
}>
