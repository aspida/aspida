module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['examples'],
  moduleNameMapper: { '^~/(.+)': '<rootDir>/packages/$1' }
}
