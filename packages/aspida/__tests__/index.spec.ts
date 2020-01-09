import fs from 'fs'
import build from '~/aspida/src/buildTemplate'

describe('cli test', () => {
  test('main', () => {
    const paths = [
      {
        input: 'packages/aspida/__tests__/apis',
        resultDirPath: 'packages/aspida/__tests__/apis'
      },
      {
        input: './packages/aspida/__tests__/apis',
        resultDirPath: 'packages/aspida/__tests__/apis'
      },
      {
        input: './packages/aspida/__tests__/apis/',
        resultDirPath: 'packages/aspida/__tests__/apis'
      },
      {
        input: 'packages/aspida/__tests__/apis/',
        resultDirPath: 'packages/aspida/__tests__/apis'
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
