/* eslint-disable */
export interface Category {
  id?: number
  name?: string
}

export interface Pet {
  id?: number
  name: string
  photoUrls: string[]
  tags?: Tag[]
  status?: 'available' | 'pending' | 'sold'
}

export interface Tag {
  id?: number
  name?: string
}

export interface ApiResponse {
  code?: number
  type?: string
  message?: string
}

export interface Order {
  id?: number
  petId?: number
  quantity?: number
  shipDate?: string
  status?: 'placed' | 'approved' | 'delivered'
  complete?: boolean
}

export interface User {
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string
  userStatus?: number
}
