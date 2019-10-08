import fs from 'fs'
import build from '../src/buildRouteFile'
import getConfig from '../src/getConfig'

const input = './__tests__/apis'
const config = getConfig()
const baseurl = 'https://example.com'
const result = fs.readFileSync(`${input}/$api.ts`, 'utf8')

describe('cli test', () => {
  test('main', () => {
    const { text } = build(input, config, baseurl)
    expect(text).toBe(result)
  })
})
