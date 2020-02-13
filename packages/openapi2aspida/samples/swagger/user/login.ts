/* eslint-disable */
export interface Methods {
  get: {
    query: {
      username: string
      password: string
    }

    resBody: string

    resHeaders: {
      'X-Expires-After': string
      'X-Rate-Limit': number
    }
  }
}
