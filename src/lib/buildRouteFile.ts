import fs from 'fs'
import path from 'path'
import { Config, defaultConfig, mockFileRegExp } from './getConfig'
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

const getMockFilePaths = (input: string) =>
  listFiles(input)
    .filter(filePath => !mockFileRegExp.test(filePath))
    .map(filePath => replacePathSepIfWindows(filePath))

export default (input: string, config: Config) => {
  const mockFilePaths = getMockFilePaths(input)
  const ext =
    config.outputExt ||
    (mockFilePaths[0] ? path.extname(mockFilePaths[0]).slice(1) : defaultConfig.outputExt)
  const text = createRouteString(
    input,
    config.target || getTarget(findExportingFile(mockFilePaths)),
    ext === 'ts',
    mockFilePaths
  )

  return { text, filePath: path.join(input, `$mock.${ext}`) }
}
