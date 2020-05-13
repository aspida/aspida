import minimist from 'minimist'
import getBaseConfig, { BaseConfig } from 'aspida/src/getConfig'
import write from './writeRouteFile'
import watch from 'aspida/src/cli/watchInputDir'
import { options } from 'aspida/src/cli'
import { Build, Watch, CommandToBuild } from './build'
import { Command, nullCommand } from 'aspida/src/cli/command'
import { version as versionCommand } from 'aspida/src/cli/version'

const getBuildCommandFactory = (configs: BaseConfig[]) =>
  CommandToBuild.getFactory(configs, { write, watch })

export const run = (args: string[]) => {
  const argv = minimist(args, options)

  const commands: Command[] = [
    argv.version !== undefined ? versionCommand : nullCommand,
    argv.build !== undefined || argv.watch !== undefined
      ? getBuildCommandFactory(getBaseConfig(argv.config)).create(
          argv.watch !== undefined ? new Watch() : new Build()
        )
      : nullCommand
  ]

  commands.forEach(c => c.exec())
}
