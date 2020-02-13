import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query?: { aa: number }
    resBody: { aa: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resBody: query } : { status: 403 })
})
