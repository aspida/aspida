import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const moduleNameMapper = {
  ...pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}

const config: { projects: Config.InitialOptions[] } = {
  projects: [
    {
      preset: 'ts-jest',
      testPathIgnorePatterns: ['tsx$'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper
    },
    {
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/__tests__/**/*.tsx'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper
    }
  ]
}

export default config
