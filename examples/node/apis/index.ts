export interface Methods {
  get: {
    params: { aa?: number }
    response: { id: number }
  }

  post: {
    params: { aa: number }
    data?: { name: string }
    response: { id: number }
  }

  put: {
    params: { aa: number }
    response: { id: number }
  }

  delete: {
    params: { aa: number }
    response: { id: number }
  }
}
