/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    resBody: Types.ApiResponse

    reqFormat: FormData

    reqBody?: {
      additionalMetadata?: string
      file?: ArrayBuffer
    }
  }
}
