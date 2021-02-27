import { VueConstructor } from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { mockClient, mockMethods } from 'aspida-mock'
import fetchClient from '../../aspida-node-fetch'
import useAspidaSWRV from '../index'
import api from '../../aspida/samples/basic/$api'
import { Methods as Methods0 } from '../../aspida/samples/basic/v1.1/3.1'
import { Methods as Methods1 } from '../../aspida/samples/basic/v2.0'

const Vue: VueConstructor = require('vue/dist/vue.common.js')

Vue.use(VueCompositionApi)

const adapter = mockClient(fetchClient())
const client = api(adapter)
const timeout = (msec: number) => new Promise(resolve => setTimeout(resolve, msec))
const tick = async (vm: Vue, times: number) => {
  for (const _ in [...Array(times).keys()]) {
    await vm.$nextTick()
  }
}

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
    const vm = new Vue({
      template: '<div>hello, {{ data && data.id }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v1_1.$3_1)

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, 0')
  })

  test('basic usage with SWRV options', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data.id }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v1_1.$3_1, {
          revalidateDebounce: 0
        })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toEqual('hello, 0')
  })

  test('basic usage with query', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data && data.id }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v1_1.$3_1, { query: { aa: 1 } })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, 1')
  })

  test('specify get method', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data && data.body.id }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v1_1.$3_1, 'get')

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, 0')
  })

  test('specify get method with query', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data && data.body.id }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v1_1.$3_1, 'get', { query: { aa: 1 } })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, 1')
  })
})

describe('required query', () => {
  test('expect ts error', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        // @ts-expect-error
        const { data, error } = useAspidaSWRV(client.v2_0)

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, none')
  })

  test('basic usage', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, aa')
  })

  test('basic usage with SWRV options', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v2_0, {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' },
          revalidateDebounce: 0
        })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toEqual('hello, aa')
  })

  test('expect ts error when specify get method', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data && data.body }}</div>',
      setup() {
        // @ts-expect-error
        const { data, error } = useAspidaSWRV(client.v2_0, 'get')

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, ')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, none')
  })

  test('specify get method', async () => {
    const vm = new Vue({
      template: '<div>hello, {{ data && data.body }}/{{ data && data.headers.token }}</div>',
      setup() {
        const { data, error } = useAspidaSWRV(client.v2_0, 'get', {
          query: { val: 'aa' },
          headers: { 'content-type': 'text/plain' }
        })

        return { data, error }
      }
    }).$mount()

    expect(vm.$el.textContent).toBe('hello, /')

    await tick(vm, 2)
    await timeout(20)

    expect(vm.$el.textContent).toEqual('hello, aa/aa')
  })
})
