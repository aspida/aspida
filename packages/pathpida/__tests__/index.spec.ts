import fs from 'fs'
import build from '../src/buildTemplate'
import write from '../src/writeRouteFile'
import getConfig from '../src/getConfig'

const basePath = 'packages/pathpida'

describe('cli test', () => {
  test('main', () => {
    const spyLog = jest.spyOn(fs, 'writeFileSync').mockImplementation(x => x)
    const { input, output, baseURL, trailingSlash } = getConfig(`${basePath}/aspida.config.js`)[0]
    const inputDir = `${basePath}/${input}`
    const outputDir = `${basePath}/${output}`

    const resultFilePath = `${outputDir}$path.ts`
    const result = fs.readFileSync(resultFilePath, 'utf8')
    write(build({ input: inputDir, output: outputDir, baseURL, trailingSlash }))
    expect(fs.writeFileSync).toHaveBeenLastCalledWith(resultFilePath, result, 'utf8')

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
