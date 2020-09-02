/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
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
      coveragePathIgnorePatterns: ['sample1'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    }
  ]
}
