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
        methods: {
          get: () => [200, [defaultValue]]
        }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual(defaultValue)
  })

  test('404 request', async () => {
    const testPath = '/test'
    const route: MockRoute = [
      {
        path: testPath,
        methods: {}
      }
    ]

    mock.setRoute(route)
    await expect(client.get(testPath)).rejects.toHaveProperty('response.status', 404)
  })

  test('get with params', async () => {
    const testPath = '/test'
    const name = 'mario'
    const defaultValue = { name }
    const seeds = [defaultValue, { name: 'taro' }]
    const route: MockRoute = [
      {
        path: testPath,
        methods: {
          get: ({ config }) => [200, seeds.find(seed => seed.name === config.params.name)]
        }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath, { params: { name } })

    expect(mockedData.data).toEqual(defaultValue)
  })

  test('get with values', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample'
    const defaultValue = { name: 'sample' }
    const seeds = [defaultValue, { name: 'sample2' }]
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: {
          get: ({ values }) => [200, seeds.find(seed => seed.name === values.name)]
        }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toEqual(defaultValue)
  })

  test('post with data and values', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample2'
    const defaultValue = { name: 'sample2', title: 'bbb' }
    const seeds = [{ name: 'sample', title: 'aaa' }]
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: {
          get: ({ values }) => [200, seeds.find(seed => seed.name === values.name)],
          post: ({ values: { name }, data: { title } }) => {
            if (typeof name === 'string') seeds.push({ name, title })
            return [201, { name, title }]
          }
        }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.post(testPath, { title: 'bbb' })

    expect(mockedData.data).toEqual(defaultValue)

    const mockedData2 = await client.get(testPath)
    expect(mockedData2.data).toEqual(defaultValue)
  })
})
