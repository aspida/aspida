import chokidar from 'chokidar'

export default (input: string, callback: (...args: any) => void) => {
  chokidar.watch(input, { ignoreInitial: true, ignored: /\/\$[^/]+\.(js|ts)$/ }).on('all', callback)
}
