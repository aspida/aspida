import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query?: { aa: number }
    resData: { aa: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resData: query } : { status: 403 })
})
