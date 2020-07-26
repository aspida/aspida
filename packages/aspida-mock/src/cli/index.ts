import path from 'path'
import minimist from 'minimist'
import { getConfigs } from 'aspida'
import build from './buildRouteFile'
import write from 'aspida/dist/writeRouteFile'
import watch from 'aspida/dist/watchInputDir'
import { options } from 'aspida/dist/cli'

export const run = (args: string[]) => {
  const argv = minimist(args, options)
  const configs = getConfigs(argv.config)

  ;[
    argv.version !== undefined
      ? () => console.log(`v${require(path.join(__dirname, '../../package.json')).version}`)
      : null,
    argv.build !== undefined ? () => configs.map(build).forEach(write) : null,
    argv.watch !== undefined
      ? () =>
          configs.forEach(config => {
            write(build(config))
            watch(config.input, () => write(build(config)))
          })
      : null
  ].forEach(c => c?.())
}
