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
    const mockFilePaths = replacePathSepIfWindows(listFiles(config.input, regMockExtension))
    const routeString = createRouteString(config.input, config.target, mockFilePaths)
    fs.writeFileSync(path.join(config.input, '$route.js'), routeString, 'utf8')
  }

  if (argv.build !== undefined || argv.watch !== undefined) {
    build()

    if (argv.watch !== undefined) {
      chokidar
        .watch(config.input, {
          ignored: path.join(config.input, '$route.js')
        })
        .on('all', build)
    }
  }
}
