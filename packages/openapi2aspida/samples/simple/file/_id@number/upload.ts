/* eslint-disable */
export type Methods = {
  post: {
    query?: {
      path?: string
    }

    reqBody?: Blob
  }
}

export default {
  post: () => ({ status: 200 })
}
