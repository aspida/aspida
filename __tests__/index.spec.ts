import fs from 'fs'
import build from '../src/buildRouteFile'

const input = './__tests__/apis'
const baseurl = 'https://example.com'
const result = fs.readFileSync(`${input}/$api.ts`, 'utf8')

describe('cli test', () => {
  test('main', () => {
    expect(build(input, baseurl).text).toBe(result)
  })
})
