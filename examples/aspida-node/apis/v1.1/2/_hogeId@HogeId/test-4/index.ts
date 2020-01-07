export interface Methods {
  get: {
    params: { aa?: number }
  }

  post: {
    params?: { aa: number }
    data?: { name: string }
  }

  put: {
    params?: { aa: number }
    response: { id: number }
  }

  delete: {
    params: { aa: number }
    response: { id: number }
  }
}
