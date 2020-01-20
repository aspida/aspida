import { LowerHttpMethod, HttpMethod } from 'aspida'
import { MockRequestConfig, MockRoute } from './'
import { MockResponse } from './types'
import { createPathRegExp, copyData, createValues } from './utils'

const findHandler = (path: string, method: HttpMethod, routes: MockRoute[]) =>
  routes.find(
    route =>
      createPathRegExp(route.path).test(path) &&
      route.methods[method.toLowerCase() as LowerHttpMethod]
  )

export const hasMockHandler = (path: string, method: HttpMethod, routes: MockRoute[]) =>
  !!findHandler(path, method, routes)?.methods[method.toLowerCase() as LowerHttpMethod]

export default async (config: MockRequestConfig, routes: MockRoute[]) => {
  const route = findHandler(config.path, config.method, routes)

  const res = route?.methods[config.method.toLowerCase() as LowerHttpMethod]?.({
    values: createValues(route.path, config.path),
    query: config.query,
    reqHeaders: config.reqHeaders,
    reqData: config.reqData
  })

  return res && copyData((res instanceof Promise ? await res : res) as MockResponse)
}
