/* eslint-disable */
export type AccountWithToken_yaml = {
  account?: Account | undefined
  token?: string | undefined
}

export type Account = {
  id: string
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  profile: AccountProfile
  workHistories?: WorkHistory[] | undefined
  academicHistories: AcademicHistory[]
  emailVerificationToken?: string | undefined
  lastNotificationReadAt?: string | undefined
}

/** STIを使って実装する */
export type AccountProfile = {
  id: string
  firstName: string
  lastName: string
  firstNameKana: string
  lastNameKana: string
  gender: 'MALE' | 'FEMALE' | 'OTHER'
  phone: string
  postalCode?: string | undefined
  address?: string | undefined
  dateOfBirth: string
  biography?: string | undefined
}

/** dateの日付は月初で統一 */
export type WorkHistory = {
  id: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  occupation: Occupation
  industry: Industry
  position: string
  annualIncome: number
  managementExperience: number
  jobSummary?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  name: string
}

/** dateの日付は月初で統一 */
export type AcademicHistory = {
  id: string
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

/** 職種 */
export type Occupation = {
  id: string
  name: string
}

/** 業種 */
export type Industry = {
  id: string
  name: string
}

export type _sign_in_account = {
  email: string
  password: string
}

export type Inline_object = {
  account?: _sign_in_account | undefined
}

export type Inline_object_1 = {
  account?: _sign_in_account | undefined
}
