export type Methods = {
  get: {
    // test
    query?: ({ aa: number /*
    test { aa }
    */ } | { bb: string[] })[]
    status: 200
    resBody: Array<{ aa: number } | { bb: Array<string> }>
  }
}
