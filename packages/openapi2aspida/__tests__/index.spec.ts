import fs from 'fs'
import rimraf from 'rimraf'
import build from '../src/buildTemplate'
import write from '../src/writeRouteFile'
import getConfig from '../src/getConfig'

const basePath = 'packages/openapi2aspida'

jest.setTimeout(60000)

describe('cli test', () => {
  afterAll(fn => rimraf(`${basePath}/_samples`, fn))

  test('main', () => {
    const configs = getConfig(`${basePath}/aspida.config.js`)

    return Promise.all(
      configs.map(
        ({ inputFile, output, trailingSlash, isYaml }) =>
          new Promise(resolve => {
            build(`${basePath}/${inputFile}`, isYaml).then(template => {
              const outputDir = `${basePath}/_${output}`
              fs.mkdirSync(outputDir, { recursive: true })

              rimraf(outputDir, () => {
                write(outputDir, trailingSlash, template)
                expect(fs.readFileSync(`${outputDir}/$api.ts`, 'utf8')).toBe(
                  fs.readFileSync(`${basePath}/${output}/$api.ts`, 'utf8')
                )
                resolve()
              })
            })
          })
      )
    )
  })
})
