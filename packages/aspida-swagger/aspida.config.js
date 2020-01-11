module.exports = [
  {
    aspida: { input: 'samples/yamlV2' },
    aspida_swagger: { swagger: 'samples/swaggerV2.yaml' }
  },
  {
    aspida: { input: 'samples/jsonV2' },
    aspida_swagger: { swagger: 'samples/swaggerV2.json' }
  },
  {
    aspida: { input: 'samples/jsonV3' },
    aspida_swagger: { swagger: 'samples/swaggerV3.json', yaml: false }
  }
]
