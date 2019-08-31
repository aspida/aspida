# axios-mock-server

[![npm version](https://img.shields.io/npm/v/axios-mock-server)](https://www.npmjs.com/package/axios-mock-server)
[![CircleCI](https://img.shields.io/circleci/build/github/m-mitsuhide/axios-mock-server.svg?label=test)](https://circleci.com/gh/m-mitsuhide/axios-mock-server)
[![Codecov](https://img.shields.io/codecov/c/github/m-mitsuhide/axios-mock-server.svg)](https://codecov.io/gh/m-mitsuhide/axios-mock-server)
![License](https://img.shields.io/npm/l/axios-mock-server)

RESTful mock server using axios-mock-adapter.

## Usage

### Install axios-mock-server

```sh
$ npm install axios
$ npm install --save-dev axios-mock-server
```

create `.mockserverrc` to project root

```json
{
  "input": "mock", // directory path
  "target": "es6 | cjs"
}
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
import route from "mock/$route"

const mock = new MockServer()
mock.setRoute(route)
```
