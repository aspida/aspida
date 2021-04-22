/* eslint-disable */
// prettier-ignore
/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
export type Methods = {
  /**
   * get method comment
   * 
   * @remarks
   * get method remarks comment
   */
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
    /** body comment */
    reqBody: { val: number }
    resBody: ArrayBuffer;
  }

  /**
   * put method comment
   */
  put: {
    /**
     * query comment
     */
    query: { aa: number }
    status: 200
    /** returns comment */
    resBody?: { aa: number }
    resHeaders: { token: string }
  }

  delete: {
    query: { aa: number }
    status: 202
    resHeaders?: { token: string }
  }
}
