<p align="right">
  <a href="https://github.com/aspidajs/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/blob/develop/docs/ja/README.md">🇯🇵日本語</a>
</p>

<h1>aspida</h1>

[![npm version][badge-npm]][badge-npm-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][aspida-license]

ブラウザと node.js のための型安全な HTTP クライアント。

## 特徴

- パス・URL クエリ・ヘッダー・ボディ・レスポンス全てに型を定義できる TS ファイルを生成する CLI
- 返り値は axios のレスポンスオブジェクト
- baseURL や共通ヘッダーは axios で設定可能

## 手順

1. エンドポイントのディレクトリ構造を apis ディレクトリに再現する
1. TS ファイルで Methods インターフェースを export する
1. npm scripts で aspida --build を起動
1. API 型定義ファイル apis/\$api.ts が生成されるのでアプリケーションで import して HTTP リクエストを行う

## 入門

### インストール

- Using [npm][npm]:

  ```sh
  $ npm install axios
  $ npm install aspida --save-dev
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add axios
  $ yarn add aspida --dev
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
  interface User {
    id: number
    name: string
  }

  export interface Methods {
    get: {
      params?: {
        limit: number
      }

      response: User[]
    }

    post: {
      data: {
        name: string
      }

      response: User
    }
  }
  ```

- GET: /v1/users/\${userId}
- PUT: /v1/users/\${userId}

  `apis/v1/users/_userId@number.ts`

  アンダースコアから始まるパス変数「userId」の型を「@number」で指定する  
  @での指定がない場合、パス変数の型のデフォルトは「number | string」

  ```typescript
  interface User {
    id: number
    name: string
  }

  export interface Methods {
    get: {
      response: User
    }

    put: {
      data: {
        name: string
      }

      response: User
    }
  }
  ```

### 型定義ファイルをビルドする

`package.json`

baseurl を指定しない場合、空文字をデフォルトで使用する

```json
{
  "scripts": {
    "api:build": "aspida --build --baseurl https://examples.com"
  }
}
```

```sh
$ npm run api:build

> apis/$api.ts was built successfully.
```

### アプリケーションから token を付与して HTTP リクエストを行う

`src/index.ts`

```typescript
import axios from "axios"
import api from "../apis/$api"

axios.defaults.headers.common["X-Auth-Token"] = "YOUR TOKEN"
;(async () => {
  const userId = 0
  const limit = 10

  await api().v1.users.post({ name: "taro" })

  const res = await api().v1.users.get({ params: { limit } })
  console.log(res)
  // req -> GET: https://examples.com/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  const user = await api()
    .v1.users._userId(userId)
    .$get()
  console.log(user)
  // req -> GET: https://examples.com/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### 使用例

See [examples][aspida-examples] for source code.

- **[node](https://github.com/aspidajs/aspida/tree/develop/examples/node)**:
  Use in [Node.js][nodejs] (TypeScript)
- **[with-mock](https://github.com/aspidajs/aspida/tree/develop/examples/with-mock)**:
  Using with a [axios-mock-server][axios-mock-server]

## Tips

### baseURL を上書きする

ビルド時に設定したものとは異なる baseURL をアプリケーションで指定するには axios で設定

`src/index.ts`

```typescript
import axios from "axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10

  await api().v1.users.post({ name: "taro" })

  const res = await api().v1.users.get({ params: { limit } })
  console.log(res)
  // req -> GET: https://examples.com/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  axios.defaults.baseURL = "http://localhost:8080"

  await api().v1.users.post({ name: "yoko" })

  const localRes = await api().v1.users.get({ params: { limit } })
  console.log(localRes)
  // req -> GET: http://localhost:8080/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'yoko' }], headers: {...} }

  // using axios instance
  const instance = axios.create({
    baseURL: "http://localhost:10000"
  })
  const $api = api(instance)

  await $api.v1.users.post({ name: "mario" })

  const instanceRes = await $api.v1.users.get({ params: { limit } })
  console.log(instanceRes)
  // req -> GET: http://localhost:10000/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'mario' }], headers: {...} }
})()
```

## Contribution

### Build

```bash
npm install
npm run build
node ./bin/index.js --build --baseurl=http://example.com
```

if you want to watch file changes and rebuild automatically,
you can use `--watch` instead of `--build`

## License

Aspida is licensed under a [MIT License][aspida-license].

<!-- URL: aspida -->

[aspida-examples]: https://github.com/aspidajs/aspida/tree/develop/examples
[aspida-license]: https://github.com/aspidajs/aspida/blob/develop/LICENSE

<!-- URL: Badges -->

[badge-ci-url]: https://circleci.com/gh/aspidajs/aspida
[badge-ci]: https://img.shields.io/circleci/build/github/aspidajs/aspida.svg?label=test
[badge-coverage-url]: https://codecov.io/gh/aspidajs/aspida
[badge-coverage]: https://img.shields.io/codecov/c/github/aspidajs/aspida.svg
[badge-dependabot]: https://api.dependabot.com/badges/status?host=github&repo=aspidajs/aspida
[badge-lgtm-url]: https://lgtm.com/projects/g/aspidajs/aspida/context:javascript
[badge-lgtm]: https://img.shields.io/lgtm/grade/javascript/g/aspidajs/aspida.svg
[badge-license]: https://img.shields.io/npm/l/aspida
[badge-npm-url]: https://www.npmjs.com/package/aspida
[badge-npm]: https://img.shields.io/npm/v/aspida

<!-- URL: General -->

[axios-mock-server]: https://github.com/m-mitsuhide/axios-mock-server/
[dependabot]: https://dependabot.com
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
