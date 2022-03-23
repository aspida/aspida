module.exports = [
  {
    input: 'samples/basic',
    baseURL: 'https://example.com/api/',
    trailingSlash: false,
    outputMode: 'all'
  },
  { input: 'samples/eachDir', trailingSlash: true, outputEachDir: true },
  { input: 'samples/normalOnly', outputMode: 'normalOnly' },
  { input: 'samples/aliasOnly', outputEachDir: true, outputMode: 'aliasOnly' },
  {
    input: 'samples/useDefineMethods',
    baseURL: 'https://example.com/api/',
    trailingSlash: false,
    outputMode: 'all'
  }
]
