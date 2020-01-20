| aspida | [aspida-mock] | [openapi2aspida] | [pathpida] | [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] |
| ------ | ------------- | ---------------- | ---------- | --------------- | ------------ | --------------- |


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
  <a href="https://www.npmjs.com/package/aspida">
    <img src="https://img.shields.io/npm/v/aspida" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/aspida/LICENSE">
    <img src="https://img.shields.io/npm/l/aspida" alt="License" />
  </a>
</div>
<br />
<p align="center">Type safe HTTP client wrapper for the browser and node.js.</p>
<div align="center">
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida/docs/ja#readme">🇯🇵日本語</a>
</div>
<br />
<br />

## Fetures

- Path, URL query, header, body, and response can all be type safe
- FormData / URLSearchParams content can also be type safe
- HTTP client supports axios / ky / ky-universal / fetch
- Path definition is the same naming convention as Nuxt.js pages

<br />
<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" />
<br />

## Procedure

1. Reproduce the endpoint directory structure in the apis directory
1. Export Methods interface with TS file
1. Call 'aspida --build' with npm scripts
1. API type definition file 'apis/\$api.ts' will be generated, so import the application and make an HTTP request

## Getting Started

### Installation (axios ver.)

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/axios axios
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/axios axios
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
  const client = api(aspida())

  await client.v1.users.post({ data: { name: "taro" } })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: /v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get()
  console.log(user)
  // req -> GET: /v1/users/0
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
module.exports = { input: "src" }
```

Specify baseURL in configuration file

```javascript
module.exports = { input: "apis", baseURL: "https://example.com/api" }
```

If you want to define multiple API endpoints, specify them in an array

```javascript
module.exports = [{ input: "api1" }, { input: "api2", baseURL: "https://example.com/api" }]
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
  const client = api(aspida())
  const iconImage = imageBuffer

  const user = await client.v1.users.$post({
    data: {
      name: "taro",
      icon: iconImage
    }
  })
  console.log(user)
  // req -> POST: h/v1/users/0
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
  const client = api(aspida())

  const user = await client.v1.users.$post({ data: { name: "taro" } })
  console.log(user)
  // req -> POST: /v1/users/0
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
  const client = api(aspida())

  const user = await client.v1.users.$get({ query: { name: "taro" } })
  console.log(user)
  // req -> POST: /v1/users/0
  // res -> ArrayBuffer
})()
```

## License

aspida is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida/LICENSE).

[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[openapi2aspida]: https://github.com/aspidajs/aspida/tree/master/packages/openapi2aspida
[pathpida]: https://github.com/aspidajs/aspida/tree/master/packages/pathpida
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
