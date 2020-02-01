import { OpenAPI } from 'openapi-types'
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

interface BuildCommand {
  run(config: Config, io: BuildIO): Promise<void>
}

export interface BuildIO {
  write(outputDir: string, trailingSlash: boolean, template: Template): void
  remove(filePath: string): Promise<void>
  watch(input: string | OpenAPI.Document, callback: () => void): void
}

export class Build implements BuildCommand {
  async run(config: Config, io: BuildIO) {
    await io.remove(config.output)
    const template = await build(config.input, config.isYaml)
    io.write(config.output, config.trailingSlash, template)
  }
}

export class Watch implements BuildCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly build = new Build()) {}

  async run(config: Config, io: BuildIO) {
    await this.build.run(config, io)
    io.watch(config.input, () => this.build.run(config, io))
  }
}
