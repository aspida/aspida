/* eslint-disable */
// prettier-ignore
import { AspidaMethods } from 'aspida-v2'
/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
export type Methods = AspidaMethods<{
  /**
   * get method comment
   *
   * @remarks
   * get method remarks comment
   */
  get: {
    req: {
      headers?:
        | {
            'access-token': string
          }
        | {
            'x-auth-token': string
          }
      query?: { aa: number }
    }
    res:
      | {
          status: 200
          headers: {}
          body: FormData
        }
      | {
          status: 201
          headers: {}
        }
    err:
      | {
          status: 402
          headers: {}
          body: { message: string }
        }
      | {
          status: 405
          headers: {}
          body: { message: string }
        }
  }

  post: {
    req: {
      headers?: {
        'access-token': string
      } & {
        'x-auth-token': string
      }
      query: { aa: number }
      /** body comment */
      body: { val: number }
    }
    res: {
      body: ArrayBuffer
    }
  }

  /**
   * put method comment
   */
  put: {
    req: {
      /**
       * query comment
       */
      query: { aa: number }
    }
    res: {
      status: 200
      /** returns comment */
      body?: { aa: number }
      headers: { token: string }
    }
  }

  delete: {
    req: {
      query: { aa: number }
    }
    res: {
      status: 202
      headers?: { token: string }
    }
  }
}>
