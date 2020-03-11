/* eslint-disable */
import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    reqHeaders?:
      | {
          'access-token': string
        }
      | {
          'x-auth-token': string
        }
    query?: { aa: number }
    resBody: FormData
  }

  post: {
    'reqHeaders'?:
      & {
          'access-token': string
        }
      & {
          'x-auth-token': string
        }
    query: { aa: number }
    reqBody: { val: number }
    resBody: ArrayBuffer
  }

  put: {
    query: { aa: number }
    resBody: { aa: number }
  }

  delete: {
    query: { aa: number }
    resBody: Blob
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resBody: new FormData() } : { status: 403 }),
  post: ({ reqBody }) => (reqBody ? { status: 200, resBody: new ArrayBuffer(1) } : { status: 500 }),
  put: ({ query }) => ({ status: 200, resBody: query })
})
