import { mockMethods } from 'aspida-mock'

export type Methods = {
  get: {
    query?: { aa?: number }
    resBody: { id: number }
  }

  post: {
    query: { aa: number }
    reqBody?: { name: string }
    resBody: { id: number }
  }

  put: {
    query: { aa: number }
    resBody: { id: number }
  }

  delete: {
    query: { aa: number }
    resBody: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) =>
    query?.aa
      ? { status: 200, resBody: { id: query.aa }, resHeaders: { token: 'aaa' } }
      : { status: 403 },
  delete: ({ query }) => (query.aa ? { status: 204, resBody: { id: 11 } } : { status: 500 })
})
