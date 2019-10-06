import build from './src/buildRouteFile'
import write from './src/writeRouteFile'
import getConfig from './src/getConfig'
import watch from './src/watchInputDir'

const input = './apis'
const config = getConfig()
const baseurl = 'https://example.com'

write(build(input, config, baseurl))
watch(input, () => write(build(input, config, baseurl)))
