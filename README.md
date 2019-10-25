<h1>aspida</h1>

[![npm version][badge-npm]][badge-npm-url]
[![npm bundle size][badge-bundlephobia]][badge-bundlephobia-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][aspida-license]

Type safe HTTP client for the browser and node.js.

## Getting Started

### Installation

- Using [npm][npm]:

  ```sh
  $ npm install axios aspida
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add axios aspida
  ```

### Examples

See [examples][aspida-examples] for source code.

- **[node](https://github.com/aspidajs/aspida/tree/develop/examples/node)**:
  Use in [Node.js][nodejs] (TypeScript)
- **[with-mock](https://github.com/aspidajs/aspida/tree/develop/examples/with-mock)**:
  Using with a [axios-mock-server][axios-mock-server]

## Contribution

### Build

```bash
npm install
npm run build
node ./bin/index.js --build --baseurl=http://example.com
```

if you want to watch file changes and rebuild automatically,
you can use `--watch` instead of `--build`

## License

Aspida is licensed under a [MIT License][aspida-license].

<!-- URL: aspida -->

[aspida-examples]: https://github.com/aspidajs/aspida/tree/develop/examples
[aspida-license]: https://github.com/aspidajs/aspida/blob/develop/LICENSE

<!-- URL: Badges -->

[badge-bundlephobia-url]: https://bundlephobia.com/result?p=aspida@latest
[badge-bundlephobia]: https://img.shields.io/bundlephobia/min/aspida
[badge-ci-url]: https://circleci.com/gh/aspidajs/aspida
[badge-ci]: https://img.shields.io/circleci/build/github/aspidajs/aspida.svg?label=test
[badge-coverage-url]: https://codecov.io/gh/aspidajs/aspida
[badge-coverage]: https://img.shields.io/codecov/c/github/aspidajs/aspida.svg
[badge-dependabot]: https://api.dependabot.com/badges/status?host=github&repo=aspidajs/aspida
[badge-lgtm-url]: https://lgtm.com/projects/g/aspidajs/aspida/context:javascript
[badge-lgtm]: https://img.shields.io/lgtm/grade/javascript/g/aspidajs/aspida.svg
[badge-license]: https://img.shields.io/npm/l/aspida
[badge-npm-url]: https://www.npmjs.com/package/aspida
[badge-npm]: https://img.shields.io/npm/v/aspida

<!-- URL: General -->

[axios-mock-server]: https://github.com/m-mitsuhide/axios-mock-server/
[dependabot]: https://dependabot.com
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
