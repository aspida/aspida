// prettier-ignore
import { AspidaMethods } from 'aspida-v2'
/**
 * _fugaId comment
 */
export type Methods = AspidaMethods<{
  get: {
    req: { query?: { aa?: number } }
    // eslint-disable-next-line
    res: { body: { id: number } }
    // eslint-disable-next-line
  }

  post: {
    req: {
      query: { aa: number }
      body?: { name: string }
    }
    res: { body: { id: number } }
  }

  put: {
    req: { query: { aa: number } }
    res: { body: { id: number } }
  }

  /**
   * _fugaId delete method
   */
  delete: {
    req: { query: { aa: number } }
    /**
     * _fugaId resBody
     */
    res: { body: { id: number } }
  }
}>
