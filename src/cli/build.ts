import { Config } from '../getConfig'
import build from '../buildTemplate'
import { Template } from '../build/template'

interface BuildCommand {
  run(input: string, io: BuildIO): void
}

export interface BuildIO {
  read(input?: string | string[]): string[]
  write(template: Template): void
  remove(filePath: string, callback: () => void): void
  watch(input: string, callback: () => void): void
}

export class CommandRunner {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly command: BuildCommand,
    private readonly config: Config,
    private readonly io: BuildIO
  ) {}

  exec() {
    this.io.read(this.config.input).forEach(input => {
      this.command.run(input, this.io)
    })
  }
}

export class Build implements BuildCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly baseUrl: string) {}

  run(input: string, io: BuildIO): void {
    const template = build(input, this.baseUrl)

    io.write(template)
  }
}
export class Watch implements BuildCommand {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly baseUrl: string,
    private readonly build: Build = new Build(baseUrl)
  ) {}

  run(input: string, io: BuildIO): void {
    this.build.run(input, io)

    io.watch(input, () => {
      const result = build(input, this.baseUrl)

      io.remove(result.filePath, () => io.write(result))
    })
  }
}
