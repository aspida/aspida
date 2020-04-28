import { LowerHttpMethod } from 'aspida'
import { MockResponse } from './types'

export const createPathRegExp = (path: string) =>
  new RegExp(`^${path.replace(/\/_[^./]+/g, '/[^/]+').replace('.', '\\.')}$`)

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
  const { resBody } = res

  return resBody === null ||
    typeof resBody !== 'object' ||
    (!Array.isArray(resBody) && Object.getPrototypeOf(resBody) !== Object.prototype)
    ? res
    : { ...res, resBody: JSON.parse(JSON.stringify(resBody)) }
}

export const createValues = (path: string, relativePath: string) => {
  const values: Record<string, string | number> = {}
  const dirList = path.split('/')
  const parsedRequestUrl = relativePath.split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      const [valueName, type = 'number'] = dirList[i].slice(1).split('@')
      const val = dir.split('.')[0]
      values[valueName.split('.')[0]] = isNaN(+val) || type !== 'number' ? val : +val
    }
  })

  return values
}
