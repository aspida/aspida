import fs from 'fs'
import build from '../src/buildTemplate'
import getConfig from '../src/getConfig'

const basePath = 'packages/pathpida'

describe('cli test', () => {
  test('main', () => {
    const { input, output, baseURL, trailingSlash } = getConfig(`${basePath}/pathpida.config.js`)[0]
    const inputDir = `${basePath}/${input}`
    const outputDir = `${basePath}/${output}`

    const resultFilePath = `${outputDir}$path.ts`
    const result = fs.readFileSync(resultFilePath, 'utf8')
    const { filePath, text } = build({ input: inputDir, output: outputDir, baseURL, trailingSlash })

    expect(filePath).toBe(resultFilePath)
    expect(text).toBe(result)
  })
})
