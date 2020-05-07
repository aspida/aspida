export type Methods = {
  get: {
    query: {
      id: number
    }

    resBody: { id: number }
  }

  post: {
    query: {
      id: number
    }

    reqFormat: FormData

    reqBody: {
      name: string
      file: File
    }

    resBody: {
      id: number
    }
  }
}
