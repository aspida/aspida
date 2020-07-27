import path from 'path'
import minimist from 'minimist'
import { getConfigs } from 'aspida/dist/commands'
import build from './buildRouteFile'
import write from 'aspida/dist/writeRouteFile'
import watch from 'aspida/dist/watchInputDir'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'config', 'watch'],
    alias: { v: 'version', c: 'config', w: 'watch' }
  })

  ;(argv.version !== undefined
    ? () => console.log(`v${require(path.join(__dirname, '../../package.json')).version}`)
    : argv.watch !== undefined
    ? () =>
        getConfigs(argv.config).forEach(config => {
          write(build(config))
          watch(config.input, () => write(build(config)))
        })
    : () => getConfigs(argv.config).map(build).forEach(write))()
}
