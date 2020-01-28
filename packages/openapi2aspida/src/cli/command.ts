export interface Command {
  exec(): Promise<void> | void
}

export const nullCommand: Command = {
  exec() {
    // nothing to do
  }
}
