import path from 'path'
import { BaseConfig } from 'aspida/dist/getConfig'
import listFiles from './listFiles'
import createRouteString from './createRouteString'

export interface Template {
  filePath: string
  text: string
}

export default ({ input, trailingSlash }: BaseConfig): Template => ({
  text: createRouteString(
    input,
    trailingSlash,
    listFiles(input)
      .sort()
      .reverse()
  ),
  filePath: path.posix.join(input, `$mock.ts`)
})
