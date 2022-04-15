/* eslint-disable */
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

export type Applicant = {
  id: string
  recruitment: Recruitment
  account: Account
  /** 採用側の場合のみ存在、未対応, 対応中, 対応済み, 採用・契約締結済み */
  managementStatus: 'backlog' | 'in_progress' | 'closed' | 'signed'
  createdAt?: string | undefined
  updatedAt?: string | undefined
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

/** STIを使って実装する */
export type CompanyNotification = {
  id: string
  content: string
  createdAt: string
  /** 「未読」「既読」 */
  isRead: boolean
}

export type Employee = {
  id: string
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  emailVerificationToken?: string | undefined
  lastNotificationReadAt?: string | undefined
}

/** STIを使って実装する */
export type EmployeeProfile = {
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

export type Prefecture = {
  id: string
  name: string
}

/** 業種カテゴリー */
export type IndustryCategory = {
  id: string
  name: string
  industries?: Industry[] | undefined
}

/** 業種 */
export type Industry = {
  id: string
  name: string
}

/** 職種 */
export type Occupation = {
  id: string
  name: string
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

/** 職種「中項目」 */
export type OccupationSubCategory = {
  id: string
  name: string
  occupations?: Occupation[] | undefined
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

export type Inline_response_200 = {
  companies?: Company[] | undefined
}

export type _companies_company = {
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
  featureIds?: string[] | undefined
  businessSummary: string
  corporatePr?: string | undefined
  /** 画像も投稿したい時はform-dataで投げて */
  coverImage?: string | undefined
  /** 画像も投稿したい時はform-dataで投げて */
  logo?: string | undefined
}

export type Inline_object = {
  company?: _companies_company | undefined
}

export type _companies__id__company = {
  name?: string | undefined
  nameKana?: string | undefined
  headOfficeLocation?: string | undefined
  yearOfEstablishment?: string | undefined
  hpUrl?: string | undefined
  phone?: string | undefined
  capital?: number | undefined
  isListed?: boolean | undefined
  representative?: string | undefined
  representativeKana?: string | undefined
  netSales?: string | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  featureIds?: string[] | undefined
  businessSummary?: string | undefined
  corporatePr?: string | undefined
  /** 画像も投稿したい時はform-dataで投げて */
  logo?: string | undefined
  /** 画像も投稿したい時はform-dataで投げて */
  coverImage?: string | undefined
}

export type Inline_object_1 = {
  company?: _companies__id__company | undefined
}

export type Inline_response_200_1 = {
  recruitments?: Recruitment[] | undefined
}

export type _companies__company_id__recruitments_recruitment = {
  title: string
  occupationId?: string | undefined
  industryId?: string | undefined
  workplaceId?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  status: 'active' | 'inactive' | 'draft'
}

export type Inline_object_2 = {
  recruitment?: _companies__company_id__recruitments_recruitment | undefined
}

export type _recruitments__id__recruitment = {
  title?: string | undefined
  departmentId?: string | undefined
  occupationId?: string | undefined
  industryId?: string | undefined
  workplaceId?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  isPublic?: boolean | undefined
  status?: 'active' | 'inactive' | 'draft' | undefined
  employmentStatusIds?: string[] | undefined
}

export type Inline_object_3 = {
  recruitment?: _recruitments__id__recruitment | undefined
}

export type Inline_response_200_2 = {
  applicants?: Applicant[] | undefined
}

export type _applicants__id__applicant = {
  /** 未対応, 対応中, 対応済み, 採用・契約締結済み */
  managementStatus?: 'backlog' | 'in_progress' | 'closed' | 'signed' | undefined
}

export type Inline_object_4 = {
  applicant?: _applicants__id__applicant | undefined
}

export type Inline_response_200_3 = {
  rooms?: Room[] | undefined
}

export type _companies__company_id__rooms_room = {
  accountId: string
}

export type Inline_object_5 = {
  room?: _companies__company_id__rooms_room | undefined
}

export type Inline_response_200_4 = {
  messages?: Message[] | undefined
}

export type _rooms__room_id__messages_message = {
  employeeId: string
  content: string
}

export type Inline_object_6 = {
  message?: _rooms__room_id__messages_message | undefined
}

export type Inline_response_200_5 = {
  notifications?: CompanyNotification[] | undefined
}

export type _employees__id__employee = {
  email?: string | undefined
}

export type Inline_object_7 = {
  employee?: _employees__id__employee | undefined
}

export type Inline_response_200_6 = {
  employees?: Employee[] | undefined
}

export type _companies__company_id__employees_employee = {
  email?: string | undefined
  password?: string | undefined
}

export type Inline_object_8 = {
  employee?: _companies__company_id__employees_employee | undefined
}

export type _employees__employee_id__profile_profile = {
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

export type Inline_object_9 = {
  profile?: _employees__employee_id__profile_profile | undefined
}

export type _employees__employee_id__profile_profile_1 = {
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

export type Inline_object_10 = {
  profile?: _employees__employee_id__profile_profile_1 | undefined
}

export type Inline_response_200_7 = {
  occupationMainCategories?: OccupationMainCategory[] | undefined
}

export type Inline_response_200_8 = {
  prefectures?: Prefecture[] | undefined
}

export type Inline_response_200_9 = {
  industryCategories?: IndustryCategory[] | undefined
}
