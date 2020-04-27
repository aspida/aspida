/* eslint-disable */
export type Methods = {
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
