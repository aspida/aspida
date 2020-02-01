/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  get: {
    resData: Types.Pet
  }

  post: {
    reqType: URLSearchParams

    reqData?: {
      name?: string
      status?: string
    }
  }

  delete: {
    reqHeaders?: {
      api_key?: string
    }
  }
}
