export interface Methods {
  get: {
    params?: { aa?: number }
    headers: {}
    response: { id: number }
  }

  post: {
    params: { aa: number }
    data?: { name: string }
    response: { id: number }
  }
}
