module.exports = [
  {
    input: 'samples/swagger',
    openapi: { inputFile: 'samples/swagger.yaml', mock: true }
  },
  {
    input: 'samples/simple',
    openapi: { inputFile: 'samples/simple.yaml', mock: true, noMockType: true }
  },
  {
    input: 'samples/strapi',
    openapi: { inputFile: 'samples/strapi.json' }
  },
  {
    input: 'samples/freee',
    openapi: { inputFile: 'samples/freee.json', mock: true }
  },
  {
    input: 'samples/openapi',
    openapi: { inputFile: 'samples/openapi.json', mock: true, yaml: false }
  }
]
