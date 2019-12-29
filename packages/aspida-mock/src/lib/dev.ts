import build from './buildRouteFile'
import write from './writeRouteFile'

const input = '__tests__/lib/mocks/'
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

configs.forEach(config => write(build(input, config)))
