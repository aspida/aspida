import build from './buildRouteFile'
import write from './writeRouteFile'

const input = './__tests__/apis'
const baseurl = 'https://example.com'

write(build(input, baseurl))
