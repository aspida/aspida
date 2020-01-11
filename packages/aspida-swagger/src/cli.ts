import minimist from 'minimist'
import rimraf from 'rimraf'
import getConfig, { Config } from './getConfig'
import write from './writeRouteFile'
import watch from 'aspida/src/watchInputDir'
import { options } from 'aspida/src/cli'
import { Build, Watch, CommandToBuild } from './cli/build'
import { Command, nullCommand } from 'aspida/src/cli/command'
import { version as versionCommand } from 'aspida/src/cli/version'

const getBuildCommandFactory = (configs: Config[]) =>
  CommandToBuild.getFactory(configs, {
    write,
    watch,
    remove(outputPath: string, callback: () => void) {
      rimraf(outputPath, callback)
    }
  })

export const run = (args: string[]) => {
  const argv = minimist(args, options)

  const commands: Command[] = [
    argv.version !== undefined ? versionCommand : nullCommand,
    argv.build !== undefined || argv.watch !== undefined
      ? getBuildCommandFactory(getConfig(argv.config)).create(
          argv.watch !== undefined ? new Watch() : new Build()
        )
      : nullCommand
  ]

  commands.forEach(c => c.exec())
}
