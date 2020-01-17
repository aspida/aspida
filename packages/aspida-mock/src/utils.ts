import { LowerHttpMethod } from 'aspida'
import { MockResponse } from './types'

export const createPathRegExp = (path: string) =>
  new RegExp(`^${path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

export const httpMethods: LowerHttpMethod[] = [
  'get',
  'post',
  'put',
  'delete',
  'head',
  'options',
  'patch'
]

export const copyData = (res: MockResponse): MockResponse => ({
  ...res,
  resData: typeof res.resData !== 'string' ? JSON.parse(JSON.stringify(res.resData)) : res.resData
})
