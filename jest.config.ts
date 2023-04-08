import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: { projects: Config.InitialOptions[] } = {
  projects: [
    // @ts-expect-error
    {
      preset: 'ts-jest',
      testPathIgnorePatterns: ['tsx$'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    },
    // @ts-expect-error
    {
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['**/__tests__/**/*.tsx'],
      coveragePathIgnorePatterns: ['sample1', 'dist'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    }
  ]
}

export default config
