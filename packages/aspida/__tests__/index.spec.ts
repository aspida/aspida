import fs from 'fs'
import build from '../src/buildTemplate'
import { getConfigs } from '../src/getConfigs'

const basePath = 'packages/aspida'

describe('cli test', () => {
  test('main', () => {
    const { input, baseURL, trailingSlash, outputEachDir } = getConfigs(
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
      expect(text).toBe(result.includes('\r\n') ? result.replace(/\r\n/g, '\n') : result)
    })
  })

  test('outputEachDir', () => {
    const { input, baseURL, trailingSlash, outputEachDir } = getConfigs(
      `${basePath}/aspida.config.js`
    )[1]
    const inputDir = `${basePath}/${input}`
    const listApiFiles = (dir: string): string[] =>
      fs
        .readdirSync(dir, { withFileTypes: true })
        .flatMap(dirent =>
          dirent.isFile() ? [`${dir}/${dirent.name}`] : listApiFiles(`${dir}/${dirent.name}`)
        )
        .filter(name => name.endsWith('$api.ts'))

    const templates = build({
      input: inputDir,
      baseURL,
      trailingSlash,
      outputEachDir
    })
    const apiFiles = listApiFiles(inputDir)
    expect(templates).toHaveLength(apiFiles.length)

    apiFiles.forEach(apiPath => {
      const targetTemplate = templates.filter(t => t.filePath === apiPath)[0]
      expect(targetTemplate).not.toBeUndefined()
      const result = fs.readFileSync(apiPath, 'utf8')
      expect(targetTemplate.text).toBe(
        result.includes('\r\n') ? result.replace(/\r\n/g, '\n') : result
      )
    })
  })
})
