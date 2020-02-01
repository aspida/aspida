/* eslint-disable */
export interface Methods {
  post: {
    resData: {
      imageId: number
    }

    reqType: FormData

    reqData?: {
      file: ArrayBuffer
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}
