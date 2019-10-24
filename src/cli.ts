import fs from 'fs'
import minimist from 'minimist'
import getConfig from './getConfig'
import getInputs from './getInputs'
import build from './buildTemplate'
import write from './writeRouteFile'
import watch from './watchInputDir'

const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch', 'baseurl'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch', u: 'baseurl' }
}

export const run = (args: string[]) => {
  const argv = minimist(args, options)
  const config = getConfig(argv.config)

  if (argv.version !== undefined) {
    console.log(`v${require('../package').version}`)
  }

  if (argv.build === undefined && argv.watch === undefined) {
    return
  }

  getInputs(config.input).forEach(input => {
    let prevResult = build(input, argv.baseurl)
    write(prevResult)

    if (argv.watch === undefined) {
      return
    }

    watch(input, () => {
      const result = build(input, argv.baseurl)

      if (prevResult.text === result.text && prevResult.filePath !== result.filePath) {
        return
      }

      fs.unlink(prevResult.filePath, () => write(result))
      prevResult = result
    })
  })
}
