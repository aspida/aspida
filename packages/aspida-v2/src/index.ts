import { getConfigs, AspidaConfig } from './getConfigs'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'

export type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options'

export type AspidaMethodParams = {
  status?: number
  query?: any
  reqHeaders?: any
  reqFormat?: FormData | URLSearchParams | ArrayBuffer | Blob | string | any
  reqBody?: any
  resHeaders?: any
  resBody?: any
}

export type AspidaMethods = {
  [method in LowerHttpMethod]?: AspidaMethodParams
}

export { getConfigs, AspidaConfig, writeRouteFile as write }

export const version = (): string => require('../package.json').version

export const build = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).flatMap(buildTemplate)

export const watch = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).map(c => {
    buildTemplate(c).forEach(writeRouteFile)

    return watchInputDir(c.input, () => buildTemplate(c).forEach(writeRouteFile))
  })
