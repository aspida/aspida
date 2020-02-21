# aspida-mock

| [aspida] | aspida-mock | [openapi2aspida] | [pathpida] | [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] |
| -------- | ----------- | ---------------- | ---------- | --------------- | ------------ | --------------- |


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
  <a href="https://www.npmjs.com/package/aspida-mock">
    <img src="https://img.shields.io/npm/v/aspida-mock" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/aspida-mock/LICENSE">
    <img src="https://img.shields.io/npm/l/aspida-mock" alt="License" />
  </a>
</div>
<br />
<p align="center">TypeScript friendly RESTful API mock for aspida.</p>
<div align="center">
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock/docs/ja#readme">🇯🇵日本語</a>
</div>
<br />
<br />

## Features

- API mock dedicated to TypeScript using the type definition of [aspida](https://github.com/aspidajs/aspida/tree/master/packages/aspida).
- Supports all HTTP methods such as `GET`/`POST`/`PUT`/`DELETE` in a few lines.
- No server required, works only with browser.

## Usage

### Installation (@aspida/axios only mock compatible)

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/axios axios
  $ npm install aspida-mock --save-dev
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/axios axios
  $ yarn add aspida-mock --dev
  ```

### Creating API endpoints

Export mockMethods in aspida type definition file.

`apis/users.ts`

<!-- prettier-ignore -->
```ts
import { mockMethods } from 'aspida-mock'

export interface Methods {
  post: {
    query: { id: number }
    reqHeaders: { val: string }
    reqBody: { name: string }
    resHeaders: { token: string }
    resBody: {
      id: number
      name: string
    }
  }
}

export default mockMethods<Methods>({
  post: ({ query, reqHeaders, reqBody }) => ({
    status: 200,
    resHeaders: { token: reqHeaders.val },
    resBody: {
      id: query.id,
      name: reqBody.name
    }
  })
})
```

`package.json`

```json
{
  "scripts": {
    "build": "aspida --build && aspida-mock --build"
  }
}
```

`tarminal`

```sh
$ npm run build
```

`index.ts`

<!-- prettier-ignore -->
```ts
import aspidaClient from '@aspida/axios'
import mockClient from '@aspida/axios/dist/mockClient'
import api from './apis/$api'
import mock from './apis/$mock'

const client = process.env.NODE_ENV === 'development' ? mock(mockClient()) : api(aspidaClient())

;(async () => {
  const res = await client.users.post({
    query: { id: 0 },
    headers: { val: 'hoge' },
    data: { name: 'fuga' }
  })

  console.log(res)
  /*
  {
    status: 200,
    headers: { token: 'hoge' },
    data: { id: 0, name: 'fuga' }
  }
  */
})()
```

### Middleware

For every request, you can insert processing before reaching mockMethods.

`apis/@middleware.ts`

```ts
import { mockMiddleware } from "aspida-mock"

export default mockMiddleware([
  (req, _res, next) => {
    next({ ...req, query: { hoge: req.query.hoge + 1 } })
  },
  (req, res) => {
    res({ status: 200, resBody: { fuga: req.query.hoge + 2 } })
  }
])
```

`apis/users.ts`

<!-- prettier-ignore -->
```ts
import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query: { hoge: number }
    resBody: {
      fuga: number
    }
  }
}

export default mockMethods<Methods>({
  get: ({ query }) => ({
    status: 200,
    resBody: { fuga: query.hoge + 4 }
  })
})
```

`index.ts`

<!-- prettier-ignore -->
```ts
import mockClient from '@aspida/axios/dist/mockClient'
import mock from './apis/$mock'

const client = mock(mockClient())

;(async () => {
  const res = await client.users.get({
    query: { hoge: 0 }
  })

  console.log(res)
  /*
  {
    status: 200,
    data: { fuga: 3 }
  }
  */
})()
```

### Options

aspida-mock has several options available.

#### `delayMSec: number`

Simulate response delay.

<!-- prettier-ignore -->
```ts
import mockClient from '@aspida/axios/dist/mockClient'
import mock from './apis/$mock'

const client = mock(mockClient(), { delayMSec: 500 })

;(async () => {
  console.time()
  await client.users.$get()
  console.timeEnd() // default: 506.590ms
})()
```

#### `log: boolean`

Switch request log output.

<!-- prettier-ignore -->
```ts
import mockClient from '@aspida/axios/dist/mockClient'
import mock from './apis/$mock'

const client = mock(mockClient(), { log: true })

;(async () => {
  await client.users.$get({ query: { bar: 'baz' }})
  // [mock] get: /users?bar=baz => 200
})()
```

### Cautions

#### `.gitignore`

Exclude `$mock.ts` generated by aspida-mock in the build from [Git](https://git-scm.com/) monitoring.

```sh
$ echo "\$mock.ts" >> .gitignore

# If Windows (Command Prompt)
> echo $mock.ts >> .gitignore
```

## Command Line Interface Options

The following options can be specified in the Command Line Interface.

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
        Generate <code>$mock.ts</code> required for
        aspida-mock routing.
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
        Regenerate <code>$mock.ts</code> according to
        the increase / decrease of the API endpoint file.
      </td>
    </tr>
    <tr>
      <td nowrap><code>--version</code><br /><code>-v</code></td>
      <td></td>
      <td></td>
      <td>Print aspida-mock version.</td>
    </tr>
  </tbody>
</table>

## Configuration

aspida-mock refers to only "input" among the items of the aspida configuration file `aspida.config.js`.  
This allows you to always generate a mock from the same directory as aspida.  
[Change the directory where type definition file is placed to other than apis](https://github.com/aspidajs/aspida/tree/master/packages/aspida#change-the-directory-where-type-definition-file-is-placed-to-other-than-apis)

## License

aspida-mock is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida-mock/LICENSE).

[aspida]: https://github.com/aspidajs/aspida/tree/master/packages/aspida
[openapi2aspida]: https://github.com/aspidajs/aspida/tree/master/packages/openapi2aspida
[pathpida]: https://github.com/aspidajs/aspida/tree/master/packages/pathpida
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
