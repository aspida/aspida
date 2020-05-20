/* eslint-disable */
export type Methods = {
  get: {
    query?: {
      q?: string
    }

    status: 202
  }
}

export default {
  get: () => ({ status: 202 })
}
