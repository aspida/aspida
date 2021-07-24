import { AspidaMethods } from 'aspida-v2'

/* eslint-disable */
// prettier-ignore
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
      query?: { aa: number };
      headers?: |{
          'access-token': string
        }
|{
          'x-auth-token': string
        }
    }
    res: {
      body: FormData
    }
  }
  post: {
    req: {
      query: { aa: number }
      headers?: &{
          'access-token': string
        }
&{
          'x-auth-token': string
        }
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
      headers: { token: string }
      /** returns comment */
      body?: { aa: number }
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
