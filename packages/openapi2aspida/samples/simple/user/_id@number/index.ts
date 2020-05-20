/* eslint-disable */
export type Methods = {
  get: {
    status: 202
  }

  patch: {
    status: 202
  }

  delete: {
    status: 202
  }
}

export default {
  get: () => ({ status: 202 }),
  patch: () => ({ status: 202 }),
  delete: () => ({ status: 202 })
}
