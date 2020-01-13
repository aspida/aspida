import fs from 'fs'
import rimraf from 'rimraf'
import build from '../src/buildTemplate'
import write from '../src/writeRouteFile'
import getConfig from '../src/getConfig'

const basePath = 'packages/aspida-swagger'

describe('cli test', () => {
  afterAll(fn => rimraf(`${basePath}/_samples`, fn))

  test('main', () => {
    const configs = getConfig(`${basePath}/aspida.config.js`)

    return Promise.all(
      configs.map(
        ({ inputFile, output, isYaml }) =>
          new Promise(resolve => {
            build(`${basePath}/${inputFile}`, isYaml).then(template => {
              const outputDir = `${basePath}/_${output}`
              fs.mkdirSync(outputDir, { recursive: true })

              rimraf(outputDir, () => {
                write(outputDir, template)
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