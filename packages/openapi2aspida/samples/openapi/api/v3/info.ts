/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      state?: 'no_update' | 'force_update'
      link?: string
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { state: 'no_update', link: 'a' } })
})
