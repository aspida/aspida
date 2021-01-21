# @aspida/react-query
<br />
<img src="https://aspida.github.io/aspida/logos/png/logo.png" alt="aspida" title="aspida" />
<div align="center">
  <a href="https://www.npmjs.com/package/@aspida/react-query">
    <img src="https://img.shields.io/npm/v/@aspida/react-query" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@aspida/react-query">
    <img src="https://img.shields.io/npm/dm/@aspida/react-query" alt="npm download" />
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
<div align="center"><a href="https://react-query.tanstack.com/">React Query</a> wrapper for <a href="https://github.com/aspida/aspida/">aspida</a>.</div>
<br />
<br />

## Getting Started

### Installation

- Using [npm](https://www.npmjs.com/):

  ```sh
  $ npm install @aspida/react-query @aspida/axios react-query axios
  # $ npm install @aspida/react-query @aspida/fetch react-query
  # $ npm install @aspida/react-query @aspida/node-fetch react-query node-fetch
  ```

- Using [Yarn](https://yarnpkg.com/):

  ```sh
  $ yarn add @aspida/react-query @aspida/axios react-query axios
  # $ yarn add @aspida/react-query @aspida/fetch react-query
  # $ yarn add @aspida/react-query @aspida/node-fetch react-query node-fetch
  ```

### Make HTTP request from application

`src/index.ts`

```tsx
import { useQueryClient, useMutation, QueryClient, QueryClientProvider } from 'react-query'
import { useAspidaQuery } from "@aspida/react-query"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function postTodo(body: { id: number; title: string }) {
  return client.todos.$post({ body })
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useAspidaQuery(client.todos, { query: { limit: 10 }})

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(client.todos.$path({ query: { limit: 10 }}))
    },
  })

  return (
    <div>
      <ul>
        {query.data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
```

### Get response body/status/headers

`src/index.ts`

```tsx
import { useMutation, QueryClient, QueryClientProvider } from 'react-query'
import { useAspidaQuery } from "@aspida/react-query"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Profile />
    </QueryClientProvider>
  )
}

function Profile() {
  const { data, error } = useAspidaQuery(
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

render(<App />, document.getElementById('root'))
```

`useAspidaQuery(client.user._userId(123), { query })` is an alias of `useAspidaQuery(client.user._userId(123), "$get", { query })`

### Use with React Query options

`src/index.ts`

```tsx
import { useMutation, QueryClient, QueryClientProvider } from 'react-query'
import { useAspidaQuery } from "@aspida/react-query"
import aspida from "@aspida/axios" // "@aspida/fetch", "@aspida/node-fetch"
import api from "../api/$api"

const client = api(aspida())
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Profile />
    </QueryClientProvider>
  )
}

function Profile() {
  const { data, error } = useAspidaQuery(
    client.user._userId(123),
    {
      query: { name: 'mario' },
      refetchOnMount: true,
      initialData: { name: 'anonymous' }
    }
  )

  if (error) return <div>failed to load</div>
  return <div>hello {data.name}!</div>
}

render(<App />, document.getElementById('root'))
```

## License

@aspida/react-query is licensed under a [MIT License](https://github.com/aspida/aspida/blob/master/packages/aspida-react-query/LICENSE).
