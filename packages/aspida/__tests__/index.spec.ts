import fs from 'fs'
import packageJson from '../package.json'
import build from '../src/buildTemplate'
import { version } from '../src/commands'
import { getConfigs } from '../src/getConfigs'

const basePath = 'packages/aspida'

describe('cli test', () => {
  test('version command', () => {
    expect(version()).toBe(packageJson.version)
  })

  test('main', () => {
    const { input, baseURL, trailingSlash, outputEachDir, outputMode } = getConfigs(
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
        outputEachDir,
        outputMode
      })

      expect(filePath).toBe(resultFilePath)
      expect(text).toBe(result.replace(/\r/g, ''))
    })
  })

  test('outputEachDir', () => {
    const { input, baseURL, trailingSlash, outputEachDir, outputMode } = getConfigs(
      `${basePath}/aspida.config.js`
    )[1]
    const inputDir = `${basePath}/${input}`
    const listApiFiles = (dir: string): string[] =>
      fs
        .readdirSync(dir, { withFileTypes: true })
        .reduce<string[]>(
          (prev, dirent) => [
            ...prev,
            ...(dirent.isFile() ? [`${dir}/${dirent.name}`] : listApiFiles(`${dir}/${dirent.name}`))
          ],
          []
        )
        .filter(name => name.endsWith('$api.ts'))

    const templates = build({
      input: inputDir,
      baseURL,
      trailingSlash,
      outputEachDir,
      outputMode
    })
    const apiFiles = listApiFiles(inputDir)
    expect(templates).toHaveLength(apiFiles.length)

    apiFiles.forEach(apiPath => {
      const targetTemplate = templates.filter(t => t.filePath === apiPath)[0]
      expect(targetTemplate).not.toBeUndefined()
      const result = fs.readFileSync(apiPath, 'utf8')
      expect(targetTemplate.text).toBe(result.replace(/\r/g, ''))
    })
  })
})
