import build from '../../src/lib/buildRouteFile'
import write from '../../src/lib/writeRouteFile'

const input = 'packages/axios-mock-server/__tests__/mocks/'
const baseurl = 'https://example.com/api'
const configs = [
  {
    input,
    target: 'es6' as const,
    outputExt: 'ts' as const
  },
  {
    input,
    target: 'cjs' as const,
    outputExt: 'js' as const
  }
]

configs.forEach(config => write(build(input, config, baseurl)))
