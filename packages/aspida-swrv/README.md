# @aspida/swrv
<br />
<br />
<br />
<br />
<img src="https://aspida.github.io/aspida/logos/svg/black.svg" alt="aspida" title="aspida" width="1000" height="120" />
<br />
<br />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/swrv">
    <img src="https://img.shields.io/npm/v/@aspida/swrv" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@aspida/swrv">
    <img src="https://img.shields.io/npm/dm/@aspida/swrv" alt="npm download" />
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
<div align="center"><a href="https://github.com/Kong/swrv">SWRV (Vue Composition API)</a> wrapper for <a href="https://github.com/aspida/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/swrv @aspida/axios swrv axios
  # $ npm install @aspida/swrv @aspida/fetch swrv
  # $ npm install @aspida/swrv @aspida/node-fetch swrv node-fetch
  # $ npm install @aspida/swrv @aspida/ky swrv ky
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/swrv @aspida/axios swrv axios
  # $ yarn add @aspida/swrv @aspida/fetch swrv
  # $ yarn add @aspida/swrv @aspida/node-fetch swrv node-fetch
  # $ yarn add @aspida/swrv @aspida/ky swrv ky
  ```

### Make HTTP request from application

`src/index.ts`

```vue
<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>hello {{ data.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useAspidaSWRV from "@aspida/swrv"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch", "@aspida/ky"
import api from "../api/$api"

const client = api(aspida())

export default defineComponent({
  name: 'Profile',

  setup() {
    const { data, error } = useAspidaSWRV(
      client.user._userId(123),
      { query: { name: 'mario' } }
    )

    return { data, error }
  }
})
</script>
```

### Get response body/status/headers

`src/index.ts`

```vue
<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <template v-else>
      <div>Status: {{ data.status }}</div>
      <div>Headers: {{ JSON.stringify(data.headers) }}</div>
      <div>Name: {{ data.body.name }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useAspidaSWRV from "@aspida/swrv"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch", "@aspida/ky"
import api from "../api/$api"

const client = api(aspida())

export default defineComponent({
  name: 'Profile',

  setup() {
    const { data, error } = useAspidaSWRV(
      client.user._userId(123),
    'get',
      { query: { name: 'mario' } }
    )

    return { data, error }
  }
})
</script>
```

`useAspidaSWRV(client.user._userId(123), { query })` is an alias of `useAspidaSWRV(client.user._userId(123), "$get", { query })`

### Use with SWRV options

`src/index.ts`

```vue
<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>hello {{ data.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useAspidaSWRV from "@aspida/swrv"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch", "@aspida/ky"
import api from "../api/$api"

const client = api(aspida())

export default defineComponent({
  name: 'Profile',

  setup() {
    const { data, error } = useAspidaSWRV(
      client.user._userId(123),
      {
        query: { name: 'mario' },
        revalidateDebounce: 0
      }
    )

    return { data, error }
  }
})
</script>
```

## License

@aspida/swrv is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-swrv/LICENSE).
