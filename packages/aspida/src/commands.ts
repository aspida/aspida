import { getConfigs, AspidaConfig } from './getConfigs'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'

export { parse } from './parseInterface'
export { getConfigs, AspidaConfig }

export const version = (): string => require('../package.json').version

export const build = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).flatMap(buildTemplate).forEach(writeRouteFile)

export const watch = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).map(c => {
    buildTemplate(c).forEach(writeRouteFile)
    return watchInputDir(c.input, () => buildTemplate(c).forEach(writeRouteFile))
  })