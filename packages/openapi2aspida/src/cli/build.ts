import fs from 'fs'
import { Config } from '../getConfig'
import build, { Template } from '../buildTemplate'
import { Command } from './command'

export class CommandToBuild implements Command {
  static getFactory(configs: Config[], io: BuildIO) {
    return {
      create(command: BuildCommand): Command {
        return new CommandToBuild(command, configs, io)
      }
    }
  }

  // eslint-disable-next-line no-useless-constructor
  private constructor(
    private readonly command: BuildCommand,
    private readonly configs: Config[],
    private readonly io: BuildIO
  ) {}

  async exec() {
    await Promise.all(this.configs.map(config => this.command.run(config, this.io)))
  }
}

type BuildCommand = {
  run(config: Config, io: BuildIO): Promise<void>
}

export type BuildIO = {
  write(outputDir: string, trailingSlash: boolean, template: Template): void
}

export class Build implements BuildCommand {
  async run(config: Config, io: BuildIO) {
    if (!fs.existsSync(config.output)) {
      fs.mkdirSync(config.output)
    } else if (fs.readdirSync(config.output).length) {
      console.log(
        `fatal: destination path '${config.output}' already exists and is not an empty directory.`
      )
      return
    }

    io.write(
      config.output,
      config.trailingSlash,
      await build(config.input, config.isYaml, config.needsMock, config.needsMockType)
    )
  }
}
