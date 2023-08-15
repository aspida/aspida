# @aspida/axios

<br />
<img src="https://aspida.github.io/aspida/logos/png/logo.png" alt="aspida" title="aspida" />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/axios">
    <img src="https://img.shields.io/npm/v/@aspida/axios" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@aspida/axios">
    <img src="https://img.shields.io/npm/dm/@aspida/axios" alt="npm download" />
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
  $ npm install aspida @aspida/axios axios
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add aspida @aspida/axios axios
  ```

### Make HTTP request from application

`src/index.ts`

```ts
import axios from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

const axiosConfig = { timeout: 3000, baseURL: "https://example.com/api" };
const client = api(aspida(axios, axiosConfig));
(async () => {
  const userId = 0;
  const limit = 10;

  await client.v1.users.post({ name: "mario" });

  const res = await client.v1.users.get({ query: { limit } });
  console.log(res);
  // req -> GET: https://example.com/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: "mario" }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get();
  console.log(user);
  // req -> GET: https://example.com/api/v1/users/0
  // res -> { id: 0, name: "mario" }
})();
```

## License

@aspida/axios is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-axios/LICENSE).
