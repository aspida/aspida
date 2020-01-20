module.exports = [
  {
    input: 'samples/swagger',
    openapi: { inputFile: 'samples/swagger.yaml' }
  },
  {
    input: 'samples/openapi',
    openapi: { inputFile: 'samples/openapi.json', yaml: false }
  }
]
