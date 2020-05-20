/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      ok: boolean
    }

    reqBody?: {
      formattedText?: string
    }
  }
}

export default mockMethods<Methods>({
  post: () => ({ status: 200, resBody: { ok: true } })
})
