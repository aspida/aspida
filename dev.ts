import build from './src/buildRouteFile'
import write from './src/writeRouteFile'
import getConfig from './src/getConfig'

write(build('./apis', getConfig(), 'https://example.com'))
