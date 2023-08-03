import { mount } from '@vue/test-utils'
import { mockClient, mockMethods } from 'aspida-mock'
import { setTimeout } from 'node:timers/promises'
import fetchClient from '../../aspida-node-fetch'
import api from '../../aspida/samples/basic/$api'
import { Methods as Methods0 } from '../../aspida/samples/basic/v1.1/3.1'
import { Methods as Methods1 } from '../../aspida/samples/basic/v2.0'
import useAspidaSWRV from '../index'

const adapter = mockClient(fetchClient())
const client = api(adapter)

adapter.attachRoutes([
  {
    path: '/v1.1/3.1',
    methods: mockMethods<Methods0>({
      get: ({ query }) => ({ status: 200, resBody: { id: query?.aa || 0 } })
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
    const wrapper = mount({
      template: '<div>hello, {{ data && data.id }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v1_1.$3_1)

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toBe('hello, 0')
  })

  test('basic usage with SWRV options', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data.id }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v1_1.$3_1, {
          revalidateDebounce: 0
        })

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello, 0')
  })

  test('basic usage with query', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data && data.id }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v1_1.$3_1, { query: { aa: 1 } })

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, 1')
  })

  test('specify get method', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data && data.body.id }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v1_1.$3_1, 'get')

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, 0')
  })

  test('specify get method with query', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data && data.body.id }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v1_1.$3_1, 'get', { query: { aa: 1 } })

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, 1')
  })
})

describe('required query', () => {
  test('expect ts error', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        // @ts-expect-error
        const { data, error } = useAspidaSWRV(client.v2_0)

        return { data, error }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, none')
  })

  test('basic usage', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        })

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, aa')
  })

  test('basic usage with SWRV options', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' },
          revalidateDebounce: 0
        })

        return { data }
      }
    })

    expect(wrapper.text()).toEqual('hello, aa')
  })

  test('expect ts error when specify get method', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data && data.body }}</div>',
      setup() {
        // @ts-expect-error
        const { data } = useAspidaSWRV(client.v2_0, 'get')

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello,')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, none')
  })

  test('specify get method', async () => {
    const wrapper = mount({
      template: '<div>hello, {{ data && data.body }}/{{ data && data.headers.token }}</div>',
      setup() {
        const { data } = useAspidaSWRV(client.v2_0, 'get', {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        })

        return { data }
      }
    })

    expect(wrapper.text()).toBe('hello, /')

    await setTimeout(200)

    expect(wrapper.text()).toEqual('hello, aa/aa')
  })
})
