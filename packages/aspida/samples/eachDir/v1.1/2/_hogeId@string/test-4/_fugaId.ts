/**
 * _fugaId comment
 */
export type Methods = {
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

  /**
   * _fugaId delete method
   */
  delete: {
    query: { aa: number }
    /**
     * _fugaId resBody
     */
    resBody: { id: number }
  }
}
