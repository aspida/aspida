import { DefineMethods } from '../../../../src'

export type Methods = DefineMethods<{
  get: {
    query?: { aa?: number }
    reqHeaders: {}
    resBody: { id: number }
  }
}>
