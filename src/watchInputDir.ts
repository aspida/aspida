import chokidar from 'chokidar'
import { apiFileRegExp } from './getConfig'

export default (input: string, callback: (...args: any) => void) => {
  chokidar.watch(input, { ignoreInitial: true, ignored: apiFileRegExp }).on('all', callback)
}
