import build from '../../src/buildTemplate'
import write from '../../src/writeRouteFile'

const input = 'packages/aspida/__tests__/apis'
const baseurl = 'https://example.com'

write(build(input, baseurl))
