export interface Methods {
  get: {
    query: { aa?: number }
  }

  post: {
    query?: { aa: number }
    reqData?: { name: string }
  }

  put: {
    query?: { aa: number }
    resData: { id: number }
  }

  delete: {
    query: { aa: number }
    resData: { id: number }
  }
}
