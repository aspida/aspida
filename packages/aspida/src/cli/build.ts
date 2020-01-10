import { Config } from '../getConfig'
import build from '../buildTemplate'
import { Template } from '../build/template'
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

  exec() {
    this.configs.forEach(({ input }) => {
      this.command.run(input, this.io)
    })
  }
}

interface BuildCommand {
  run(input: string, io: BuildIO): void
}

export interface BuildIO {
  write(template: Template): void
  remove(filePath: string, callback: () => void): void
  watch(input: string, callback: () => void): void
}

export class Build implements BuildCommand {
  run(input: string, io: BuildIO): void {
    const template = build(input)

    io.remove(template.filePath, () => io.write(template))
  }
}

export class Watch implements BuildCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly build = new Build()) {}

  run(input: string, io: BuildIO): void {
    this.build.run(input, io)
    io.watch(input, () => this.build.run(input, io))
  }
}
