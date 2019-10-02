import fs from 'fs'
import minimist from 'minimist'
import getConfig from './getConfig'
import getInputs from './getInputs'
import build from './buildRouteFile'
import write from './writeRouteFile'
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
      let prevResult = build(input, config)
      write(prevResult)

      if (argv.watch !== undefined) {
        watch(input, () => {
          const result = build(input, config)

          if (prevResult.text !== result.text || prevResult.filePath !== result.filePath) {
            fs.unlink(prevResult.filePath, () => write(result))
            prevResult = result
          }
        })
      }
    })
  }
}
