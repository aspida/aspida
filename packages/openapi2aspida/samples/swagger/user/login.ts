/* eslint-disable */
export interface Methods {
  get: {
    query: {
      username: string
      password: string
    }

    resData: string

    resHeaders: {
      'X-Expires-After': string
      'X-Rate-Limit': number
    }
  }
}
