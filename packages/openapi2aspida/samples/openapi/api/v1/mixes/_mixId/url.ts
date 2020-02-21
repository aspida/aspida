/* eslint-disable */
export interface Methods {
  post: {
    reqBody?: {
      url: string
      published?: boolean
      enableImage?: boolean
    }
  }
}

export default {
  post: () => ({ status: 200 })
}
