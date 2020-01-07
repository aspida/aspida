export interface Methods {
  get: {
    query: { val: number }
    reqHeaders: { 'content-type': string }
    reqData: { name: string }
    reqType: FormData
    resHeaders: { token: string }
    resData: { id: number }
  }
}
