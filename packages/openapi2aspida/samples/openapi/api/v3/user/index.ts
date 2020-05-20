/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200
    resBody: Types.UserInfo[]
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: [{ id: 1, username: 'a', email: 'a', avatar: 'a', url: 'a' }] })
})
