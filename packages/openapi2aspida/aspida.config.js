module.exports = [
  {
    input: 'samples/swagger',
    openapi: { inputFile: 'samples/swagger.yaml', mock: true }
  },
  {
    input: 'samples/strapi',
    openapi: { inputFile: 'samples/strapi.json' }
  },
  {
    input: 'samples/openapi',
    openapi: { inputFile: 'samples/openapi.json', mock: true, noMockType: true, yaml: false }
  }
]
