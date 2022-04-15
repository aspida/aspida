import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['samples'],
  coveragePathIgnorePatterns: ['samples', 'dist']
}

export default config
