/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  projects: [
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      testPathIgnorePatterns: ['sample1', 'sample2', 'tsx$'],
      coveragePathIgnorePatterns: ['sample1', 'sample2', 'dist'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    },
    {
      preset: 'ts-jest',
      testMatch: ['**/__tests__/**/*.tsx'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/'
      })
    }
  ]
}
