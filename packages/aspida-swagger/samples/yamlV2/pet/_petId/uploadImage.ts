/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    resData: Types.ApiResponse

    reqType: FormData

    reqData: {
      additionalMetadata: string
      file: ArrayBuffer
    }
  }
}
