# pathpida

| [aspida] | [aspida-mock] | [openapi2aspida] | pathpida |
| -------- | ------------- | ---------------- | -------- |


| [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] | [@aspida/node-fetch] |
| --------------- | ------------ | --------------- | -------------------- |


<br />
<br />
<br />
<br />
<br />
<div align="center">
  <img src="https://aspidajs.github.io/aspida/logos/svg/pathpida_black.svg" alt="pathpida" title="pathpida" width="700" />
</div>
<br />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/pathpida">
    <img src="https://img.shields.io/npm/v/pathpida" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/pathpida/LICENSE">
    <img src="https://img.shields.io/npm/l/pathpida" alt="License" />
  </a>
</div>
<br />
<p align="center">TypeScript friendly path generator for Next.js or Nuxt.js.</p>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install pathpida --save-dev
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add pathpida --dev
  ```

### Make HTTP request from application

`pathpida.config.js`

```js
module.exports = {
  input: "pages",
  output: "types",
  baseURL: "https://example.com/api",
  trailingSlash: false
}
```

`package.json`

```json
{
  "scripts": {
    "build:pathpida": "pathpida --build"
  }
}
```

`pages/users/[userId].tsx`

```ts
import React from "react"
import $path from "../types/$path"

export type Query = {
  hoge: string
}

export default () => <div>user info</div>
```

`tarminal`

```sh
$ npm run build:pathpida
# types/$path.ts was built successfully.
```

`pages/index.tsx`

```ts
import React from "react"
import $path from "../types/$path"

export type Query = {
  pageid: number
}

export default () => <a href={$path().users._userId(0).$get({ hoge: "fuga" })}>Link to user page</a>
```

## License

pathpida is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/pathpida/LICENSE).

[aspida]: https://github.com/aspidajs/aspida/tree/master/packages/aspida
[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[openapi2aspida]: https://github.com/aspidajs/aspida/tree/master/packages/openapi2aspida
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
[@aspida/node-fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-node-fetch
