import minimist from 'minimist'
import getConfig from './getConfig'
import getInputs from './getInputs'
import build from './buildRouteFile'
import watch from './watchInputDir'

const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch' }
}

export const run = (args: string[]) => {
  const argv = minimist(args, options)
  const config = getConfig(argv.config)

  if (argv.version !== undefined) {
    console.log(`v${require('../../package').version}`)
  }

  if (argv.build !== undefined || argv.watch !== undefined) {
    getInputs(config.input).forEach(input => {
      build(input, config)
      if (argv.watch !== undefined) watch(input, () => build(input, config))
    })
  }
}
