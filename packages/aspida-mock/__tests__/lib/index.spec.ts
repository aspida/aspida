import fs from 'fs'
import { run } from '~/aspida-mock/src/lib/cli'
import build from '~/aspida-mock/src/lib/buildRouteFile'

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
        input: 'packages/aspida-mock/__tests__/mocks',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'es6' as const,
        outputExt: 'ts' as const
      },
      {
        input: 'packages/aspida-mock/__tests__/mocks',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'cjs' as const,
        outputExt: 'js' as const
      },
      {
        input: './packages/aspida-mock/__tests__/mocks',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'es6' as const,
        outputExt: 'ts' as const
      },
      {
        input: './packages/aspida-mock/__tests__/mocks',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'cjs' as const,
        outputExt: 'js' as const
      },
      {
        input: 'packages/aspida-mock/__tests__/mocks/',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'es6' as const,
        outputExt: 'ts' as const
      },
      {
        input: 'packages/aspida-mock/__tests__/mocks/',
        resultDirPath: 'packages/aspida-mock/__tests__/mocks',
        target: 'cjs' as const,
        outputExt: 'js' as const
      }
    ]

    configs.forEach(config => {
      const resultFilePath = `${config.resultDirPath}/$mock.${config.outputExt}`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      const { text, filePath } = build(config.input, config, 'https://example.com/api')

      expect(text).toBe(result)
      expect(filePath).toBe(resultFilePath)
    })
  })
})
