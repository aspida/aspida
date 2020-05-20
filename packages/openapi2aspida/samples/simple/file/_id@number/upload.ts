/* eslint-disable */
export type Methods = {
  post: {
    query?: {
      path?: string
    }

    status: 204
    reqBody?: Blob
  }
}

export default {
  post: () => ({ status: 204 })
}
