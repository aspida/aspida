import axios, { AxiosInstance } from 'axios'
import mockServer, { MockRoute } from '~/src'

describe('initialize', () => {
  const mock = mockServer()
  let client: AxiosInstance

  beforeEach(() => {
    client = axios.create({ baseURL: 'https://google.com' })
    mock.setClient(client)
  })

  afterEach(() => mock.reset())

  test('enabled mock', async () => {
    const route: MockRoute = []

    mock.setRoute(route)
    await expect(client.get('/')).rejects.toHaveProperty('response.status', 404)
  })

  test('get', async () => {
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const route: MockRoute = [
      {
        path: testPath,
        methods: { get: () => [200, defaultValue] }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toEqual(defaultValue)
    expect(mockedData.data).not.toBe(defaultValue)
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
        methods: { get: ({ config }) => [200, config.params.name] }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath, { params: { name } })

    expect(mockedData.data).toEqual(name)
  })

  test('get with values', async () => {
    const testRegPath = '/test/_name'
    const name = 'mario'
    const testPath = `/test/${name}`
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: { get: ({ values }) => [200, values.name] }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toEqual(name)
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
    const mockedData = await client.post(testPath, { name })

    expect(mockedData.data).toEqual(name)
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
    expect(elapsedTime).toBeGreaterThanOrEqual(delayTime)
    expect(elapsedTime).toBeLessThan(elapsedTime + 20)
  })
})
