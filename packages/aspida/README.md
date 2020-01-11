<p align="right">
  <a href="https://github.com/aspidajs/aspida/tree/develop/packages/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/develop/packages/aspida/docs/ja#readme">🇯🇵日本語</a>
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

Type safe HTTP client wrapper for the browser and node.js.

<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" title="vscode" />

## Fetures

- Path, URL query, header, body, and response can all be type safe
- FormData / URLSearchParams content can also be type safe
- HTTP client supports axios / ky / ky-universal / fetch
- Path definition is the same naming convention as Nuxt.js pages

## Procedure

1. Reproduce the endpoint directory structure in the apis directory
1. Export Methods interface with TS file
1. Call 'aspida --build' with npm scripts
1. API type definition file 'apis/\$api.ts' will be generated, so import the application and make an HTTP request

## Getting Started

### Installation (axios ver.)

- Using [npm][npm]:

  ```sh
  $ npm install aspida axios @aspida/axios
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add  aspida axios @aspida/axios
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
      query?: {
        limit: number
      }

      resData: User[]
    }

    post: {
      reqData: {
        name: string
      }

      resData: User
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
      resData: User
    }

    put: {
      reqData: {
        name: string
      }

      resData: User
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
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  await client.v1.users.post({ data: { name: "taro" } })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: http://localhost:8080/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get()
  console.log(user)
  // req -> GET: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### Learn more about HTTP clients

- **[aspida-axios](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-axios#readme)**
- **[aspida-ky](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-ky#readme)**
- **[aspida-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-fetch#readme)**

## Tips

### Change the directory where type definition file is placed to other than apis

Create a configuration file at the root of the project

`aspida.config.js`

```javascript
module.exports = { input: 'src' }
```

Specify baseURL in configuration file

```javascript
module.exports = { input: 'apis', baseURL: 'https://example.com/api' }
```

If you want to define multiple API endpoints, specify them in an array

```javascript
module.exports = [
  { input: 'api1' },
  { input: 'api2', baseURL: 'https://example.com/api' }
]
```

### POST with FormData

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  post: {
    reqType: FormData

    reqData: {
      name: string
      icon: ArrayBuffer
    }

    resData: {
      id: number
      name: string
    }
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)
  const iconImage = imageBuffer

  const user = await client.v1.users.$post({
    data: {
      name: "taro",
      icon: iconImage
    }
  })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### POST with URLSearchParams

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  post: {
    reqType: URLSearchParams

    reqData: {
      name: string
    }

    resData: {
      id: number
      name: string
    }
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  const user = await client.v1.users.$post({ data: { name: "taro" } })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### Receive response with ArrayBuffer

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  get: {
    query: {
      name: string
    }

    resData: ArrayBuffer
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  const user = await client.v1.users.$get({ query: { name: "taro" } })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> ArrayBuffer
})()
```

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
