import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

const config: { projects: Config.InitialOptions[] } = {
  projects: [
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      testPathIgnorePatterns: ['tsx$'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    },
    {
      preset: 'ts-jest',
      testMatch: ['**/__tests__/**/*.tsx'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    }
  ]
}

export default config
