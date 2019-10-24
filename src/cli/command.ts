export interface Command {
  exec(): void
}

export const nullCommand: Command = {
  exec() {
    // nothing to do
  }
}
