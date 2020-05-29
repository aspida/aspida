# @aspida/node-fetch

| [aspida] | [aspida-mock] | [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] | @aspida/node-fetch |
| -------- | ------------- | --------------- | ------------ | --------------- | ------------------ |


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
  <a href="https://www.npmjs.com/package/@aspida/fetch">
    <img src="https://img.shields.io/npm/v/@aspida/fetch" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/aspida-fetch/LICENSE">
    <img src="https://img.shields.io/npm/l/@aspida/fetch" alt="License" />
  </a>
</div>
<br />
<div align="center"><a href="https://www.npmjs.com/package/node-fetch">node-fetch</a> client for <a href="https://github.com/aspidajs/aspida/">aspida</a>.</div>
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
import aspida from "@aspida/fetch"
import api from "../apis/$api"

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

aspida-fetch is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida-fetch/LICENSE).

[aspida]: https://github.com/aspidajs/aspida/tree/master/packages/aspida
[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
