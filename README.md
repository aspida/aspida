<p align="right">
  <a href="https://github.com/aspidajs/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/blob/develop/packages/aspida/docs/ja/README.md">🇯🇵日本語</a>
</p>

<div align="center">
  <img src="https://aspidajs.github.io/aspida/assets/images/logo.png" alt="aspida" title="aspida" />
</div>

<h1>aspida</h1>

[![npm version][badge-npm]][badge-npm-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][aspida-license]

Type safe HTTP client for the browser and node.js.

<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" title="vscode" />

## Fetures

- CLI that generates a TS file that can define types for path, URL query, header, body, and response.
- The return value is an axios response object
- baseURL and common header can be set with axios

## Procedure

1. Reproduce the endpoint directory structure in the apis directory
1. Export Methods interface with TS file
1. Call 'aspida --build' with npm scripts
1. API type definition file 'apis/\$api.ts' will be generated, so import the application and make an HTTP request

## Getting Started

### Installation

- Using [npm][npm]:

  ```sh
  $ npm install axios
  $ npm install aspida --save-dev
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add axios
  $ yarn add aspida --dev
  ```

### Create apis directory

```sh
$ mkdir apis
```

### Create an endpoint type definition file

- GET: /v1/users/?limit={number}
- POST: /v1/users

  `apis/v1/users/index.ts`

  ```typescript
  interface User {
    id: number
    name: string
  }

  export interface Methods {
    get: {
      params?: {
        limit: number
      }

      response: User[]
    }

    post: {
      data: {
        name: string
      }

      response: User
    }
  }
  ```

- GET: /v1/users/\${userId}
- PUT: /v1/users/\${userId}

  `apis/v1/users/_userId@number.ts`

  Specify the type of path variable “userId” starting with underscore with “@number”  
  If not specified with @, the default path variable type is "number | string"

  ```typescript
  interface User {
    id: number
    name: string
  }

  export interface Methods {
    get: {
      response: User
    }

    put: {
      data: {
        name: string
      }

      response: User
    }
  }
  ```

### Build type definition file

`package.json`

```json
{
  "scripts": {
    "api:build": "aspida --build"
  }
}
```

```sh
$ npm run api:build

> apis/$api.ts was built successfully.
```

### Make HTTP request from application

`src/index.ts`

```typescript
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10

  await api().v1.users.post({ name: "mario" })

  const res = await api().v1.users.get({ params: { limit } })
  console.log(res)
  // req -> GET: /v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: "mario" }], headers: {...} }

  const user = await api()
    .v1.users._userId(userId)
    .$get()
  console.log(user)
  // req -> GET: /v1/users/0
  // res -> { id: 0, name: "mario" }
})()
```

### Examples

See [examples][aspida-examples] for source code.

- **[node](https://github.com/aspidajs/aspida/tree/develop/examples/aspida-node)**:
  Use in [Node.js][nodejs] (TypeScript)
- **[with-mock](https://github.com/aspidajs/aspida/tree/develop/examples/aspida-mock)**:
  Using with a [axios-mock-server][axios-mock-server]

## Tips

### Set baseURL

`src/index.ts`

```typescript
import axios from "axios"
import api from "../apis/$api"

axios.defaults.baseURL = "http://localhost:8080"
;(async () => {
  const limit = 10

  await api().v1.users.post({ name: "mario" })

  const res = await api().v1.users.$get({ params: { limit } })
  console.log(res)
  // req -> GET: http://localhost:8080/v1/users/?limit=10
  // res -> [{ id: 0, name: "mario" }]
})()
```

### Request with token added to common header

`src/index.ts`

```typescript
import axios from "axios"
import api from "../apis/$api"

axios.defaults.headers.common["X-Auth-Token"] = "YOUR TOKEN"
;(async () => {
  const userId = 0
  const limit = 10

  await api().v1.users.post({ name: "mario" })

  const user = await api()
    .v1.users._userId(userId)
    .$get()
  console.log(user)
  // req -> GET: /v1/users/0
  // res -> { id: 0, name: "mario" }
})()
```

### Request using axios Instance

`src/index.ts`

```typescript
import axios from "axios"
import api from "../apis/$api"
;(async () => {
  const limit = 10

  // using axios instance
  const client = axios.create({ baseURL: "http://localhost:10000" })
  const $api = api(client)

  await $api.v1.users.post({ name: "mario" })

  const res = await $api.v1.users.$get({ params: { limit } })
  console.log(res)
  // req -> GET: http://localhost:10000/v1/users/?limit=10
  // res -> [{ id: 0, name: "mario" }]
})()
```

## Contribution

### Build

```bash
npm install
npm run build
node ./bin/index.js --build
```

if you want to watch file changes and rebuild automatically,
you can use `--watch` instead of `--build`

## License

Aspida is licensed under a [MIT License][aspida-license].

<!-- URL: aspida -->

[aspida-examples]: https://github.com/aspidajs/aspida/tree/develop/examples
[aspida-license]: https://github.com/aspidajs/aspida/blob/develop/LICENSE

<!-- URL: Badges -->

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
