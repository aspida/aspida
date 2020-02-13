import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query: { val: number }
    reqHeaders: { 'content-type': string }
    reqBody: { name: string }
    reqFormat: FormData
    resHeaders: { token: string }
    resBody: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) =>
    query.val
      ? { status: 200, resBody: { id: query.val }, resHeaders: { token: 'aaa' } }
      : { status: 403 }
})
