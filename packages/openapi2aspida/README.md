# OpenAPI or Swagger to aspida

| [aspida] | [aspida-mock] | openapi2aspida | [pathpida] | [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] |
| -------- | ------------- | -------------- | ---------- | --------------- | ------------ | --------------- |


<br />
<br />
<br />
<br />
<br />
<div align="center">
  <img src="https://aspidajs.github.io/aspida/logos/svg/black.svg" alt="aspida" title="aspida" width="600" />
</div>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/openapi2aspida">
    <img src="https://img.shields.io/npm/v/openapi2aspida" alt="npm version" />
  </a>
  <a href="https://circleci.com/gh/aspidajs/aspida">
    <img src="https://img.shields.io/circleci/build/github/aspidajs/aspida.svg?label=test" alt="CircleCI" />
  </a>
  <a href="https://codecov.io/gh/aspidajs/aspida">
    <img src="https://img.shields.io/codecov/c/github/aspidajs/aspida.svg" alt="Codecov" />
  </a>
  <a href="https://lgtm.com/projects/g/aspidajs/aspida/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/g/aspidajs/aspida.svg" alt="Language grade: JavaScript" />
  </a>
  <a href="https://dependabot.com">
    <img src="https://api.dependabot.com/badges/status?host=github&repo=aspidajs/aspida" alt="Dependabot Status" />
  </a>
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/openapi2aspida/LICENSE">
    <img src="https://img.shields.io/npm/l/openapi2aspida" alt="License" />
  </a>
</div>
<br />
<p align="center">Convert OpenAPI 3.0 or Swagger 2.0 definitions into aspida.</p>
<br />
<br />

## Getting Started

### Create config file in project root

`aspida.config.js`

```js
module.exports = {
  input: "apis", // "input" of aspida is "output" for openapi2aspida
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json" } // Compatible with yaml/json of OpenAPI3.0/Swagger2.0
}
```

`aspida.config.js` (enable aspida-mock)

```js
module.exports = {
  input: "apis",
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json", mock: true }
}
```

`tarminal`

```sh
$ npx openapi2aspida --build
# apis/$api.ts was built successfully.
# (apis/$mock.ts was built successfully.)
```

## License

openapi2aspida is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/openapi2aspida/LICENSE).

[aspida]: https://github.com/aspidajs/aspida/tree/master/packages/aspida
[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[pathpida]: https://github.com/aspidajs/aspida/tree/master/packages/pathpida
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
