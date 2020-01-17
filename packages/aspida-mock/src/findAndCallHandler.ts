import { LowerHttpMethod } from 'aspida'
import { MockRequestConfig, MockRoute } from './'
import { MockResponse } from './types'
import createValues from './createValues'
import { createPathRegExp, copyData } from './utils'

export default async (config: MockRequestConfig, routes: MockRoute[]) => {
  const route = routes.find(
    route =>
      createPathRegExp(route.path).test(config.path) &&
      route.methods[config.method.toLowerCase() as LowerHttpMethod]
  )

  const res = route?.methods[config.method.toLowerCase() as LowerHttpMethod]?.({
    values: createValues(route.path, config.path),
    query: config.query,
    reqHeaders: config.reqHeaders,
    reqData: config.reqData
  })

  return res && copyData((res instanceof Promise ? await res : res) as MockResponse)
}
