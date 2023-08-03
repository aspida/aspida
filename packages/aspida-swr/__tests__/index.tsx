import { renderHook, waitFor } from '@testing-library/react'
import { mockClient, mockMethods } from 'aspida-mock'
import fetchClient from '../../aspida-node-fetch'
import api from '../../aspida/samples/basic/$api'
import { Methods as Methods0 } from '../../aspida/samples/basic/v1.1'
import { Methods as Methods1 } from '../../aspida/samples/basic/v2.0'
import useAspidaSWR from '../index'

const adapter = mockClient(fetchClient())
const client = api(adapter)

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
    const { result } = renderHook(() => useAspidaSWR(client.v1_1), {
      wrapper: ({ children }) => children
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toEqual({ aa: 3 })
  })

  test('basic usage with fallbackData', async () => {
    const { result } = renderHook(
      () =>
        useAspidaSWR(client.v1_1, {
          query: { aa: 0 },
          revalidateOnMount: true,
          fallbackData: { aa: 1 }
        }),
      { wrapper: ({ children }) => children }
    )

    expect(result.current.data).toEqual({ aa: 1 })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toEqual({ aa: 0 })
  })

  test('basic usage with query', async () => {
    const { result } = renderHook(() => useAspidaSWR(client.v1_1, { query: { aa: 1 } }), {
      wrapper: ({ children }) => children
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toEqual({ aa: 1 })
  })

  test('specify get method', async () => {
    const { result } = renderHook(() => useAspidaSWR(client.v1_1, 'get'), {
      wrapper: ({ children }) => children
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data?.body).toEqual({ aa: 3 })
  })

  test('specify get method with query', async () => {
    const { result } = renderHook(() => useAspidaSWR(client.v1_1, 'get', { query: { aa: 1 } }), {
      wrapper: ({ children }) => children
    })

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data?.body).toEqual({ aa: 1 })
  })
})

describe('required query', () => {
  test('expect ts error', async () => {
    const { result } = renderHook(
      // @ts-expect-error
      () => useAspidaSWR(client.v2_0),
      { wrapper: ({ children }) => children }
    )

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toBe('none')
  })

  test('basic usage', async () => {
    const { result } = renderHook(
      () =>
        useAspidaSWR(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        }),
      { wrapper: ({ children }) => children }
    )

    expect(result.current.data).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toBe('aa')
  })

  test('basic usage with fallbackData', async () => {
    const { result } = renderHook(
      () =>
        useAspidaSWR(client.v2_0, {
          query: { val: 'bb' },
          headers: { 'content-type': 'text/plain' },
          revalidateOnMount: true,
          fallbackData: '1'
        }),
      { wrapper: ({ children }) => children }
    )

    expect(result.current.data).toBe('1')

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data).toBe('bb')
  })

  test('expect ts error when specify get method', async () => {
    const { result } = renderHook(
      () =>
        // @ts-expect-error
        useAspidaSWR(client.v2_0, 'get', {
          revalidateOnMount: true,
          fallbackData: {
            status: 200,
            body: 'a',
            headers: { token: 'b' },
            originalResponse: null
          }
        }),
      { wrapper: ({ children }) => children }
    )

    // @ts-expect-error
    expect(result.current.data?.body).toBe('a')
    // @ts-expect-error
    expect(result.current.data?.headers.token).toBe('b')

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    // @ts-expect-error
    expect(result.current.data?.body).toBe('none')
    // @ts-expect-error
    expect(result.current.data?.headers.token).toBe(undefined)
  })

  test('specify get method', async () => {
    const { result } = renderHook(
      () =>
        useAspidaSWR(client.v2_0, 'get', {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        }),
      { wrapper: ({ children }) => children }
    )

    expect(result.current.data?.body).toBe(undefined)
    expect(result.current.data?.headers.token).toBe(undefined)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data?.body).toBe('aa')
    expect(result.current.data?.headers.token).toBe('aa')
  })
})
