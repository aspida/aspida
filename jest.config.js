const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['<rootDir>/examples/'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/lib/mocks/'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  })
}
