# @aspida/node-fetch
<br />
<img src="https://aspida.github.io/aspida/logos/png/logo.png" alt="aspida" title="aspida" />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/node-fetch">
    <img src="https://img.shields.io/npm/v/@aspida/node-fetch" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@aspida/node-fetch">
    <img src="https://img.shields.io/npm/dm/@aspida/node-fetch" alt="npm download" />
  </a>
  <a href="https://github.com/aspida/aspida/actions?query=workflow%3A%22Node.js+CI%22">
    <img src="https://github.com/aspida/aspida/workflows/Node.js%20CI/badge.svg?branch=master" alt="Node.js CI" />
  </a>
  <a href="https://codecov.io/gh/aspida/aspida">
    <img src="https://img.shields.io/codecov/c/github/aspida/aspida.svg" alt="Codecov" />
  </a>
  <a href="https://lgtm.com/projects/g/aspida/aspida/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/g/aspida/aspida.svg" alt="Language grade: JavaScript" />
  </a>
</div>
<br />
<div align="center"><a href="https://www.npmjs.com/package/node-fetch">node-fetch</a> client for <a href="https://github.com/aspida/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install node-fetch @aspida/node-fetch
  $ npm install @types/node-fetch --save-dev
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add node-fetch @aspida/node-fetch
  $ yarn add @types/node-fetch --dev
  ```

### Make HTTP request from application

`src/index.ts`

```typescript
import fetch, { Response } from "node-fetch"
import aspida, { HTTPError } from "@aspida/node-fetch"
import api from "../api/$api"

const fetchConfig = {
  baseURL: "https://example.com/api",
  throwHttpErrors: true // throw an error on 4xx/5xx, default is false
}

const client = api(aspida(fetch, fetchConfig))
;(async () => {
  const userId = 0
  const limit = 10

  await client.v1.users.post({ name: "mario" })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: https://example.com/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: "mario" }], headers: {...} }

  try {
    const user = await client.v1.users._userId(userId).$get()
    console.log(user)
    // req -> GET: https://example.com/api/v1/users/0
    // res -> { id: 0, name: "mario" }
  } catch (e: HTTPError | Error) {
    if (e instanceof HTTPError) {
      console.log(e.response instanceof Response) // true
    } else {
      console.log(e.message)
    }
  }
})()
```

## License

@aspida/node-fetch is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-node-fetch/LICENSE).
