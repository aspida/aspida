/* eslint-disable */
import * as Types from '../../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resBody: {
      ok: boolean
    }

    reqBody?: {
      formattedText?: string
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { ok: true } })
}
