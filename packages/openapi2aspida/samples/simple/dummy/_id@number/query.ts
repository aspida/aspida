/* eslint-disable */
export type Methods = {
  put: {
    query?: {
      q?: string
    }

    status: 202
  }
}

export default {
  put: () => ({ status: 202 })
}
