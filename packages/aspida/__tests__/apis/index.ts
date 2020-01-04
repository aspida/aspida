export interface Methods {
  get: {
    query: { aa?: number }
    resData: FormData
  }

  post: {
    query: { aa: number }
    reqData?: { name: string }
    resData: ArrayBuffer
  }

  put: {
    query: { aa: number }
    resData: string
  }

  delete: {
    query: { aa: number }
    resData: Blob
  }
}
