import path from 'path'
import listFiles from './listFiles'
import createRouteString from './createRouteString'

export interface Template {
  filePath: string
  text: string
}

export default (input: string): Template => ({
  text: createRouteString(
    input,
    listFiles(input)
      .sort()
      .reverse()
  ),
  filePath: path.posix.join(input, `$mock.ts`)
})
