import fs from 'fs'
import build from '../src/buildTemplate'
import getConfig from '../src/getConfig'

const basePath = 'packages/aspida'

describe('cli test', () => {
  test('main', () => {
    const { input, baseURL, trailingSlash, outputEachDir } = getConfig(
      `${basePath}/aspida.config.js`
    )[0]
    const inputDir = `${basePath}/${input}`
    const inputs = [inputDir, `./${inputDir}`, `./${inputDir}/`, `${inputDir}/`]

    inputs.forEach(inputPath => {
      const resultFilePath = `${inputDir}/$api.ts`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      const [{ filePath, text }] = build({
        input: inputPath,
        baseURL,
        trailingSlash,
        outputEachDir
      })

      expect(filePath).toBe(resultFilePath)
      expect(text).toBe(result)
    })
  })
})
