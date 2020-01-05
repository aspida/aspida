export interface Methods {
  get: {
    query: { aa?: number }
    reqHeaders: {}
    resData: { id: number }
  }

  post: {
    query: { aa: number }
    resData: { id: number }
  }
}
