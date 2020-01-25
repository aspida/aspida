import fs from 'fs'
import path from 'path'
import { BaseConfig } from 'aspida/dist/getConfig'
import listFiles from './listFiles'
import createRouteString from './createRouteString'

export interface Template {
  filePath: string
  text: string
}

const hasMiddleware = (input: string) =>
  fs.existsSync(path.join(input, '@middleware')) ||
  fs.existsSync(path.join(input, '@middleware.ts'))

export default ({ input, trailingSlash }: BaseConfig): Template => ({
  text: createRouteString(
    input,
    trailingSlash,
    hasMiddleware(input),
    listFiles(input)
      .sort()
      .reverse()
  ),
  filePath: path.posix.join(input, `$mock.ts`)
})
