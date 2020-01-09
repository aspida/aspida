<p align="right">
  <a href="https://github.com/aspidajs/aspida/tree/develop/packages/aspida#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/develop/packages/aspida/docs/ja#readme">🇯🇵日本語</a>
</p>

<div align="center">
  <img src="https://aspidajs.github.io/aspida/assets/images/logo.png" alt="aspida" title="aspida" />
</div>

<h1>aspida</h1>

[![npm version][badge-npm]][badge-npm-url]
[![CircleCI][badge-ci]][badge-ci-url]
[![Codecov][badge-coverage]][badge-coverage-url]
[![Language grade: JavaScript][badge-lgtm]][badge-lgtm-url]
[![Dependabot Status][badge-dependabot]][dependabot]
[![License][badge-license]][aspida-license]

ブラウザと node.js のための型安全な HTTP クライアントラッパー

<img src="https://aspidajs.github.io/aspida/assets/images/vscode.gif" width="720" alt="vscode" title="vscode" />

## 特徴

- パス・URL クエリ・ヘッダー・ボディ・レスポンス全てを型安全に扱える
- FormData / URLSearchParams の内容も型安全に扱える
- HTTP クライアントは axios / ky / ky-universal / fetch に対応
- パス定義は Nuxt.js の pages と同じ命名規則

## 手順

1. エンドポイントのディレクトリ構造を apis ディレクトリに再現する
1. TS ファイルで Methods インターフェースを export する
1. npm scripts で aspida --build を起動
1. API 型定義ファイル apis/\$api.ts が生成されるのでアプリケーションで import して HTTP リクエストを行う

## 入門

### インストール (axios ver.)

- Using [npm][npm]:

  ```sh
  $ npm install aspida axios @aspida/axios
  ```

- Using [Yarn][yarn]:

  ```sh
  $ yarn add  aspida axios @aspida/axios
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
      query?: {
        limit: number
      }

      resData: User[]
    }

    post: {
      reqData: {
        name: string
      }

      resData: User
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
      resData: User
    }

    put: {
      reqData: {
        name: string
      }

      resData: User
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
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  await client.v1.users.post({ data: { name: "taro" } })

  const res = await client.v1.users.get({ query: { limit } })
  console.log(res)
  // req -> GET: http://localhost:8080/api/v1/users/?limit=10
  // res -> { status: 200, data: [{ id: 0, name: 'taro' }], headers: {...} }

  const user = await client.v1.users._userId(userId).$get()
  console.log(user)
  // req -> GET: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### HTTP クライアントについてもっと詳しく

- **[aspida-axios](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-axios#readme)**
- **[aspida-ky](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-ky#readme)**
- **[aspida-fetch](https://github.com/aspidajs/aspida/tree/develop/packages/aspida-fetch#readme)**

## Tips

### 型定義ファイルを置くディレクトリを apis 以外に変更する

設定ファイルをプロジェクトのルートに作成する

`aspida.config.js`

```javascript
module.exports = {
  aspida: { input: 'src' }
}
```

複数の API エンドポイントを型定義したい場合は配列で指定する

```javascript
module.exports = {
  aspida: { input: ['api1', 'api2'] }
}
```

### FormData を POST する

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  post: {
    reqType: FormData

    reqData: {
      name: string
      icon: ArrayBuffer
    }

    resData: {
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
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)
  const iconImage = imageBuffer

  const user = await client.v1.users.$post({
    data: {
      name: "taro",
      icon: iconImage
    }
  })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### URLSearchParams を POST する

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  post: {
    reqType: URLSearchParams

    reqData: {
      name: string
    }

    resData: {
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
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  const user = await client.v1.users.$post({ data: { name: "taro" } })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> { id: 0, name: 'taro' }
})()
```

### レスポンスを ArrayBuffer で受け取る

`apis/v1/users/index.ts`

```typescript
export interface Methods {
  get: {
    query: {
      name: string
    }

    resData: ArrayBuffer
  }
}
```

`src/index.ts`

```typescript
import aspida from "@aspida/axios"
import api from "../apis/$api"
;(async () => {
  const userId = 0
  const limit = 10
  const baseURL = "http://localhost:8080/api"
  const client = api(aspida(), baseURL)

  const user = await client.v1.users.$get({ query: { name: "taro" } })
  console.log(user)
  // req -> POST: http://localhost:8080/api/v1/users/0
  // res -> ArrayBuffer
})()
```

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
