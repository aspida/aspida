import minimist from 'minimist'

const options: minimist.Opts = {
  string: ['version'],
  alias: { v: 'version' }
}

export function run() {
  const argv = minimist(process.argv.slice(2), options)

  if (argv.version !== undefined) {
    process.stdout.write(`v${require('../../package').version}\n`)
  }
}
