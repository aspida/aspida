import { IsNumberString, IsBooleanString, IsPort, IsEmpty } from 'class-validator'

export class ValidQuery {
  @IsNumberString()
  id!: string

  @IsBooleanString()
  disable!: string
}

export class ValidBody {
  @IsPort()
  port!: string

  @IsEmpty()
  file!: File
}

export type Methods = {
  get: {
    query: ValidQuery
    resBody?: { id: number }
  }

  post: {
    query: ValidQuery
    reqFormat: FormData
    reqBody: ValidBody
    resBody: {
      id: number
      port: string
    }
  }
}
