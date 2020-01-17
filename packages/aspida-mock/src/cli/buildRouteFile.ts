import path from 'path'
import { Template } from './Template'
import listFiles from './listFiles'
import createRouteString from './createRouteString'

export default (input: string): Template => ({
  text: createRouteString(
    input,
    listFiles(input)
      .sort()
      .reverse()
  ),
  filePath: path.posix.join(input, `$mock.ts`)
})
