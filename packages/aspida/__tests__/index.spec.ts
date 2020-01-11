import fs from 'fs'
import build from '../src/buildTemplate'
import getConfig from '../src/getConfig'

describe('cli test', () => {
  test('main', () => {
    const { baseURL } = getConfig('packages/aspida/aspida.config.js')[0]
    const paths = [
      {
        input: 'packages/aspida/samples',
        resultDirPath: 'packages/aspida/samples'
      },
      {
        input: './packages/aspida/samples',
        resultDirPath: 'packages/aspida/samples'
      },
      {
        input: './packages/aspida/samples/',
        resultDirPath: 'packages/aspida/samples'
      },
      {
        input: 'packages/aspida/samples/',
        resultDirPath: 'packages/aspida/samples'
      }
    ]

    paths.forEach(({ input, resultDirPath }) => {
      const resultFilePath = `${resultDirPath}/$api.ts`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      const { text, filePath } = build({ input, baseURL })

      expect(text).toBe(result)
      expect(filePath).toBe(resultFilePath)
    })
  })
})
