import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query?: { aa?: number }
    resData: { id: number }
  }

  post: {
    query: { aa: number }
    reqData?: { name: string }
    resData: { id: number }
  }

  put: {
    query: { aa: number }
    resData: { id: number }
  }

  delete: {
    query: { aa: number }
    resData: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) =>
    query?.aa
      ? { status: 200, resData: { id: query.aa }, resHeaders: { token: 'aaa' } }
      : { status: 403 },
  delete: ({ query }) => (query.aa ? { status: 204, resData: { id: 11 } } : { status: 500 })
})
