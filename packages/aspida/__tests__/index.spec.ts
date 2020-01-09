import fs from 'fs'
import build from '~/aspida/src/buildTemplate'

describe('cli test', () => {
  test('main', () => {
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
      const { text, filePath } = build(input)

      expect(text).toBe(result)
      expect(filePath).toBe(resultFilePath)
    })
  })
})
