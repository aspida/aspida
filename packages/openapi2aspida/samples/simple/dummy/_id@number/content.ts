/* eslint-disable */
export type Methods = {
  put: {
    status: 202
    resBody: string
  }
}

export default {
  put: () => ({ status: 202, resBody: 'a' })
}
