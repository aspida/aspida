/* eslint-disable */
import * as Types from '../../../../@types'

export interface Methods {
  get: {
    query: {
      token: string
      offset?: number
      limit?: number
    }

    resBody: {
      count: number
      data: Types.ModelCard[]
    }
  }
}
