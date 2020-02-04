import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query?: { aa: number }
    resData: FormData
  }

  post: {
    query: { aa: number }
    reqData: { val: number }
    resData: ArrayBuffer
  }

  put: {
    query: { aa: number }
    resData: { aa: number }
  }

  delete: {
    query: { aa: number }
    resData: Blob
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resData: new FormData() } : { status: 403 }),
  post: ({ reqData }) => (reqData ? { status: 200, resData: new ArrayBuffer(1) } : { status: 500 }),
  put: ({ query }) => ({ status: 200, resData: query })
})
