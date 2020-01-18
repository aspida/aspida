# aspida-mock

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
<p align="center">Type safe RESTful API mock for aspida.</p>
<div align="center">
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock#readme">🇺🇸English</a> |
  <a href="https://github.com/aspidajs/aspida/tree/master/packages/aspida-mock/docs/ja#readme">🇯🇵日本語</a>
</div>
<br />
<br />

## 特徴

- [aspida](https://github.com/aspidajs/aspida/tree/master/packages/aspida)の型定義を利用して型安全を実現した TypeScript 専用 API モック
- `GET`/`POST`/`PUT`/`DELETE` など全ての HTTP メソッドに数行で対応
- サーバー不要、ブラウザのみで動作

## 使い方

### インストール (2020/01/18: @aspida/axios のみモック対応)

- [npm](https://www.npmjs.com/) を使ってインストール:

  ```sh
  $ npm install @aspida/axios axios
  $ npm install aspida-mock --save-dev
  ```

- [Yarn](https://yarnpkg.com/) を使ってインストール:

  ```sh
  $ yarn add @aspida/axios axios
  $ yarn add aspida-mock --dev
  ```

### API エンドポイントの作成

aspida の型定義ファイルで mockMethods を export する

`apis/users.ts`

<!-- prettier-ignore -->
```ts
import { mockMethods } from 'aspida-mock'

export interface Methods {
  get: {
    query: { id: number }
    reqHeaders: { val: string }
    reqData: { name: string }
    resHeaders: { token: string }
    resData: {
      id: number
      name: string
    }
  }
}

export default mockMethods<Methods>({
  get: ({ query, reqHeaders, reqData }) => ({
    status: 200,
    resHeaders: { token: reqHeaders.val },
    resData: {
      id: query.id,
      name: reqData.name
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
import aspida from '@aspida/axios'
import api from './apis/$api.ts'
import mock from './apis/$mock.ts'

const client = api(
  aspida().attachRoutes(mock(), { delayMSec: 500 })
)

;(async () => {
  const res = await client.users.get({
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

### オプション

aspida-mock ではいくつかのオプションを利用することができます。

#### `delayMSec: number`

レスポンスの遅延をシミュレートします。

<!-- prettier-ignore -->
```ts
import aspida from '@aspida/axios'
import api from './apis/$api.ts'
import mock from './apis/$mock.ts'

const client = api(
  aspida().attachRoutes(mock(), { delayMSec: 500 })
)

;(async () => {
  console.time()
  await client.users.$get()
  console.timeEnd() // default: 506.590ms
})()
```

#### `log: boolean`

リクエストログの出力を切り替えます。

<!-- prettier-ignore -->
```ts
import aspida from '@aspida/axios'
import api from './apis/$api.ts'
import mock from './apis/$mock.ts'

const client = api(
  aspida().attachRoutes(mock(), { log: true })
)

;(async () => {
  await client.users.$get({ query: { bar: 'baz' }})
  // [mock] get: /users?bar=baz => 200
})()
```

### 注意事項

#### `.gitignore`

aspida-mock がビルドで生成する `$mock.ts` を [Git](https://git-scm.com/) の監視から除外してください。

```sh
$ echo "\$mock.ts" >> .gitignore

# If Windows (Command Prompt)
> echo $mock.ts >> .gitignore
```

## Command Line Interface のオプション

Command Line Interface では以下のオプションを指定することができます。

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
        aspida-mock のルーティングに必要な
        <code>$mock.ts</code> を生成します。
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
        <code>$mock.ts</code> を再生成します。
      </td>
    </tr>
    <tr>
      <td nowrap><code>--version</code><br /><code>-v</code></td>
      <td></td>
      <td></td>
      <td>aspida-mock のバージョンを表示します。</td>
    </tr>
  </tbody>
</table>

## 設定

aspida-mock は aspida の設定ファイル `aspida.config.js` の項目のうち、「input」のみを参照します。  
これにより、常に aspida と同じディレクトリからモックを生成できます。  
[aspida docs: 型定義ファイルを置くディレクトリを apis 以外に変更する](https://github.com/aspidajs/aspida/tree/master/packages/aspida/docs/ja#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E7%BD%AE%E3%81%8F%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%82%92-apis-%E4%BB%A5%E5%A4%96%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B)

## License

aspida-mock is licensed under a [MIT License](https://github.com/aspidajs/aspida/blob/master/packages/aspida-mock/LICENSE).
