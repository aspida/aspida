| aspida | [aspida-mock] | [openapi2aspida] |
| ------ | ------------- | ---------------- |


| [@aspida/axios] | [@aspida/ky] | [@aspida/fetch] | [@aspida/node-fetch] |
| --------------- | ------------ | --------------- | -------------------- |


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
  <a href="https://www.npmjs.com/package/aspida">
    <img src="https://img.shields.io/npm/v/aspida" alt="npm version" />
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
  <a href="https://github.com/aspidajs/aspida/blob/master/packages/aspida/LICENSE">
    <img src="https://img.shields.io/npm/l/aspida" alt="License" />
  </a>
</div>
<br />
<p align="center">ブラウザと node.js のためのTypeScriptフレンドリーな HTTP クライアントラッパー</p>
<div align="center">
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida/docs/ja#readme">🇯🇵日本語</a>
</div>
<br />
<br />

## 特徴

- パス・URL クエリ・ヘッダー・ボディ・レスポンス全てに型を指定できる
- FormData / URLSearchParams の内容にも型を指定できる
- HTTP クライアントは axios / ky / ky-universal / fetch / node-fetch に対応
- パス定義は Nuxt.js の pages と同じ命名規則

<br />
<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" />
<br />

## 手順

1. エンドポイントのディレクトリ構造を apis ディレクトリに再現する
1. "Methods" という名前で Type alias を export する
1. npm scripts で aspida --build を起動
1. API 型定義ファイル apis/\$api.ts が生成されるのでアプリケーションで import して HTTP リクエストを行う

## 入門

### インストール (axios ver.)

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/axios axios
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/axios axios
  ```

### apis ディレクトリを作成する

```sh
$ mkdir apis
```

### エンドポイントの型定義ファイルを作成する

- GET: /v1/users/?limit={number}
- POST: /v1/users

  `apis/v1/users/index.ts`

  ```typescript
  type User = {
    id: number
    name: string
  }

  export type Methods = {
    get: {
      query?: {
        limit: number
      }

      resBody: User[]
    }

    post: {
      reqBody: {
        name: string
      }

      resBody: User
    }
  }
  ```

- GET: /v1/users/\${userId}
- PUT: /v1/users/\${userId}

  `apis/v1/users/_userId@number.ts`

  アンダースコアから始まるパス変数「userId」の型を「@number」で指定する  
  @での指定がない場合、パス変数の型のデフォルトは「number | string」

  ```typescript
  type User = {
    id: number
    name: string
  }

  export type Methods = {
    get: {
      resBody: User
    }

    put: {
      reqBody: {
        name: string
      }

      resBody: User
    }
  }
  ```

### 型定義ファイルをビルドする

`package.json`

```json
{
  "scripts": {
    "api:build": "aspida --build"
  }
}
```

```sh
$ npm run api:build

> apis/$api.ts was built successfully.
```

### アプリケーションから HTTP リクエストを行う

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const client = api(aspida())

  await client.v1.users.post({ data: { name: "taro" } })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: /v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get()
  console.log(user)
  // req -> GET: /v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### Qiita の投稿記事を読む

**[aspida - Qiita](https://qiita.com/tags/aspida)**

### HTTP クライアントについてもっと詳しく

- **[aspida-axios](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-axios#readme)**
- **[aspida-ky](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-ky#readme)**
- **[aspida-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-fetch#readme)**
- **[aspida-node-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-node-fetch#readme)**

## Command Line Interface のオプション

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
        aspida のルーティングに必要な
        <code>$api.ts</code> を生成します。
      </td>
    </tr>
    <tr>
      <td nowrap><code>--config</code><br /><code>-c</code></td>
      <td><code>string</code></td>
      <td><code>"aspida.config.js"</code></td>
      <td>設定ファイルまでのパスを指定します。</td>
    </tr>
    <tr>
      <td nowrap><code>--watch</code><br /><code>-w</code></td>
      <td></td>
      <td></td>
      <td>
        監視モードを有効にします。<br />
        API のエンドポイントとなるファイルの増減に合わせて
        <code>$api.ts</code> を再生成します。
      </td>
    </tr>
    <tr>
      <td nowrap><code>--version</code><br /><code>-v</code></td>
      <td></td>
      <td></td>
      <td>aspida のバージョンを表示します。</td>
    </tr>
  </tbody>
</table>

## Tips

### 型定義ファイルを置くディレクトリを apis 以外に変更する

設定ファイルをプロジェクトのルートに作成する

`aspida.config.js`

```javascript
module.exports = { input: "src" }
```

baseURL を設定ファイルで指定する

```javascript
module.exports = { input: "apis", baseURL: "https://example.com/api" }
```

複数の API エンドポイントを型定義したい場合は配列で指定する

```javascript
module.exports = [{ input: "api1" }, { input: "api2", baseURL: "https://example.com/api" }]
```

### GET パラメータを手動でシリアライズする

aspida は GET パラメータのシリアライズを HTTP クライアントの標準動作に任せている  
手動でシリアライズを行いたい場合は HTTP クライアントの Config オブジェクトを利用できる

`src/index.ts`

```typescript
import axios from "axios"
import qs from "qs"
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(
    aspida(axios, { paramsSerializer: params => qs.stringify(params, { indices: false }) })
  )

  const users = await client.v1.users.$get({
    // config: { paramsSerializer: (params) => qs.stringify(params, { indices: false }) },
    query: { ids: [1, 2, 3] }
  })
  console.log(users)
  // req -> GET: /v1/users/?ids=1&ids=2&ids=3
  // res -> [{ id: 1, name: 'taro1' }, { id: 2, name: 'taro2' }, { id: 3, name: 'taro3' }]
})()
```

### FormData を POST する

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  post: {
    reqFormat: FormData

    reqBody: {
      name: string
      icon: ArrayBuffer
    }

    resBody: {
      id: number
      name: string
    }
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(aspida())

  const user = await client.v1.users.$post({
    data: {
      name: "taro",
      icon: imageBuffer
    }
  })
  console.log(user)
  // req -> POST: /v1/users
  // res -> { id: 0, name: 'taro' }
})()
```

### URLSearchParams を POST する

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  post: {
    reqFormat: URLSearchParams

    reqBody: {
      name: string
    }

    resBody: {
      id: number
      name: string
    }
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(aspida())

  const user = await client.v1.users.$post({ data: { name: "taro" } })
  console.log(user)
  // req -> POST: /v1/users
  // res -> { id: 0, name: 'taro' }
})()
```

### レスポンスを ArrayBuffer で受け取る

`apis/v1/users/index.ts`

```typescript
export type Methods = {
  get: {
    query: {
      name: string
    }

    resBody: ArrayBuffer
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const client = api(aspida())

  const user = await client.v1.users.$get({ query: { name: "taro" } })
  console.log(user)
  // req -> GET: /v1/users/?name=taro
  // res -> ArrayBuffer
})()
```

## License

aspida is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida/LICENSE).

[aspida-mock]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock
[openapi2aspida]: https://github.com/aspidajs/aspida/tree/master/packages/openapi2aspida
[@aspida/axios]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-axios
[@aspida/ky]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-ky
[@aspida/fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-fetch
[@aspida/node-fetch]: https://github.com/aspidajs/aspida/tree/master/packages/aspida-node-fetch
