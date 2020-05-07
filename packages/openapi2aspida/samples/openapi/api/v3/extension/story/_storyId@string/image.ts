/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken

    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody?: {
      file: ArrayBuffer
      caption?: string
      headline?: string
      text?: string
      published?: boolean
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { id: 'a' } })
})
