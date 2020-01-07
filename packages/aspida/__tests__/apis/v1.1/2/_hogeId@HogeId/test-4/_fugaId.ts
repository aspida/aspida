export interface Methods {
  get: {
    query?: { aa?: number }
    resData: { id: number }
  }

  post: {
    query: { aa: number }
    reqData?: { name: string }
    resData: { id: number }
  }

  put: {
    query: { aa: number }
    resData: { id: number }
  }

  delete: {
    query: { aa: number }
    resData: { id: number }
  }
}
