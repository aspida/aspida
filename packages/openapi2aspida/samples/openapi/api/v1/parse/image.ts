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

export default {
  post: () => ({ status: 200, resBody: { imageId: 1 } })
}
