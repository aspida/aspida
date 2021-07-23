import { AspidaMethods } from 'aspida-v2'

export type Methods = AspidaMethods<{
  get: {
    req: {
      // test
      query?:
        | {
            aa: number /*
    test { aa }
    */
          }
        | { bb: string[] }
    }
    res: {
      status: 200
      body: Array<{ aa: number } | { bb: Array<string> }>
    }
  }
}>
