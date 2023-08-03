import { DefineMethods } from '../../../../../../src';

// prettier-ignore
export type Methods = DefineMethods<{
  get: {
    query?: { aa?: number }
    // eslint-disable-next-line
    resBody: { id: number },
    // eslint-disable-next-line
  },

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
}>
