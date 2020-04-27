/* eslint-disable */
import * as Types from '../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader

    resBody: {
      state?: 'no_update' | 'force_update'
      link?: string
    }
  }
}

export default {
  get: () => ({ status: 200, resBody: { state: 'no_update', link: 'a' } })
}
