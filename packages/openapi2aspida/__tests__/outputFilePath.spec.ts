import outputFilePath from '../src/outputFilePath'

describe('ファイルパスの検査', () => {
  test('ファイルパスが正しいこと', () => {
    expect(
      outputFilePath({
        InputFilePath: 'apiapi',
        cliOutputPath: 'apiapi/apiapi/apiapi'
      })
    ).toBe('apiapi/apiapi/apiapi')
  })
  test('cli の -oが null', () => {
    expect(
      outputFilePath({
        InputFilePath: 'apiapi',
        cliOutputPath: undefined
      })
    ).toBe('apiapi')
  })
  test('cli の -oが指定されていない', () => {
    expect(
      outputFilePath({
        InputFilePath: 'apiapi'
      })
    ).toBe('apiapi')
  })
})
