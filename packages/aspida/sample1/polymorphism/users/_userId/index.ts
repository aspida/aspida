export interface Methods {
  get: {
    polymorph: [
      { reqBody: { id: number }; resBody: string; status: 200 },
      {
        reqBody: { id: string }
        resBody: string
        resHeaders: { token: string }
      }
    ]
  }
}
