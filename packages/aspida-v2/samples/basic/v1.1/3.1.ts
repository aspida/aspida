import { AspidaMethods } from 'aspida-v2'

/**
 * 3.1 comment
 */
export type Methods = AspidaMethods<{
  /**
   * 3.1 get method comment
   */
  get: {
    req: {
      query?: { aa?: number }
      /**
       * 3.1 reqHeaders
       */
      headers?: {}
    }
    res: {
      body: { id: number }
    }
  }
  post: {
    req: {
      query: { aa: number }
      format: URLSearchParams
      body?: { name: string }
    }
    res: {
      body: { id: number }
    }
  }
}>
