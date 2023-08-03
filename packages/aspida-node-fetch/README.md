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

```ts
import fetch, { Response } from "node-fetch";
import aspida, { HTTPError } from "@aspida/node-fetch";
import api from "../api/$api";

const fetchConfig = {
  baseURL: "https://example.com/api",
  throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
};

const client = api(aspida(fetch, fetchConfig));
(async () => {
  const userId = 0;
  const limit = 10;

  await client.v1.users.post({ name: "mario" });

  const res = await client.v1.users.get({ query: { limit } });
  console.log(res);
  // req -> GET: https://example.com/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: "mario" }], headers: {...} }

  try {
    const user = await client.v1.users._userId(userId).$get();
    console.log(user);
    // req -> GET: https://example.com/api/v1/users/0
    // res -> { id: 0, name: "mario" }
  } catch (e) {
    if (e instanceof HTTPError) {
      console.log(e.response instanceof Response); // true
    } else {
      console.log(e.message);
    }
  }
})();
```

### Serialize GET parameters manually

`src/index.ts`

```ts
import fetch from "node-fetch";
import aspida, { HTTPError } from "@aspida/fetch";
import qs from "qs";
import api from "../api/$api";

const fetchConfig = {
  paramsSerializer: params => qs.stringify(params),
};

const client = api(aspida(fetch, fetchConfig));
(async () => {
  const users = await client.v1.users.$get({
    // config: { paramsSerializer: (params) => qs.stringify(params) },
    query: { ids: [1, 2, 3] },
  });
  console.log(users);
  // req -> GET: /v1/users/?ids%5B0%5D=1&ids%5B1%5D=2&ids%5B2%5D=3
  // decoded ->             ids[0]=1    &ids[1]=2    &ids[2]=3
  // res -> [{ id: 1, name: "taro1" }, { id: 2, name: "taro2" }, { id: 3, name: "taro3" }]
})();
```

## License

@aspida/node-fetch is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-node-fetch/LICENSE).
