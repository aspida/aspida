import minimist from 'minimist'
import { version, build, write, watch, migrate } from './'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'config', 'watch', 'migrate'],
    alias: { v: 'version', c: 'config', w: 'watch', m: 'migrate' }
  })

  // eslint-disable-next-line no-unused-expressions
  argv.version !== undefined
    ? console.log(`v${version()}`)
    : argv.migrate !== undefined
    ? migrate(argv.config)
    : argv.watch !== undefined
    ? watch(argv.config)
    : build(argv.config).forEach(write)
}
