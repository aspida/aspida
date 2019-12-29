import chokidar from 'chokidar'
import { mockFileRegExp } from './getConfig'

export default (input: string, callback: (...args: any) => void) => {
  chokidar.watch(input, { ignoreInitial: true, ignored: mockFileRegExp }).on('all', callback)
}
