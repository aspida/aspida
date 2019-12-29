import fs from 'fs'
import build from '~/src/buildTemplate'

describe('cli test', () => {
  test('main', () => {
    const baseurl = 'https://example.com'
    const paths = [
      {
        input: '__tests__/apis',
        resultDirPath: '__tests__/apis'
      },
      {
        input: './__tests__/apis',
        resultDirPath: '__tests__/apis'
      },
      {
        input: './__tests__/apis/',
        resultDirPath: '__tests__/apis'
      },
      {
        input: '__tests__/apis/',
        resultDirPath: '__tests__/apis'
      }
    ]

    paths.forEach(({ input, resultDirPath }) => {
      const resultFilePath = `${resultDirPath}/$api.ts`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      const { text, filePath } = build(input, baseurl)

      expect(text).toBe(result)
      expect(filePath).toBe(resultFilePath)
    })
  })
})
