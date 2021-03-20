module.exports = [
  {
    input: 'samples/basic',
    baseURL: 'https://example.com/api/',
    trailingSlash: false
  },
  { input: 'samples/eachDir', trailingSlash: true, outputEachDir: true },
  { input: 'samples/normalOnly' },
  { input: 'samples/aliasOnly', outputEachDir: true }
]
