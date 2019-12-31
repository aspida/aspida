module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'examples',
    '<rootDir>/packages/aspida/__tests__/apis/',
    '<rootDir>/packages/aspida/__tests__/utils/',
    '<rootDir>/packages/aspida-mock/__tests__/mocks/',
    '<rootDir>/packages/aspida-mock/__tests__/utils/'
  ],
  moduleNameMapper: { '^~/(.+)': '<rootDir>/packages/$1' }
}
