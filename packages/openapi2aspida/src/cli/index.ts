import minimist from 'minimist'
import getConfig, { Config } from '../getConfig'
import write from '../writeRouteFile'
import { Build, CommandToBuild } from './build'
import { Command, nullCommand } from './command'
import { version as versionCommand } from 'aspida/dist/cli/version'

const options: minimist.Opts = {
  string: ['version', 'config', 'build'],
  alias: { v: 'version', c: 'config', b: 'build' }
}

const getBuildCommandFactory = (configs: Config[]) => CommandToBuild.getFactory(configs, { write })

export const run = (args: string[]) => {
  const argv = minimist(args, options)

  const commands: Command[] = [
    argv.version !== undefined ? versionCommand : nullCommand,
    argv.build !== undefined
      ? getBuildCommandFactory(getConfig(argv.config)).create(new Build())
      : nullCommand
  ]

  commands.forEach(c => c.exec())
}

export const buildFromScript = (config: Config | Config[]) =>
  getBuildCommandFactory(Array.isArray(config) ? config : [config])
    .create(new Build())
    .exec()
