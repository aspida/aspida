import { mockMethods } from 'aspida-mock'
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

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { code: 1, type: 'a', message: 'a' } })
})
