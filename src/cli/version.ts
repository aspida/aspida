import { Command } from './command'

export const version: Command = {
  exec() {
    console.log(`v${require('../../package.json').version}`)
  }
}
