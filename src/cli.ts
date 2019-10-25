import fs from 'fs'
import minimist from 'minimist'
import getConfig, { Config } from './getConfig'
import read from './getInputs'
import write from './writeRouteFile'
import watch from './watchInputDir'
import { Build, Watch, CommandToBuild } from './cli/build'
import { Command, nullCommand } from './cli/command'
import { version as versionCommand } from './cli/version'

const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch', 'baseurl'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch', u: 'baseurl' }
}

const getBuildCommandFactory = (config: Config) =>
  CommandToBuild.getFactory(config, {
    read,
    write,
    watch,
    remove(filePath: string, callback: () => void) {
      fs.unlink(filePath, callback)
    }
  })

export const run = (args: string[]) => {
  const argv = minimist(args, options)

  const commands: Command[] = [
    argv.version !== undefined ? versionCommand : nullCommand,
    argv.build !== undefined || argv.watch !== undefined
      ? getBuildCommandFactory(getConfig(argv.config)).create(
          argv.watch !== undefined ? new Watch(argv.baseurl) : new Build(argv.baseurl)
        )
      : nullCommand
  ]

  commands.forEach(c => c.exec())
}
