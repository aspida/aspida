import fs from 'fs'
import minimist from 'minimist'
import getConfig from './getConfig'
import read from './getInputs'
import write from './writeRouteFile'
import watch from './watchInputDir'
import { Build, Watch, CommandRunner } from './cli/build'

const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch', 'baseurl'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch', u: 'baseurl' }
}

export const run = (args: string[]) => {
  const argv = minimist(args, options)
  const config = getConfig(argv.config)

  if (argv.version !== undefined) {
    console.log(`v${require('../package').version}`)
  }

  if (argv.build === undefined && argv.watch === undefined) {
    return
  }

  const buildCommand = argv.watch === undefined ? new Build(argv.baseurl) : new Watch(argv.baseurl)

  const buildCommandRunner = new CommandRunner(buildCommand, config, {
    read,
    write,
    watch,
    remove(filePath: string, callback: () => void) {
      fs.unlink(filePath, callback)
    }
  })
  buildCommandRunner.exec()
}
