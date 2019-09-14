<p align="right">
  <a href="https://github.com/m-mitsuhide/axios-mock-server#readme">🇺🇸English</a> |
  <a href="https://github.com/m-mitsuhide/axios-mock-server/blob/develop/docs/ja/README.md">🇯🇵日本語</a>
</p>

<h1>axios-mock-server</h1>

[![npm version][badge-npm]][badge-npm-url]
[![npm bundle size][badge-bundlephobia]][badge-bundlephobia-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][axios-mock-server-license]

RESTful mock server using axios.

## Usage

### Install axios-mock-server

```sh
$ npm install axios
$ npm install --save-dev axios-mock-server
```

create `.mockserverrc` to project root

```json
{
  "input": "mocks",
  "target": "es6 | cjs",
  "outputExt": "js | ts"
}
```

`.gitignore`

```
mocks/$route.js
mocks/$route.ts
```

`package.json`

```json
{
  "script": {
    "mock:build": "axios-mock-server -b",
    "mock:watch": "axios-mock-server -w"
  }
}
```

`your script`

```javascript
import MockServer from "axios-mock-server"
import route from "mocks/$route"

const mock = new MockServer(route)
```

## License

axios-mock-server is licensed under a [MIT License][axios-mock-server-license].

<!-- URL: axios-mock-server -->

[axios-mock-server-examples]: https://github.com/m-mitsuhide/axios-mock-server/tree/develop/examples
[axios-mock-server-license]: https://github.com/m-mitsuhide/axios-mock-server/blob/develop/LICENSE

<!-- URL: Badges -->

[badge-bundlephobia-url]: https://bundlephobia.com/result?p=axios-mock-server@latest
[badge-bundlephobia]: https://img.shields.io/bundlephobia/min/axios-mock-server
[badge-ci-url]: https://circleci.com/gh/m-mitsuhide/axios-mock-server
[badge-ci]: https://img.shields.io/circleci/build/github/m-mitsuhide/axios-mock-server.svg?label=test
[badge-coverage-url]: https://codecov.io/gh/m-mitsuhide/axios-mock-server
[badge-coverage]: https://img.shields.io/codecov/c/github/m-mitsuhide/axios-mock-server.svg
[badge-dependabot]: https://badgen.net/dependabot/m-mitsuhide/axios-mock-server?label=dependabot
[badge-lgtm-url]: https://lgtm.com/projects/g/m-mitsuhide/axios-mock-server/context:javascript
[badge-lgtm]: https://img.shields.io/lgtm/grade/javascript/g/m-mitsuhide/axios-mock-server.svg
[badge-license]: https://img.shields.io/npm/l/axios-mock-server
[badge-npm-url]: https://www.npmjs.com/package/axios-mock-server
[badge-npm]: https://img.shields.io/npm/v/axios-mock-server

<!-- URL: General -->

[axios-instance]: https://github.com/axios/axios#creating-an-instance
[axios]: https://github.com/axios/axios
[dependabot]: https://dependabot.com
[git]: https://git-scm.com/
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[nuxtjs-axios]: https://github.com/nuxt-community/axios-module
[nuxtjs-routing]: https://nuxtjs.org/guide/routing
[nuxtjs]: https://nuxtjs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
