import minimist from 'minimist'
import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'
import getConfig from './getConfig'
import listFiles from './listFiles'
import replacePathSepIfWindows from './replacePathSepIfWindows'
import createRouteString from './createRouteString'

const options: minimist.Opts = {
  string: ['version', 'config', 'build', 'watch'],
  alias: { v: 'version', c: 'config', b: 'build', w: 'watch' }
}

export function run() {
  const argv = minimist(process.argv.slice(2), options)
  const config = getConfig(argv.config || '.mockserverrc')

  if (argv.version !== undefined) {
    process.stdout.write(`v${require('../../package').version}\n`)
  }

  function build() {
    const regMockExtension = /[^($route)]\.(js|ts)$/
    const inputs = Array.isArray(config.input) ? config.input : [config.input]
    inputs.forEach(input => {
      const mockFilePaths = replacePathSepIfWindows(listFiles(input, regMockExtension))
      const routeString = createRouteString(input, config.target, mockFilePaths)
      fs.writeFileSync(path.join(input, `$route.${config.outputExt}`), routeString, 'utf8')
    })

    console.log(`$route.${config.outputExt} was built successfully.`)
  }

  if (argv.build !== undefined || argv.watch !== undefined) {
    build()

    if (argv.watch !== undefined) {
      chokidar
        .watch(config.input, { ignoreInitial: true, ignored: `**/$route.${config.outputExt}` })
        .on('all', build)
    }
  }
}
