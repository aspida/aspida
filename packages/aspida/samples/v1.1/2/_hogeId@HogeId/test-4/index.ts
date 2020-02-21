export interface Methods {
  get: {
    query: { aa?: number }
  }

  post: {
    query?: { aa: number }
    reqBody?: { name: string }
  }

  put: {
    query?: { aa: number }
    resBody: { id: number }
  }

  delete: {
    query: { aa: number }
    resBody: { id: number }
  }
}
