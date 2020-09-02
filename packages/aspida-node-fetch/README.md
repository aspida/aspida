# @aspida/node-fetch
<br />
<br />
<br />
<div align="center">
  <img src="https://aspida.github.io/aspida/logos/svg/black.svg" alt="aspida" title="aspida" width="600" />
</div>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/fetch">
    <img src="https://img.shields.io/npm/v/@aspida/fetch" alt="npm version" />
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
  <a href="https://github.com/aspida/aspida/blob/master/packages/aspida-node-fetch/LICENSE">
    <img src="https://img.shields.io/npm/l/@aspida/fetch" alt="License" />
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
import fetch from "node-fetch"
import aspida from "@aspida/node-fetch"
import api from "../api/$api"

const fetchConfig = { baseURL: "https://example.com/api" }
const client = api(aspida(fetch, fetchConfig))
;(async () => {
  const userId = 0
  const limit = 10

  await client.v1.users.post({ name: "mario" })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: https://example.com/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: "mario" }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get()
  console.log(user)
  // req -> GET: https://example.com/api/v1/users/0
  // res -> { id: 0, name: "mario" }
})()
```

## License

@aspida/node-fetch is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-node-fetch/LICENSE).
