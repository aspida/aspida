export type Command = {
  exec(): Promise<void> | void
}

export const nullCommand: Command = {
  exec() {
    // nothing to do
  }
}
