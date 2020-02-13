/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  get: {
    resBody: Types.Pet
  }

  post: {
    reqFormat: URLSearchParams

    reqBody?: {
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
