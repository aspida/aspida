/* eslint-disable */
import * as Types from '../../../../@types'

export interface Methods {
  get: {
    query: {
      token: string
      offset?: number
      limit?: number
    }

    resData: {
      count: number
      data: Types.ModelCard[]
    }
  }
}
