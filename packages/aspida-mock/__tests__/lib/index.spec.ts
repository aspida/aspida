import fs from 'fs'
import { run } from '../../src/cli'
import build from '../../src/cli/buildRouteFile'

describe('cli', () => {
  test('version command', () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    const args = ['--version']

    run(args)
    expect(console.log).toHaveBeenCalled()

    spyLog.mockReset()

    run([])
    expect(console.log).not.toHaveBeenCalled()

    spyLog.mockReset()
    spyLog.mockRestore()
  })

  test('snapshot', () => {
    const configs = [
      {
        input: 'packages/aspida/samples',
        resultDirPath: 'packages/aspida/samples'
      },
      {
        input: './packages/aspida/samples',
        resultDirPath: 'packages/aspida/samples'
      },
      {
        input: 'packages/aspida/samples/',
        resultDirPath: 'packages/aspida/samples'
      }
    ]

    configs.forEach(config => {
      const resultFilePath = `${config.resultDirPath}/$mock.ts`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      const { text, filePath } = build(config.input)

      expect(text).toBe(result)
      expect(filePath).toBe(resultFilePath)
    })
  })
})
