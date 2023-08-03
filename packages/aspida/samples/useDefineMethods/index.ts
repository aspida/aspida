/* eslint-disable */
import { mockMethods } from 'aspida-mock';
import { DefineMethods } from '../../src';

// prettier-ignore
export type Methods = DefineMethods<{
  get: {
    reqHeaders?:
      | {
          'access-token': string
        }
      | {
          'x-auth-token': string
        }
    query?: { aa: number };
    resBody: FormData
  };

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
    resBody: ArrayBuffer;
  }

  put: {
    query: { aa: number }
    status: 200
    resBody?: { aa: number }
    resHeaders: { token: string }
  }

  delete: {
    query: { aa: number }
    status: 202
    resHeaders?: { token: string }
  }
}>

export default mockMethods<Methods>({
  get: ({ query }) => (query?.aa ? { status: 200, resBody: new FormData() } : { status: 403 }),
  post: ({ reqBody }) => (reqBody ? { status: 200, resBody: new ArrayBuffer(1) } : { status: 500 }),
  put: () => ({ status: 200, resHeaders: { token: 'aaa' } }),
  delete: () => ({ status: 202, resBody: undefined }),
});
