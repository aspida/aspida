/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: {
      id: string
      width?: number
      height?: number
    }

    reqFormat: FormData

    reqBody?: {
      file: ArrayBuffer
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { id: 'a', width: 1, height: 1 } })
}
