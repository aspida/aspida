export interface Methods {
  put: {
    reqBody?: {
      name: string
      title?: string
    }
  }
}

export default {
  put: () => ({ status: 200 })
}
