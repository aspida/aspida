import chokidar from 'chokidar'
import { routeFileRegExp } from './getConfig'

export default (input: string, callback: (...args: any) => void) => {
  chokidar
    .watch(input, { ignoreInitial: true, ignored: routeFileRegExp })
    .on('add', callback)
    .on('unlink', callback)
}
