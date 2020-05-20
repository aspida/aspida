import { IsNumberString, IsBooleanString, IsPort } from 'class-validator'

export class ValidQuery {
  @IsNumberString()
  id: string

  @IsBooleanString()
  disable: string
}

export class ValidBody {
  @IsPort()
  port: string

  file: File
}

export type Methods = {
  get: {
    query?: ValidQuery
    status: 200
    resBody?: { id: number }
  }

  post: {
    query: ValidQuery
    reqFormat: FormData
    reqBody: ValidBody
    resBody: {
      id: number
      port: string
      fileName: string
    }
  }
}
