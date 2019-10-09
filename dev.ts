import build from './src/buildRouteFile'
import write from './src/writeRouteFile'
import watch from './src/watchInputDir'

const input = './__tests__/apis'
const baseurl = 'https://example.com'

write(build(input, baseurl))
watch(input, () => write(build(input, baseurl)))
