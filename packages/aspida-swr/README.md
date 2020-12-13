# @aspida/swr
<br />
<img src="https://aspida.github.io/aspida/logos/png/logo.png" alt="aspida" title="aspida" />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/swr">
    <img src="https://img.shields.io/npm/v/@aspida/swr" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@aspida/swr">
    <img src="https://img.shields.io/npm/dm/@aspida/swr" alt="npm download" />
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
</div>
<br />
<div align="center"><a href="https://swr.vercel.app/">SWR (React Hooks)</a> wrapper for <a href="https://github.com/aspida/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/swr @aspida/axios swr axios
  # $ npm install @aspida/swr @aspida/fetch swr
  # $ npm install @aspida/swr @aspida/node-fetch swr node-fetch
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/swr @aspida/axios swr axios
  # $ yarn add @aspida/swr @aspida/fetch swr
  # $ yarn add @aspida/swr @aspida/node-fetch swr node-fetch
  ```

### Make HTTP request from application

`src/index.ts`

```tsx
import useAspidaSWR from "@aspida/swr"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())

function Profile() {
  const { data, error } = useAspidaSWR(
    client.user._userId(123),
    { query: { name: 'mario' } }
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

### Get response body/status/headers

`src/index.ts`

```tsx
import useAspidaSWR from "@aspida/swr"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())

function Profile() {
  const { data, error } = useAspidaSWR(
    client.user._userId(123),
    'get',
    { query: { name: 'mario' } }
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <div>Status: {data.status}</div>
      <div>Headers: {JSON.stringify(data.headers)}</div>
      <div>Name: {data.body.name}</div>
    </>
  )
}
```

`useAspidaSWR(client.user._userId(123), { query })` is an alias of `useAspidaSWR(client.user._userId(123), "$get", { query })`

### Use with SWR options

`src/index.ts`

```tsx
import useAspidaSWR from "@aspida/swr"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())

function Profile() {
  const { data, error } = useAspidaSWR(
    client.user._userId(123),
    {
      query: { name: 'mario' },
      revalidateOnMount: true,
      initialData: { name: 'anonymous' }
    }
  )

  if (error) return <div>failed to load</div>
  return <div>hello {data.name}!</div>
}
```

## License

@aspida/swr is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-swr/LICENSE).
