import { mockMethods } from 'aspida-mock'

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

export default mockMethods<Methods>({
  get: ({ query }) =>
    query.val
      ? { status: 200, resData: { id: query.val }, resHeaders: { token: 'aaa' } }
      : { status: 403 }
})
