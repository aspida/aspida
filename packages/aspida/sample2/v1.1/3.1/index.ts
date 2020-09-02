/**
 * 3.1 comment
 */
export type Methods = {
  /**
   * 3.1 get method comment
   */
  get: {
    query?: { aa?: number }
    /**
     * 3.1 reqHeaders
     */
    reqHeaders?: {}
    resBody: { id: number }
  }

  post: {
    query: { aa: number }
    reqFormat: URLSearchParams
    reqBody?: { name: string }
    resBody: { id: number }
  }
}
