import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    // test
    query?: ({ aa: number /*
    test { aa }
    */ } | { bb: string[] })[]
    resBody: Array<{ aa: number } | { bb: Array<string> }>
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query ? { status: 200, resBody: query } : { status: 403 })
})
