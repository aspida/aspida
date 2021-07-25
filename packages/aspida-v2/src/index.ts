import { getConfigs, AspidaConfig } from './getConfigs'
import buildTemplate, { HTTP_METHODS } from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'
import migration from './migration'
import type { MethodParams } from './parseInterface'

export type HttpMethod = typeof HTTP_METHODS[number]
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

export type AspidaMethods<
  T extends {
    [L in Exclude<HttpMethod, 'get'>]?: MethodParams
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
