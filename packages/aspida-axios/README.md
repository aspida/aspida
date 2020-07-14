# @aspida/axios

| [aspida] | [aspida-mock] | @aspida/axios | [@aspida/ky] | [@aspida/fetch] | [@aspida/node-fetch] |
| -------- | ------------- | ------------- | ------------ | --------------- | -------------------- |


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
  <a href="https://www.npmjs.com/package/@aspida/axios">
    <img src="https://img.shields.io/npm/v/@aspida/axios" alt="npm version" />
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
  <a href="https://dependabot.com">
    <img src="https://api.dependabot.com/badges/status?host=github&repo=aspida/aspida" alt="Dependabot Status" />
  </a>
  <a href="https://github.com/aspida/aspida/blob/master/packages/aspida-axios/LICENSE">
    <img src="https://img.shields.io/npm/l/@aspida/axios" alt="License" />
  </a>
</div>
<br />
<div align="center"><a href="https://github.com/axios/axios/">axios</a> client for <a href="https://github.com/aspida/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/axios axios
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/axios axios
  ```

### Make HTTP request from application

`src/index.ts`

```typescript
import axios from "axios"
import aspida from "@aspida/axios"
import api from "../apis/$api"

const axiosConfig = { timeout: 3000, baseURL: "https://example.com/api" }
const client = api(aspida(axios, axiosConfig))
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

aspida-axios is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-axios/LICENSE).

[aspida]: https://github.com/aspida/aspida/tree/master/packages/aspida
[aspida-mock]: https://github.com/aspida/aspida/tree/master/packages/aspida-mock
[@aspida/ky]: https://github.com/aspida/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspida/aspida/tree/master/packages/aspida-fetch
[@aspida/node-fetch]: https://github.com/aspida/aspida/tree/master/packages/aspida-node-fetch
