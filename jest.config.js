module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['samples'],
  coveragePathIgnorePatterns: ['samples', 'dist']
}
