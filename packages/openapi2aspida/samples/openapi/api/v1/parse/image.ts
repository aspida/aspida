/* eslint-disable */
export interface Methods {
  post: {
    resBody: {
      imageId: number
    }

    reqFormat: FormData

    reqBody?: {
      file: ArrayBuffer
      rightholder?: string
      statusCopyright?: 'unknown' | 'cc' | 'licensed' | 'sublicensed'
    }
  }
}
