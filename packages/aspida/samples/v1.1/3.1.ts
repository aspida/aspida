export interface Methods {
  get: {
    query?: { aa?: number }
    reqHeaders: {}
    resData: { id: number }
  }

  post: {
    query: { aa: number }
    reqType: URLSearchParams
    reqData?: { name: string }
    resData: { id: number }
  }
}
