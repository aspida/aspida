import * as Types from '../../../../../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader &
      Types.AppPlatformHeader &
      Types.AppVersionHeader &
      Types.AppOrganisationToken &
      Types.UserInstanceIdHeader

    resBody: {
      action?: 'add' | 'remove' | 'replace'

      reactions?: Types.ReactionCountModel & {
        myReaction?: Types.ReactionEnumModel
      }

      previousStatus?: Types.ReactionEnumModel
      userType?: 'anonymous' | 'unique'
    }

    reqBody: {
      reaction?: Types.ReactionEnumModel
    }
  }
}

export default {
  post: () => ({
    status: 200,
    resBody: {
      action: 'add',
      reactions: { like: 1, love: 1, haha: 1, wow: 1, sad: 1, angry: 1, ...{ myReaction: 'like' } },
      previousStatus: 'like',
      userType: 'anonymous'
    }
  })
}
