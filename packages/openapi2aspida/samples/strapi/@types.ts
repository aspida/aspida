/* eslint-disable */
export type Users_PermissionsRole = {
  id: string
  name: string
  description?: string
  type?: string
  permissions?: {
    id: string
    type: string
    controller: string
    action: string
    enabled: boolean
    policy?: string
    role?: string
  }[]
  users?: {
    id: string
    username: string
    email: string
    provider?: string
    password?: string
    resetPasswordToken?: string
    confirmed?: boolean
    blocked?: boolean
    role?: string
  }[]
}

export type NewUsers_PermissionsRole = {
  name: string
  description?: string
  type?: string
  permissions?: string[]
  users?: string[]
}

export type Users_PermissionsUser = {
  id: string
  username: string
  email: string
  provider?: string
  confirmed?: boolean
  blocked?: boolean

  role?: {
    id: string
    name: string
    description?: string
    type?: string
    permissions?: string[]
    users?: string[]
  }
}

export type NewUsers_PermissionsUser = {
  username: string
  email: string
  provider?: string
  password?: string
  resetPasswordToken?: string
  confirmed?: boolean
  blocked?: boolean
  role?: string
}

export type Error = {
  code: number
  message: string
}
