import { LowerHttpMethod, HttpMethod } from 'aspida'
import { MockRequestConfig, MockRoute, MiddlewareHandler } from './'
import { MockResponse, PartialResponse } from './types'
import { createPathRegExp, copyData, createValues } from './utils'

const findHandler = (path: string, method: HttpMethod, routes: MockRoute[]) =>
  routes.find(
    route =>
      createPathRegExp(route.path).test(path) &&
      route.methods[method.toLowerCase() as LowerHttpMethod]
  )

export const hasMockHandler = (path: string, method: HttpMethod, routes: MockRoute[]) =>
  !!findHandler(path, method, routes)?.methods[method.toLowerCase() as LowerHttpMethod]

export default async (
  config: MockRequestConfig,
  routes: MockRoute[],
  middleware?: MiddlewareHandler[]
) => {
  const route = findHandler(config.path, config.method, routes)

  if (!route) return

  let params: any = {
    path: config.path,
    values: createValues(route.path, config.path),
    query: config.query,
    reqHeaders: config.reqHeaders,
    reqData: config.reqData
  }

  if (middleware) {
    for (let i = 0; i < middleware.length; i += 1) {
      const {
        isNext,
        response,
        config
      }: {
        isNext: boolean
        response?: PartialResponse
        config?: MockRequestConfig
      } = await new Promise(resolve => {
        middleware[i](
          params,
          res => {
            resolve({ isNext: false, response: res })
          },
          req => {
            resolve({ isNext: true, config: req })
          }
        )
      })

      if (isNext) {
        params = config || params
      } else {
        return copyData((response instanceof Promise ? await response : response) as MockResponse)
      }
    }
  }

  const res = route.methods[config.method.toLowerCase() as LowerHttpMethod]?.(params)

  return copyData((res instanceof Promise ? await res : res) as MockResponse)
}
