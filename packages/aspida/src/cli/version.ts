import path from 'path'
import { Command } from './command'

export const version: Command = {
  exec() {
    console.log(`v${require(path.join(process.cwd(), 'package.json')).version}`)
  }
}
