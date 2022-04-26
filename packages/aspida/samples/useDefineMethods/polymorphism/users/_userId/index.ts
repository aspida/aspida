import { DefineMethods } from '../../../../../src'

type User = {
  id: number
  name: string
  // icon: File
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
    /**
     * query(?): ...
     * reqHeaders(?): ...
     * reqBody(?): ...
     * status: ...
     * resHeaders(?): ...
     * resBody(?): ...
     */
    polymorph: [
      // polymorphic types
      {
        reqBody: Omit<User, 'id'>
        resBody: User
        /**
         * query(?): ...
         * reqHeaders(?): ...
         * status: ...
         * resHeaders(?): ...
         */
      },
      {
        reqBody: Omit<User, 'id'>[]
        resBody: User[]
      }
    ]
  }

  patch: {
    reqFormat: FormData
    reqBody: { a: File }
  }
}>
