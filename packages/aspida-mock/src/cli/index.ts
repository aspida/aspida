import minimist from 'minimist'
import rimraf from 'rimraf'
import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'
import write from './writeRouteFile'
import watch from 'aspida/dist/watchInputDir'
import { options } from 'aspida/dist/cli'
import { Build, Watch, CommandToBuild } from './build'
import { Command, nullCommand } from 'aspida/dist/cli/command'
import { version as versionCommand } from 'aspida/dist/cli/version'

const getBuildCommandFactory = (configs: BaseConfig[]) =>
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
      ? getBuildCommandFactory(getBaseConfig(argv.config)).create(
          argv.watch !== undefined ? new Watch() : new Build()
        )
      : nullCommand
  ]

  commands.forEach(c => c.exec())
}
