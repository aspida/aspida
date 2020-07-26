import path from 'path'
import minimist from 'minimist'
import { getConfigs } from './getConfigs'
import build from './buildTemplate'
import write from './writeRouteFile'
import watch from './watchInputDir'

export const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch' }
}

export const run = (args: string[]) => {
  const argv = minimist(args, options)
  const configs = getConfigs(argv.config)

  ;[
    argv.version !== undefined
      ? () => console.log(`v${require(path.join(__dirname, '../../package.json')).version}`)
      : null,
    argv.build !== undefined ? () => configs.flatMap(build).forEach(write) : null,
    argv.watch !== undefined
      ? () =>
          configs.forEach(config => {
            build(config).forEach(write)
            watch(config.input, () => build(config).forEach(write))
          })
      : null
  ].forEach(c => c?.())
}
