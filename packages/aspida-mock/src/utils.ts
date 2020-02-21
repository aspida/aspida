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

export const copyData = (res: MockResponse): MockResponse => {
  if (typeof res.resBody !== 'object') {
    return res
  }

  let { resBody } = res

  try {
    resBody = JSON.parse(JSON.stringify(res.resBody))
  } catch (e) {}

  return { ...res, resBody }
}

export const createValues = (path: string, relativePath: string) => {
  const values: Record<string, string | number> = {}
  const dirList = path.split('/')
  const parsedRequestUrl = relativePath.split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      const [valueName, type = 'number'] = dirList[i].slice(1).split('@')
      values[valueName] = isNaN(+dir) || type !== 'number' ? dir : +dir
    }
  })

  return values
}
