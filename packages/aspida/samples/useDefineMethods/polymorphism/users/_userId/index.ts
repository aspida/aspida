import { DefineMethods } from '../../../../../src'

type User = {
  id: number
  name: string
  icon: File
}

export type Methods = DefineMethods<{
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

  post: {
    reqFormat: FormData
    polymorph: [
      {
        reqBody: Omit<User, 'id'>
        resBody: User
      },
      {
        reqBody: Omit<User, 'id'>[]
        resBody: User[]
      }
    ]
  }
}>
