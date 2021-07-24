import { getConfigs, AspidaConfig } from './getConfigs'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'
import migration from './migration'

export type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'
export type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206
export type HttpStatusErr =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 409
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505

export type MethodParams = {
  req?: {
    headers?: Record<string, string | number>
    query?: Record<string, number | string | (number | string)[]>
    format?: FormData | URLSearchParams
    body?: any
  }
  res?: {
    status?: HttpStatusOk
    headers?: Record<string, string>
    body?: any
  }
  err?: {
    status?: HttpStatusErr
    headers?: Record<string, string>
    body?: any
  }
}

export type AspidaMethods<
  T extends {
    [L in Exclude<LowerHttpMethod, 'get'>]?: MethodParams
  } & {
    get?: Omit<MethodParams, 'req'> &
      Omit<MethodParams, 'req'> & {
        req?: Omit<MethodParams['req'], 'format' | 'body'> & { format?: never; body?: never }
      }
  }
> = T

export { getConfigs, AspidaConfig, writeRouteFile as write }

export const version = (): string => require('../package.json').version

export const build = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).flatMap(buildTemplate)

export const watch = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).map(c => {
    buildTemplate(c).forEach(writeRouteFile)

    return watchInputDir(c.input, () => buildTemplate(c).forEach(writeRouteFile))
  })

export const migrate = (config?: Parameters<typeof getConfigs>[0]) => {
  getConfigs(config).forEach(migration)
  getConfigs(config).forEach(c => {
    buildTemplate(c).forEach(writeRouteFile)
  })
}
