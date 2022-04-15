/* eslint-disable */
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

export type Recruitment = {
  id: string
  title: string
  occupation?: Occupation | undefined
  industry?: Industry | undefined
  workplace?: Prefecture | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  company: Company
  status: 'active' | 'inactive' | 'draft'
}

export type InterestedList = {
  id: string
  name: string
  account: Account
  recruitments?: Recruitment[] | undefined
}

export type Company = {
  id: string
  name: string
  nameKana: string
  headOfficeLocation: string
  yearOfEstablishment: string
  hpUrl?: string | undefined
  phone?: string | undefined
  capital: number
  isListed: boolean
  representative: string
  representativeKana: string
  netSales?: string | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  businessSummary: string
  corporatePr?: string | undefined
  industries?: Industry[] | undefined
  coverImageUrl?: string | undefined
}

/** STIを使って実装する */
export type AccountNotification = {
  id: string
  content: string
  createdAt: string
  /** 「未読」「既読」 */
  isRead: boolean
}

export type Room = {
  id: string
  account: Account
  company: Company
}

export type Message = {
  id: string
  content: string
  account: Account
  room: Room
}

export type Applicant = {
  id: string
  recruitment: Recruitment
  account: Account
  /** 採用側の場合のみ存在、未対応, 対応中, 対応済み, 採用・契約締結済み */
  managementStatus: 'backlog' | 'in_progress' | 'closed' | 'signed'
  createdAt?: string | undefined
  updatedAt?: string | undefined
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

/** 職種「大項目」 */
export type OccupationMainCategory = {
  id: string
  name: string
  occupationSubCategories?: OccupationSubCategory[] | undefined
}

/** 業種カテゴリー */
export type IndustryCategory = {
  id: string
  name: string
  industries?: Industry[] | undefined
}

export type EmploymentStatus = {
  id: string
  name: string
}

export type Hope = {
  id: string
  /** 転職希望時期(Nヶ月以内) */
  timeToChangeJobs?: number | undefined
  annualIncome?: number | undefined
  workplace?: Prefecture | undefined
  occupations?: Occupation[] | undefined
  employmentStatuses?: EmploymentStatus[] | undefined
  account: Account
}

export type Prefecture = {
  id: string
  name: string
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

/** 職種「中項目」 */
export type OccupationSubCategory = {
  id: string
  name: string
  occupations?: Occupation[] | undefined
}

export type _accounts__id__account = {
  email?: string | undefined
}

export type Inline_object = {
  account?: _accounts__id__account | undefined
}

export type Inline_response_200 = {
  interestedLists?: InterestedList[] | undefined
}

export type _accounts__account_id__interested_lists_interested_list = {
  name: string
  recruitmentIds?: string[] | undefined
}

export type Inline_object_1 = {
  interestedList?: _accounts__account_id__interested_lists_interested_list | undefined
}

export type _interested_lists__id__interested_list = {
  name?: string | undefined
  recruitments?: Recruitment[] | undefined
}

export type Inline_object_2 = {
  interestedList?: _interested_lists__id__interested_list | undefined
}

export type Inline_response_200_1 = {
  followings?: Company[] | undefined
}

export type _accounts__account_id__followings_following = {
  companyId: string
}

export type Inline_object_3 = {
  following?: _accounts__account_id__followings_following | undefined
}

export type Inline_response_200_2 = {
  recruitments?: Recruitment[] | undefined
}

export type Inline_response_200_3 = {
  accountNotifications?: AccountNotification[] | undefined
}

export type Inline_response_200_4 = {
  rooms?: Room[] | undefined
}

export type Inline_object_4 = {
  room?: _accounts__account_id__followings_following | undefined
}

export type Inline_response_200_5 = {
  messages?: Message[] | undefined
}

export type _rooms__room_id__messages_message = {
  accountId: string
  content: string
}

export type Inline_object_5 = {
  message?: _rooms__room_id__messages_message | undefined
}

export type Inline_response_200_6 = {
  applicants?: Applicant[] | undefined
}

export type _accounts__account_id__applicants_applicant = {
  recruitmentId: string
}

export type Inline_object_6 = {
  applicant?: _accounts__account_id__applicants_applicant | undefined
}

export type _work_histories__id__work_history = {
  /** 「在職中」「離職中」 */
  isEmployed?: boolean | undefined
  occupationId?: string | undefined
  industryId?: string | undefined
  position?: string | undefined
  annualIncome?: number | undefined
  managementExperience?: number | undefined
  jobSummary?: string | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
  name?: string | undefined
}

export type Inline_object_7 = {
  workHistory?: _work_histories__id__work_history | undefined
}

export type _academic_histories__id__academic_history = {
  name?: string | undefined
  faculty?: string | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type?: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
}

export type Inline_object_8 = {
  academicHistory?: _academic_histories__id__academic_history | undefined
}

export type Inline_response_200_7 = {
  workHistories?: WorkHistory[] | undefined
}

export type _accounts__account_id__work_histories_work_history = {
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  occupationId: string
  industryId: string
  position: string
  annualIncome: number
  managementExperience: number
  jobSummary?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  name: string
}

export type Inline_object_9 = {
  workHistory?: _accounts__account_id__work_histories_work_history | undefined
}

export type Inline_response_200_8 = {
  academicHistories?: AcademicHistory[] | undefined
}

export type _accounts__account_id__academic_histories_academic_history = {
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school' | 'university' | 'vocational_school' | 'junior_college' | 'high_school'
}

export type Inline_object_10 = {
  academicHistory?: _accounts__account_id__academic_histories_academic_history | undefined
}

export type _accounts__account_id__profile_profile = {
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

export type Inline_object_11 = {
  profile?: _accounts__account_id__profile_profile | undefined
}

export type _accounts__account_id__profile_profile_1 = {
  firstName?: string | undefined
  lastName?: string | undefined
  firstNameKana?: string | undefined
  lastNameKana?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  phone?: string | undefined
  postalCode?: string | undefined
  address?: string | undefined
  dateOfBirth?: string | undefined
  biography?: string | undefined
}

export type Inline_object_12 = {
  profile?: _accounts__account_id__profile_profile_1 | undefined
}

export type Inline_response_200_9 = {
  occupationMainCategories?: OccupationMainCategory[] | undefined
}

export type Inline_response_200_10 = {
  industryCategories?: IndustryCategory[] | undefined
}

export type Inline_response_200_11 = {
  employmentStatuses?: EmploymentStatus[] | undefined
}

export type Inline_object_13 = {
  interestedList?: _accounts__account_id__applicants_applicant | undefined
}

export type Inline_response_200_12 = {
  companies?: Company | undefined
}

export type Inline_response_200_13 = {
  hopes?: Hope[] | undefined
}

export type _accounts__account_id__hopes_hope = {
  /** 何ヶ月以内に転職したいか */
  timeToChangeJob: number
  annualIncome: number
  type: 'career' | 'project'
  /** StateのID */
  workplaceId: string
  employmentStatusIds: string[]
  occupationIds: string[]
}

export type Inline_object_14 = {
  hope: _accounts__account_id__hopes_hope
}

export type _hopes__id__hope = {
  /** 何ヶ月以内に転職したいか */
  timeToChangeJob?: number | undefined
  annualIncome?: number | undefined
  type?: 'career' | 'project' | undefined
  /** StateのID */
  workplaceId?: string | undefined
  employmentStatusIds?: string[] | undefined
  occupationIds?: string[] | undefined
}

export type Inline_object_15 = {
  hope?: _hopes__id__hope | undefined
}

export type Inline_response_200_14 = {
  prefectures?: Prefecture[] | undefined
}
