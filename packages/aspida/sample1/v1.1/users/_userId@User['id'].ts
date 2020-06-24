import { mockMethods } from 'aspida-mock'

export type Methods = {
  get: {
    query: { aa?: number }
    reqHeaders: {}
    resBody: { id: number }
  }

  post: {
    query: { aa: number }
    resBody: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query.aa ? { status: 200, resBody: { id: query.aa } } : { status: 403 }),
  post: ({ query }) => (query.aa ? { status: 204, resBody: { id: 11 } } : { status: 500 })
})
