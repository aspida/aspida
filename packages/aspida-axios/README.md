<h1>aspida-axios</h1>

[![npm version][badge-npm]][badge-npm-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][license]

[axios][axios] client for [aspida][aspida].

## Getting Started

### Installation

- Using [npm][npm]:

  ```sh
  $ npm install aspida axios @aspida/axios
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add aspida axios @aspida/axios
  ```

### Make HTTP request from application

`src/index.ts`

```typescript
import axios from "axios"
import aspida from "@aspida/axios"
import api from "../apis/$api"

const axiosConfig = { timeout: 3000 }
const client = api(aspida(axios, axiosConfig), "https://example.com/api")
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

aspida-axios is licensed under a [MIT License][license].

<!-- URL: aspida -->

[license]: https://github.com/aspidajs/aspida/blob/develop/packages/aspida-axios/LICENSE

<!-- URL: Badges -->

[badge-ci-url]: https://circleci.com/gh/aspidajs/aspida
[badge-ci]: https://img.shields.io/circleci/build/github/aspidajs/aspida.svg?label=test
[badge-coverage-url]: https://codecov.io/gh/aspidajs/aspida
[badge-coverage]: https://img.shields.io/codecov/c/github/aspidajs/aspida.svg
[badge-dependabot]: https://api.dependabot.com/badges/status?host=github&repo=aspidajs/aspida
[badge-lgtm-url]: https://lgtm.com/projects/g/aspidajs/aspida/context:javascript
[badge-lgtm]: https://img.shields.io/lgtm/grade/javascript/g/aspidajs/aspida.svg
[badge-license]: https://img.shields.io/npm/l/@aspida/axios
[badge-npm-url]: https://www.npmjs.com/package/@aspida/axios
[badge-npm]: https://img.shields.io/npm/v/@aspida/axios

<!-- URL: General -->

[aspida]: https://github.com/aspidajs/aspida/
[axios]: https://github.com/axios/axios/
[dependabot]: https://dependabot.com/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
