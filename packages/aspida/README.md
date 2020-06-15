| aspida | [aspida-mock] | [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] | [@aspida/node-fetch] |
| ------ | ------------- | --------------- | ------------ | --------------- | -------------------- |


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
  <a href="https://github.com/aspidajs/aspida/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspidajs/aspida/workflows/Node.js%20CI/badge.svg?branch=master" alt="Node.js CI" />
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
<p align="center">TypeScript friendly HTTP client wrapper for the browser and node.js.</p>
<div align="center">
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida/docs/ja#readme">🇯🇵日本語</a>
</div>
<br />
<br />

## Features

- Path, URL query, header, body, and response can all specify the type
- FormData / URLSearchParams content can also specify the type
- HTTP client supports axios / ky / ky-universal / fetch / node-fetch
- Path definition is the same naming convention as Nuxt.js pages

<br />
<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" />
<br />

## Procedure

1. Reproduce the endpoint directory structure in the apis directory
1. Export a Type alias named "Methods"
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
  type User = {
    id: number
    name: string
  }

  export type Methods = {
    get: {
      query?: {
        limit: number
      }

      resBody: User[]
    }

    post: {
      reqBody: {
        name: string
      }

      resBody: User
    }
  }
  ```

- GET: /v1/users/\${userId}
- PUT: /v1/users/\${userId}

  `apis/v1/users/_userId@number.ts`

  Specify the type of path variable “userId” starting with underscore with “@number”  
  If not specified with @, the default path variable type is "number | string"

  ```typescript
  type User = {
    id: number
    name: string
  }

  export type Methods = {
    get: {
      resBody: User
    }

    put: {
      reqBody: {
        name: string
      }

      resBody: User
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

### Read more posts by DEV Community

**[aspida - DEV Community](https://dev.to/t/aspida)**

### Learn more about HTTP clients

- **[aspida-axios](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-axios#readme)**
- **[aspida-ky](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-ky#readme)**
- **[aspida-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-fetch#readme)**
- **[aspida-node-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-node-fetch#readme)**

## Command Line Interface Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th width="100%">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td nowrap><code>--build</code><br /><code>-b</code></td>
      <td></td>
      <td></td>
      <td>
        Generate <code>$api.ts</code> required for
        aspida routing.
      </td>
    </tr>
    <tr>
      <td nowrap><code>--config</code><br /><code>-c</code></td>
      <td><code>string</code></td>
      <td><code>"aspida.config.js"</code></td>
      <td>Specify the path to the configuration file.</td>
    </tr>
    <tr>
      <td nowrap><code>--watch</code><br /><code>-w</code></td>
      <td></td>
      <td></td>
      <td>
        Enable watch mode.<br />
        Regenerate <code>$api.ts</code> according to
        the increase / decrease of the API endpoint file.
      </td>
    </tr>
    <tr>
      <td nowrap><code>--version</code><br /><code>-v</code></td>
      <td></td>
      <td></td>
      <td>Print aspida version.</td>
    </tr>
  </tbody>
</table>

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

### Serialize GET parameters manually

aspida leaves GET parameter serialization to standard HTTP client behavior  
If you want to serialize manually, you can use config object of HTTP client

`src/index.ts`

```typescript
import axios from "axios"
import qs from "qs"
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(
    aspida(axios, { paramsSerializer: params => qs.stringify(params, { indices: false }) })
  )

  const users = await client.v1.users.$get({
    // config: { paramsSerializer: (params) => qs.stringify(params, { indices: false }) },
    query: { ids: [1, 2, 3] }
  })
  console.log(users)
  // req -> GET: /v1/users/?ids=1&ids=2&ids=3
  // res -> [{ id: 1, name: 'taro1' }, { id: 2, name: 'taro2' }, { id: 3, name: 'taro3' }]
})()
```

### POST with FormData

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  post: {
    reqFormat: FormData

    reqBody: {
      name: string
      icon: ArrayBuffer
    }

    resBody: {
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
  const client = api(aspida())

  const user = await client.v1.users.$post({
    data: {
      name: "taro",
      icon: imageBuffer
    }
  })
  console.log(user)
  // req -> POST: h/v1/users
  // res -> { id: 0, name: 'taro' }
})()
```

### POST with URLSearchParams

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  post: {
    reqFormat: URLSearchParams

    reqBody: {
      name: string
    }

    resBody: {
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
  const client = api(aspida())

  const user = await client.v1.users.$post({ data: { name: "taro" } })
  console.log(user)
  // req -> POST: /v1/users
  // res -> { id: 0, name: 'taro' }
})()
```

### Receive response with ArrayBuffer

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  get: {
    query: {
      name: string
    }

    resBody: ArrayBuffer
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(aspida())

  const user = await client.v1.users.$get({ query: { name: "taro" } })
  console.log(user)
  // req -> GET: /v1/users/?name=taro
  // res -> ArrayBuffer
})()
```

### Convert from OpenAPI / Swagger

`aspida.config.js`

```js
module.exports = {
  input: "apis", // "input" of aspida is "output" for openapi2aspida
  openapi: { inputFile: "https://petstore.swagger.io/v2/swagger.json" } // Compatible with yaml/json of OpenAPI3.0/Swagger2.0
}
```

`tarminal`

```sh
$ npx openapi2aspida --build
# apis/$api.ts was built successfully.
```

[Docs of openapi2aspida](https://github.com/aspidajs/openapi2aspida)

## License

aspida is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida/LICENSE).

[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
[@aspida/node-fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-node-fetch
