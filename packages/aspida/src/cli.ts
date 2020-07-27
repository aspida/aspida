import minimist from 'minimist'
import { version, build, watch } from './commands'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'config', 'watch'],
    alias: { v: 'version', c: 'config', w: 'watch' }
  })

  ;(argv.version !== undefined
    ? () => console.log(`v${version()}`)
    : argv.watch !== undefined
    ? watch
    : build)(argv.config)
}
