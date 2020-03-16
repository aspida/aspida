/* eslint-disable */
export type AppIdHeader = {
  'x-tchop-app-id': string
}

export type AppPlatformHeader = {
  'x-tchop-app-platform': 'android' | 'ios' | 'android-hockey' | 'ios-hockey'
}

export type AppVersionHeader = {
  'x-tchop-app-version': string
}

export type UserTokenHeader = {
  'x-tchop-token': string
}

export type AppOrganisationToken = {
  'x-tchop-app-organisation-token'?: string
}

export type UserPublicKey = {
  'x-tchop-user-public-key'?: string
}

export type UserSignedChallenge = {
  'x-tchop-user-signed-challenge'?: string
}

export type AppOrganisationTokenRequired = {
  'x-tchop-app-organisation-token': string
}

export type UserInstanceIdHeader = {
  'x-tchop-firebase-instance-id'?: string
}

export type ErrorModel = {
  code: string
  message: string
  messageCode?: string
}

export type ErrorValidationModel = {
  code: string
  errors: {
    code: string
    key: string
    message: string
  }[]
  message: string
}

export type UserInfo = {
  id: number
  username: string
  email: string
  avatar?: string
  url: string
}

export type UserSettings = {
  isAppLocked: boolean
}

export type OrganisationModel = {
  name: string
  subdomain: string
  locale: string
  androidStoreLink?: string
  androidAppId?: string
  androidHokeyStoreLink?: string
  androidAppHokeyId?: string
  iosStoreLink?: string
  iosAppId?: string
  iosHokeyStoreLink?: string
  iosAppHokeyId?: string
  fcmServerKeyId?: number
  allowToStoreOriginalImageFile: string
  twoFactorForce: string
  sessionExpirationTime: string
  appLockEnabled: boolean
  id: number
  uuid: string
  created: string
  isSystem: boolean
  pinnedStoryId: number
  hasPinnedMixes: boolean
}

export type BaseMixModel = {
  id: number
  title: string
  subtitle: string
  created: string
  updated: string
  ticker: boolean
  readOnly: boolean
  shareUrl: string
  previewUrl: string
  includeInNewsFeed: boolean
  displayItemUpdatedTime?: string
  image?: ImageModel
}

export type ModelMixV3 = BaseMixModel & {
  cards: ModelCard[]
  itemsNum: number
}

export type ImageModel = {
  id: number
  statusCopyright: number
  rightholder: string
  thumb: string
  status: 'ok' | 'processing' | 'error'
  url?: string
}

export type AudioModel = {
  id: number
  url?: string
  thumb: string
  originalThumb?: string
  status: string
  duration?: number
  width?: number
  height?: number
}

export type ModelCard = {
  id: number
  type: CardEnumModel
  createdByLabel?: string
  created: string
  postedTime: string
  updated: string
  published: boolean
  position?: number
  headline?: string
  quotePerson?: string
  quotePersonHandle?: string
  quote?: string
  title?: string
  sourceName?: string
  url?: string
  abstract?: string
  image?: ImageModel
  audio?: AudioModel
  styles?: CardStyleModel
  author?: CardAuthorModel
}

export type CardAuthorModel = {
  type: 'curate-backend' | 'api'
  name: string
  email?: string
  image?: ImageModel
}

export type ReactionEnumModel = 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'

export type CardEnumModel = 'article' | 'image' | 'video' | 'quote' | 'editorial' | 'audio'

export type ReactionCountModel = {
  like?: number
  love?: number
  haha?: number
  wow?: number
  sad?: number
  angry?: number
}

export type MediaEXIFModel = {
  gps?: {
    x: number
    y: number
  }
}

export type CardStyleModel = {
  showAuthor?: boolean
  teaserStyle?: 'standard' | 'small_with_text' | 'small_without_text' | 'big_without_text'
}

export type QuoteModel = {
  quotePerson?: string
  quotePersonHandle?: string
  quote?: string
  quoteSource?: string
  image?: string
  quotePersonImage?: string
  quoteCreated?: string
}

export type ArticleModel = {
  title?: string
  abstract?: string
  sourceName?: string
  image?: string
}
