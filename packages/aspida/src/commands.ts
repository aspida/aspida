import { getConfigs } from './getConfigs'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'

export { getConfigs, AspidaConfig } from './getConfigs'
export { parse } from './parseInterface'

export const version = (): string => require('../package.json').version

export const build = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).flatMap(buildTemplate).forEach(writeRouteFile)

export const watch = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).map(c => {
    buildTemplate(c).forEach(writeRouteFile)
    return watchInputDir(c.input, () => buildTemplate(c).forEach(writeRouteFile))
  })
