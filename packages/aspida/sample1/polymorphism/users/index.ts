export interface Methods {
  post: {
    query?: { count: number }
    reqFormat: FormData
    polymorph: [
      { reqBody: { id: number }; resBody: { id: number } },
      { reqBody: { id: number }[]; resBody: { id: number }[] },
      {}
    ]
  }

  patch: {
    reqBody: { id: number }
  }

  put: {
    resBody: { id: number }
    polymorph: [
      { query: { type: 'object' }; reqBody: { id: number } },
      { query: { type: 'array' }; reqBody: { id: number }[] }
    ]
  }

  delete: {
    reqBody?: { id: number }
    polymorph: [{ reqHeaders: { token: string }; resHeaders: { token: string } }, { status: 204 }]
  }
}
