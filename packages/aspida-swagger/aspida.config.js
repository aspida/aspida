module.exports = [
  {
    input: 'samples/yamlV2',
    swagger: { inputFile: 'samples/swaggerV2.yaml' }
  },
  {
    input: 'samples/jsonV2',
    swagger: { inputFile: 'samples/swaggerV2.json' }
  },
  {
    input: 'samples/jsonV3',
    swagger: { inputFile: 'samples/swaggerV3.json', yaml: false }
  }
]
