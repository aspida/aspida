import fs from 'fs'
import path from 'path'
import { AspidaConfig } from 'aspida/dist/commands'
import listFiles from './listFiles'
import createRouteString from './createRouteString'

const hasMiddleware = (input: string) =>
  fs.existsSync(path.join(input, '@middleware')) ||
  fs.existsSync(path.join(input, '@middleware.ts'))

export default ({ input, trailingSlash }: AspidaConfig) => ({
  text: createRouteString(
    input,
    trailingSlash,
    hasMiddleware(input),
    listFiles(input).sort().reverse()
  ),
  filePath: path.posix.join(input, `$mock.ts`)
})
