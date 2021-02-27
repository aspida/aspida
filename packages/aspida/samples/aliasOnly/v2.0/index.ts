export interface Methods {
  get: {
    query: { val: string }
    reqHeaders: { 'content-type': string }
    reqFormat: FormData
    resHeaders: { token: string }
    resBody: string
    status: 200 | 204
  }
}
