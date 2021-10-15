import { mockMethods } from 'aspida-mock'
import { DefineMethods } from '../../../src'

export type Methods = DefineMethods<{
  get: {
    query?: { aa?: number }
    reqHeaders?: {}
    resBody: { id: number }
  }

  post: {
    query: { aa: number }
    reqFormat: URLSearchParams
    reqBody?: { name: string }
    resBody: { id: number }
  }
}>

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resBody: { id: query.aa } } : { status: 403 }),
  post: ({ reqBody }) => (reqBody?.name ? { status: 204, resBody: { id: 11 } } : { status: 500 })
})
