import axios, { AxiosInstance } from 'axios'
import mockServer, { MockRoute, asyncResponse, MockResponse } from '~/src'

describe('initialize', () => {
  const mock = mockServer()
  let client: AxiosInstance

  beforeEach(() => {
    client = axios.create({ baseURL: 'https://google.com/aa' })
    mock.setClient(client)
  })

  afterEach(() => mock.reset())

  test('enabled mock', async () => {
    const route: MockRoute = []

    mock.setRoute(route)
    await expect(client.get('/')).rejects.toHaveProperty('response.status', 404)
  })

  test('default axios', async () => {
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [200, defaultValue] }
      }
    ]

    const mock = mockServer(route)

    const { data } = await axios.get(testPath)

    expect(data).toEqual(defaultValue)
    expect(data).not.toBe(defaultValue)

    mock.restore()
  })

  test('get object', async () => {
    const testPath = '/test'
    const defaultValue = [{ name: 'test1' }, { name: 'test2' }]
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [200, defaultValue] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(testPath)

    expect(data).toEqual(defaultValue)
    expect(data).not.toBe(defaultValue)
  })

  test('get without baseURL', async () => {
    const axiosInstance = axios.create()
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [200, defaultValue] }
      }
    ]

    mockServer(route, axiosInstance)
    const { data } = await axiosInstance.get(testPath)

    expect(data).toEqual(defaultValue)
  })

  test('get path through', async () => {
    const axiosInstance = axios.create({ baseURL: 'https://google.com/' })
    const testPath = '/test'
    const defaultValue = [{ name: 'test1' }, { name: 'test2' }]
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [200, defaultValue] }
      }
    ]

    mockServer(route, axiosInstance)

    const { status } = await axiosInstance.get('/')
    expect(status).toBe(200)

    const { data } = await axiosInstance.get(testPath)
    expect(data).toEqual(defaultValue)
  })

  test('get with query and params', async () => {
    const response = { name: 'mario', height: 155, color: 'red' }
    const testPath = '/test'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: ({ params }) => [200, params] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(
      `${testPath}/?height=${response.height}&color=${response.color}`,
      {
        params: { name: response.name }
      }
    )

    expect(data).toEqual(response)
  })

  test('404 request', async () => {
    const testPath = '/test'
    const route: MockRoute = [{ path: testPath, methods: {} }]

    mock.setRoute(route)
    await expect(client.get(testPath)).rejects.toHaveProperty('response.status', 404)
  })

  test('get with params', async () => {
    const testPath = '/test'
    const name = 'mario'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: ({ params }) => [200, params.name] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(testPath, { params: { name } })

    expect(data).toEqual(name)
  })

  test('get with values', async () => {
    const testRegPath = '/test/_name/hoge.json'
    const name = 'mario'
    const testPath = `/test/${name}/hoge.json`
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: { get: ({ values }) => [200, { name: values.name }] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(testPath)

    expect(data.name).toEqual(name)
  })

  test('get with typed values', async () => {
    const testRegPath = '/test/_name@string/hoge.json'
    const name = '12345'
    const testPath = `/test/${name}/hoge.json`
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: { get: ({ values }) => [200, { name: values.name }] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(testPath)

    expect(data.name).toEqual(name)
  })

  test('post with data', async () => {
    const testPath = '/test'
    const name = 'mario'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { post: ({ data: { name } }) => [201, name] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.post(testPath, { name })

    expect(data).toEqual(name)
  })

  test('post with data by x-www-form-urlencoded', async () => {
    const testPath = '/test'
    const name = 'mario'
    const params = new URLSearchParams()
    params.append('name', name)

    const route: MockRoute = [
      {
        path: testPath,
        methods: { post: ({ data }) => [201, data.get('name')] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.post(testPath, params)

    expect(data).toEqual(name)
  })

  test('put with data', async () => {
    const testPath = '/test'
    const name = 'mario'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { put: ({ data: { name } }) => [200, name] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.put(testPath, { name })

    expect(data).toEqual(name)
  })

  test('delete with data', async () => {
    const testPath = '/test'
    const name = 'mario'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { delete: ({ data: { name } }) => [200, name] }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.delete(testPath, { data: { name } })

    expect(data).toEqual(name)
  })

  test('set delayTime', async () => {
    const delayTime = 500
    const testPath = '/test'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [204] }
      }
    ]

    mock.setRoute(route).setDelayTime(delayTime)
    const startTime = Date.now()

    await client.get(testPath)

    const elapsedTime = Date.now() - startTime
    expect(elapsedTime).toBeGreaterThanOrEqual(delayTime - 1)
    expect(elapsedTime).toBeLessThan(delayTime + 20)
  })

  test('async methods', async () => {
    const testPath = '/test'
    const name = 'mario'
    const errorStatus = 500
    const errorMessage = 'error test'
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const route: MockRoute = [
      {
        path: testPath,
        methods: {
          async get({ params }) {
            await sleep(100)
            return {
              status: 200,
              data: params.name,
              headers: { 'cache-control': 'max-age=0' }
            }
          },
          async post() {
            await sleep(100)
            return { status: errorStatus }
          },
          async put() {
            await sleep(100)
            throw new Error(errorMessage)
          },
          delete() {
            throw new Error(errorMessage)
          }
        }
      },
      {
        path: 'type-error-test',
        methods: {
          get: () => asyncResponse(200, new Promise(resolve => resolve())),
          async post() {
            await sleep(100)
            return [errorStatus] as MockResponse
          }
        }
      }
    ]

    mock.setRoute(route)
    const { data } = await client.get(testPath, { params: { name } })

    expect(data).toEqual(name)

    await expect(client.post(testPath)).rejects.toHaveProperty('response.status', errorStatus)
    await expect(client.put(testPath)).rejects.toHaveProperty('message', errorMessage)
    await expect(client.delete(testPath)).rejects.toHaveProperty('message', errorMessage)
  })

  test('enable log', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    const testPath = '/test'
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [204] }
      }
    ]

    mock.setRoute(route).enableLog()
    await client.get(testPath)

    expect(console.log).toHaveBeenCalled()

    spyLog.mockReset()
    mock.disableLog()
    await client.get(testPath)
    expect(console.log).not.toHaveBeenCalled()

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
