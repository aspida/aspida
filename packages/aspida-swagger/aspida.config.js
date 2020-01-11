module.exports = [
  {
    aspida: { input: 'samples/yamlV2' },
    aspidaSwagger: { swagger: 'samples/swaggerV2.yaml' }
  },
  {
    aspida: { input: 'samples/jsonV2' },
    aspidaSwagger: { swagger: 'samples/swaggerV2.json' }
  },
  {
    aspida: { input: 'samples/jsonV3' },
    aspidaSwagger: { swagger: 'samples/swaggerV3.json', yaml: false }
  }
]
