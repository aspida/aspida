import fs from 'fs'
import path from 'path'
import { Config, defaultConfig, routeFileRegExp } from './getConfig'
import listFiles from './listFiles'
import replacePathSepIfWindows from './replacePathSepIfWindows'
import createRouteString from './createRouteString'

const getTarget = (filePath?: string) =>
  !filePath
    ? defaultConfig.target
    : /(\n|^)export default/.test(fs.readFileSync(filePath, 'utf8'))
    ? 'es6'
    : 'cjs'

const findExportingFile = (filePaths: string[]) =>
  filePaths.find(filePath => /export/.test(fs.readFileSync(filePath, 'utf8')))

export default (input: string, config: Config) => {
  const mockFilePaths = listFiles(input)
    .filter(filePath => !routeFileRegExp.test(filePath))
    .map(filePath => replacePathSepIfWindows(filePath))
  const routeString = createRouteString(
    input,
    config.target || getTarget(findExportingFile(mockFilePaths)),
    mockFilePaths
  )
  const routeFilePath = path.join(
    input,
    `$route.${config.outputExt ||
      (mockFilePaths[0] ? path.extname(mockFilePaths[0]).slice(1) : defaultConfig.outputExt)}`
  )

  fs.writeFileSync(routeFilePath, routeString, 'utf8')
  console.log(`${routeFilePath} was built successfully.`)
}
