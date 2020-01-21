/* eslint-disable */
export interface AppIdHeader {
  'x-tchop-app-id': string
}

export interface AppPlatformHeader {
  'x-tchop-app-platform': 'android' | 'ios' | 'android-hockey' | 'ios-hockey'
}

export interface AppVersionHeader {
  'x-tchop-app-version': string
}

export interface UserTokenHeader {
  'x-tchop-token': string
}

export interface AppOrganisationToken {
  'x-tchop-app-organisation-token': string
}

export interface UserPublicKey {
  'x-tchop-user-public-key': string
}

export interface UserSignedChallenge {
  'x-tchop-user-signed-challenge': string
}

export interface AppOrganisationTokenRequired {
  'x-tchop-app-organisation-token': string
}

export interface UserInstanceIdHeader {
  'x-tchop-firebase-instance-id': string
}

export interface ErrorModel {
  code: string
  message: string
  messageCode: string
}

export interface ErrorValidationModel {
  code: string
  errors: {
    code: string
    key: string
    message: string
  }[]
  message: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  avatar: string
  url: string
}

export interface UserSettings {
  isAppLocked: boolean
}

export interface OrganisationModel {
  name: string
  subdomain: string
  locale: string
  androidStoreLink: string
  androidAppId: string
  androidHokeyStoreLink: string
  androidAppHokeyId: string
  iosStoreLink: string
  iosAppId: string
  iosHokeyStoreLink: string
  iosAppHokeyId: string
  fcmServerKeyId: number
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

export interface BaseMixModel {
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
  displayItemUpdatedTime: string
  image: ImageModel
}

export interface ModelMixV3 extends BaseMixModel {
  cards: ModelCard[]
  itemsNum: number
}

export interface ImageModel {
  id: number
  statusCopyright: number
  rightholder: string
  thumb: string
  status: 'ok' | 'processing' | 'error'
  url: string
}

export interface AudioModel {
  id: number
  url: string
  thumb: string
  originalThumb: string
  status: string
  duration: number
  width: number
  height: number
}

export interface ModelCard {
  id: number
  type: CardEnumModel
  createdByLabel: string
  created: string
  postedTime: string
  updated: string
  published: boolean
  position: number
  headline: string
  quotePerson: string
  quotePersonHandle: string
  quote: string
  title: string
  sourceName: string
  url: string
  abstract: string
  image: ImageModel
  audio: AudioModel
  styles: CardStyleModel
  author: CardAuthorModel
}

export interface CardAuthorModel {
  type: 'curate-backend' | 'api'
  name: string
  email: string
  image: ImageModel
}

export type ReactionEnumModel = 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'

export type CardEnumModel = 'article' | 'image' | 'video' | 'quote' | 'editorial' | 'audio'

export interface ReactionCountModel {
  like: number
  love: number
  haha: number
  wow: number
  sad: number
  angry: number
}

export interface MediaEXIFModel {
  gps: {
    x: number
    y: number
  }
}

export interface CardStyleModel {
  showAuthor: boolean
  teaserStyle: 'standard' | 'small_with_text' | 'small_without_text' | 'big_without_text'
}

export interface QuoteModel {
  quotePerson: string
  quotePersonHandle: string
  quote: string
  quoteSource: string
  image: string
  quotePersonImage: string
  quoteCreated: string
}

export interface ArticleModel {
  title: string
  abstract: string
  sourceName: string
  image: string
}
