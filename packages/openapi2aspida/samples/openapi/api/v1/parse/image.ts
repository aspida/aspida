/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  post: {
    status: 200

    resBody: {
      imageId: number
    }

    reqFormat: FormData

    reqBody?: {
      file: Blob
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { imageId: 1 } })
})
