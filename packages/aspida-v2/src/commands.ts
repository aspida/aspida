import { getConfigs, AspidaConfig } from './getConfigs'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import watchInputDir from './watchInputDir'

export { getConfigs, AspidaConfig }

export const version = (): string => require('../package.json').version

export const build = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config)
    .reduce<ReturnType<typeof buildTemplate>>((prev, c) => [...prev, ...buildTemplate(c)], [])
    .forEach(writeRouteFile)

export const watch = (config?: Parameters<typeof getConfigs>[0]) =>
  getConfigs(config).map(c => {
    buildTemplate(c).forEach(writeRouteFile)

    return watchInputDir(c.input, () => buildTemplate(c).forEach(writeRouteFile))
  })
