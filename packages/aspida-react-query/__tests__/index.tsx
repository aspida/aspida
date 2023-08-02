import { renderHook, waitFor } from '@testing-library/react'
import { mockClient, mockMethods } from 'aspida-mock'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import fetchClient from '../../aspida-node-fetch'
import api from '../../aspida/samples/basic/$api'
import { Methods as Methods0 } from '../../aspida/samples/basic/v1.1'
import { Methods as Methods1 } from '../../aspida/samples/basic/v2.0'
import { useAspidaQuery } from '../index'

const adapter = mockClient(fetchClient())
const client = api(adapter)
const App = ({ children }: { children: ReactNode }) => (
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
    const { result } = renderHook(() => useAspidaQuery(client.v1_1), {
      wrapper: ({ children }) => <App>{children}</App>
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    const { data } = result.current

    expect(data && 'aa' in data && data.aa).toBe(3)
  })

  test('basic usage with placeholderData', async () => {
    const { result } = renderHook(
      () => useAspidaQuery(client.v1_1, { refetchOnMount: true, placeholderData: { aa: 1 } }),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    expect(result.current.data).toEqual({ aa: 1 })

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    const { data } = result.current

    expect(data && 'aa' in data && data.aa).toBe(3)
  })

  test('basic usage with query', async () => {
    const { result } = renderHook(() => useAspidaQuery(client.v1_1, { query: { aa: 1 } }), {
      wrapper: ({ children }) => <App>{children}</App>
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    const { data } = result.current

    expect(data && 'aa' in data && data.aa).toBe(1)
  })

  test('specify get method', async () => {
    const { result } = renderHook(() => useAspidaQuery(client.v1_1, 'get'), {
      wrapper: ({ children }) => <App>{children}</App>
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    const { data } = result.current

    expect(data && 'aa' in data.body && data.body.aa).toBe(3)
  })

  test('specify get method with query', async () => {
    const { result } = renderHook(() => useAspidaQuery(client.v1_1, 'get', { query: { aa: 1 } }), {
      wrapper: ({ children }) => <App>{children}</App>
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    const { data } = result.current

    expect(data && 'aa' in data.body && data.body.aa).toBe(1)
  })
})

describe('required query', () => {
  test('expect ts error', async () => {
    const { result } = renderHook(
      // @ts-expect-error
      () => useAspidaQuery(client.v2_0),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data).toBe('none')
  })

  test('basic usage', async () => {
    const { result } = renderHook(
      () =>
        useAspidaQuery(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        }),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data).toBe('aa')
  })

  test('basic usage with initialData', async () => {
    const { result } = renderHook(
      () =>
        useAspidaQuery(client.v2_0, {
          query: { val: 'bb' },
          headers: { 'content-type': 'text/plain' },
          refetchOnMount: true,
          placeholderData: '1'
        }),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    expect(result.current.data).toBe('1')

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data).toBe('bb')
  })

  test('expect ts error when specify get method', async () => {
    const { result } = renderHook(
      () =>
        // @ts-expect-error
        useAspidaQuery(client.v2_0, 'get', {
          refetchOnMount: true,
          placeholderData: {
            status: 200,
            body: 'a',
            headers: { token: 'b' },
            originalResponse: null
          }
        }),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    // @ts-expect-error
    expect(result.current.data?.body).toBe('a')
    // @ts-expect-error
    expect(result.current.data?.headers.token).toBe('b')

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    // @ts-expect-error
    expect(result.current.data?.body).toBe('none')
    // @ts-expect-error
    expect(result.current.data?.headers.token).toBe(undefined)
  })

  test('specify get method', async () => {
    const { result } = renderHook(
      () =>
        useAspidaQuery(client.v2_0, 'get', {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        }),
      { wrapper: ({ children }) => <App>{children}</App> }
    )

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data?.body).toBe('aa')
    expect(result.current.data?.headers.token).toBe('aa')
  })
})
