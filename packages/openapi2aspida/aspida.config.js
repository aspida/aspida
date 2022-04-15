module.exports = [
  {
    input: 'samples/swagger',
    outputEachDir: true,
    openapi: { inputFile: 'samples/swagger.yaml' }
  },
  {
    input: 'samples/simple',
    outputEachDir: true,
    openapi: { inputFile: 'samples/simple.yaml' }
  },
  {
    input: 'samples/strapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/strapi.json' }
  },
  {
    input: 'samples/freee',
    outputEachDir: true,
    openapi: { inputFile: 'samples/freee.json' }
  },
  {
    input: 'samples/openapi',
    outputEachDir: true,
    openapi: { inputFile: 'samples/openapi.json', yaml: false }
  },
  {
    input: 'samples/externals',
    outputEachDir: true,
    openapi: { inputFile: 'samples/externals.json', yaml: false }
  },
  {
    input: 'samples/nullable-object',
    outputEachDir: true,
    openapi: { inputFile: 'samples/nullable-object.yml' }
  },
  {
    input: 'samples/array-one-of',
    outputEachDir: true,
    openapi: { inputFile: 'samples/array-one-of.yml' }
  }
  // {
  //   input: 'samples/path-at-mark',
  //   outputEachDir: true,
  //   openapi: { inputFile: 'samples/path-at-mark.yml' }
  // }
]
