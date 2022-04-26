import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render, act } from '@testing-library/react'
import { mockClient, mockMethods } from 'aspida-mock'
import fetchClient from '../../aspida-node-fetch'
import { useAspidaQuery } from '../index'
import api from '../../aspida/samples/basic/$api'
import { Methods as Methods0 } from '../../aspida/samples/basic/v1.1'
import { Methods as Methods1 } from '../../aspida/samples/basic/v2.0'

const adapter = mockClient(fetchClient())
const client = api(adapter)
const nextTick = () => new Promise(resolve => setTimeout(resolve, 50))
// eslint-disable-next-line react/prop-types
const App: React.FC = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
)

adapter.attachRoutes([
  {
    path: '/v1.1',
    methods: mockMethods<Methods0>({
      get: ({ query }) => ({ status: 200, resBody: query || { aa: 3 } })
    })
  },
  {
    path: '/v2.0',
    methods: mockMethods<Methods1>({
      get: ({ query }) => ({
        status: 200,
        resBody: query?.val ?? 'none',
        resHeaders: { token: query?.val }
      })
    })
  }
])

describe('optional query', () => {
  test('basic usage', async () => {
    function Page() {
      const a = useAspidaQuery(client.v1_1)

      if (a.data) {
        if ('aa' in a.data) {
          return <div>{a.data.aa}</div>
        } else {
          return <div>{a.data.bb}</div>
        }
      } else {
        return <div>undefined</div>
      }
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"undefined"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"3"`)
    })
  })

  test('basic usage with initialData', async () => {
    function Page() {
      const a = useAspidaQuery(client.v1_1, {
        refetchOnMount: true,
        initialData: { aa: 1 }
      })

      if (a.data) {
        if ('aa' in a.data) {
          return <div>{a.data.aa}</div>
        } else {
          return <div>{a.data.bb}</div>
        }
      } else {
        return <div>undefined</div>
      }
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"1"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"3"`)
    })
  })

  test('basic usage with query', async () => {
    function Page() {
      const a = useAspidaQuery(client.v1_1, { query: { aa: 1 } })

      if (a.data) {
        if ('aa' in a.data) {
          return <div>{a.data.aa}</div>
        } else {
          return <div>{a.data.bb}</div>
        }
      } else {
        return <div>undefined</div>
      }
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"undefined"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"1"`)
    })
  })

  test('specify get method', async () => {
    function Page() {
      const a = useAspidaQuery(client.v1_1, 'get')

      if (a.data) {
        if ('aa' in a.data.body) {
          return <div>{a.data.body.aa}</div>
        } else {
          return <div>{a.data.body.bb}</div>
        }
      } else {
        return <div>undefined</div>
      }
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"undefined"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"3"`)
    })
  })

  test('specify get method with query', async () => {
    function Page() {
      const a = useAspidaQuery(client.v1_1, 'get', { query: { aa: 1 } })

      if (a.data) {
        if ('aa' in a.data.body) {
          return <div>{a.data.body.aa}</div>
        } else {
          return <div>{a.data.body.bb}</div>
        }
      } else {
        return <div>undefined</div>
      }
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"undefined"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"1"`)
    })
  })
})

describe('required query', () => {
  test('expect ts error', async () => {
    function Page() {
      // @ts-expect-error
      const a = useAspidaQuery(client.v2_0)

      return <div>{a.data}</div>
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`""`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"none"`)
    })
  })

  test('basic usage', async () => {
    function Page() {
      const a = useAspidaQuery(client.v2_0, {
        query: { val: 'aa' },
        headers: { 'content-type': 'text/plain' }
      })

      return <div>{a.data}</div>
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`""`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"aa"`)
    })
  })

  test('basic usage with initialData', async () => {
    function Page() {
      const a = useAspidaQuery(client.v2_0, {
        query: { val: 'bb' },
        headers: { 'content-type': 'text/plain' },
        refetchOnMount: true,
        initialData: '1'
      })

      return <div>{a.data}</div>
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"1"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"bb"`)
    })
  })

  test('expect ts error when specify get method', async () => {
    function Page() {
      // @ts-expect-error
      const a = useAspidaQuery(client.v2_0, 'get', {
        refetchOnMount: true,
        initialData: {
          status: 200,
          body: 'a',
          headers: { token: 'b' },
          originalResponse: null
        }
      })

      return (
        <div>
          {
            // @ts-expect-error
            a.data?.body
          }
          /
          {
            // @ts-expect-error
            a.data?.headers.token
          }
        </div>
      )
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"a/b"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"none/"`)
    })
  })

  test('specify get method', async () => {
    function Page() {
      const a = useAspidaQuery(client.v2_0, 'get', {
        query: { val: 'aa' },
        headers: { 'content-type': 'text/plain' }
      })

      return (
        <div>
          {a.data?.body}/{a.data?.headers.token}
        </div>
      )
    }
    const { container } = render(
      <App>
        <Page />
      </App>
    )
    expect(container.textContent).toMatchInlineSnapshot(`"/"`)

    await act(async () => {
      await nextTick()
      expect(container.textContent).toMatchInlineSnapshot(`"aa/aa"`)
    })
  })
})
