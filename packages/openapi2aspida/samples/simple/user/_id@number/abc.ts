/* eslint-disable */
export type Methods = {
  get: {
    query?: {
      q?: string
    }
  }
}

export default {
  get: () => ({ status: 200 })
}
