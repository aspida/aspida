import axios, { AxiosInstance } from 'axios'
import MockServer, { MockRoute } from '~/src'

describe('initialize', () => {
  const mock = new MockServer()
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
    const testRegPath = '/test/_name'
    const testPath = '/test/sample'
    const defaultValue = { name: 'sample' }
    const seeds = [defaultValue, { name: 'sample2' }]
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: {
          get: ({ params }) => [200, seeds.find(seed => seed.name === params.name)]
        }
      }
    ]

    mock.setRoute(route)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toEqual(defaultValue)
  })

  test('post with data and params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample2'
    const defaultValue = { name: 'sample2', title: 'bbb' }
    const seeds = [{ name: 'sample', title: 'aaa' }]
    const route: MockRoute = [
      {
        path: testRegPath,
        methods: {
          get: ({ params }) => [200, seeds.find(seed => seed.name === params.name)],
          post: ({ params: { name }, data: { title } }) => {
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
