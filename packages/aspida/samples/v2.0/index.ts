import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query: { val: string }
    reqHeaders: { 'content-type': string }
    reqFormat: FormData
    resHeaders: { token: string }
    resBody: string
  }
}

export default mockMethods<Methods>({
  get: ({ query }) =>
    query.val ? { status: 200, resBody: query.val, resHeaders: { token: 'aaa' } } : { status: 403 }
})
