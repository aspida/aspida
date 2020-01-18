import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query: { aa?: number }
    reqHeaders: {}
    resData: { id: number }
  }

  post: {
    query: { aa: number }
    resData: { id: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query.aa ? { status: 200, resData: { id: query.aa } } : { status: 403 }),
  post: ({ query }) => (query.aa ? { status: 204, resData: { id: 11 } } : { status: 500 })
})
