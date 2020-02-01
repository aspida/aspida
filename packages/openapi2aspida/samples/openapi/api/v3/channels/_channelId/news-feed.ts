/* eslint-disable */
import * as Types from '../../../../@types'

export interface Methods {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      timestamp?: number
      offset?: number
      limit?: number
      reverse?: boolean
    }

    resData: {
      count: number
      data: Types.ModelCard & {
        author?: {
          type?: string
          name?: string
          image?: Types.ImageModel
        }
        storyId?: number
        reactions?: Types.ReactionCountModel & {
          myReaction?: Types.ReactionEnumModel
        }
      }[]
    }
  }
}
