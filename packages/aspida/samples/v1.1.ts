import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {// test
    query?: { aa: number/*
    test { aa }
    */}
    resBody: { aa: number }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resBody: query } : { status: 403 })
})
