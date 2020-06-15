# @aspida/ky

| [aspida] | [aspida-mock] | [@aspida/axios] | @aspida/ky | [@aspida/fetch] | [@aspida/node-fetch] |
| -------- | ------------- | --------------- | ---------- | --------------- | -------------------- |


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
  <a href="https://www.npmjs.com/package/@aspida/ky">
    <img src="https://img.shields.io/npm/v/@aspida/ky" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/aspida-ky/LICENSE">
    <img src="https://img.shields.io/npm/l/@aspida/ky" alt="License" />
  </a>
</div>
<br />
<div align="center"><a href="https://github.com/sindresorhus/ky/">ky</a> client for <a href="https://github.com/aspidajs/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/ky ky
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/ky ky
  ```

### Make HTTP request from application

`src/index.ts`

```typescript
import ky from "ky"
import aspida from "@aspida/ky"
import api from "../apis/$api"

const kyConfig = { timeout: 3000, prefixUrl: "https://example.com/api" }
const client = api(aspida(ky, kyConfig))
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

aspida-ky is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida-ky/LICENSE).

[aspida]: https://github.com/aspidajs/aspida/tree/master/packages/aspida
[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
[@aspida/node-fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-node-fetch
