/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 204
    reqFormat: FormData

    reqBody?: {
      screenName?: string
      url?: string
      image?: Blob
      imageId?: string
    }
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 204 })
})
