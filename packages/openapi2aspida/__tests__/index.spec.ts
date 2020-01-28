import fs from 'fs'
import rimraf from 'rimraf'
import getConfig from '../src/getConfig'
import buildFromScript from '../src'

const basePath = 'packages/openapi2aspida'

jest.setTimeout(60000)

describe('cli test', () => {
  beforeAll(() => fs.mkdirSync(`${basePath}/_samples`))
  afterAll(fn => rimraf(`${basePath}/_samples`, fn))

  test('main', () => {
    const configs = getConfig(`${basePath}/aspida.config.js`)

    return Promise.all(
      configs.map(async config => {
        const outputDir = `${basePath}/_${config.output}`
        await buildFromScript({
          ...config,
          input: `${basePath}/${config.input}`,
          output: outputDir
        })

        expect(fs.readFileSync(`${outputDir}/$api.ts`, 'utf8')).toBe(
          fs.readFileSync(`${basePath}/${config.output}/$api.ts`, 'utf8')
        )
      })
    )
  })
})
