/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    resBody: Types.ApiResponse
    reqFormat: FormData

    reqBody?: {
      additionalMetadata?: string
      file?: Blob
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { code: 1, type: 'a', message: 'a' } })
})
