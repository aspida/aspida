import { Config } from '../getConfig'
import build from '../buildTemplate'
import { Template } from '../Template'
import { Command } from 'aspida/dist/cli/command'

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

  exec() {
    this.configs.forEach(config => {
      this.command.run(config, this.io)
    })
  }
}

interface BuildCommand {
  run(config: Config, io: BuildIO): Promise<void>
}

export interface BuildIO {
  write(outputDir: string, template: Template): void
  remove(filePath: string, callback: () => void): void
  watch(input: string, callback: () => void): void
}

export class Build implements BuildCommand {
  async run(config: Config, io: BuildIO) {
    const template = await build(config.inputFile, config.isYaml)

    io.remove(config.output, () => io.write(config.output, template))
  }
}

export class Watch implements BuildCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly build = new Build()) {}

  async run(config: Config, io: BuildIO) {
    await this.build.run(config, io)
    io.watch(config.inputFile, () => this.build.run(config, io))
  }
}
