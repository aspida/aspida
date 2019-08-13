import axios, { AxiosInstance } from 'axios'
import mockServer, { MockModels, MockRouter } from '~/src'

describe('initialize', () => {
  let client: AxiosInstance

  beforeEach(() => {
    client = axios.create({
      baseURL: 'https://google.com'
    })
  })

  test('enabled mock', async () => {
    const models = {}
    const router = []

    await mockServer(client, models, router)
    await expect(client.get('/')).rejects.toHaveProperty('response.status', 404)
  })

  test('mock:get', async () => {
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const models: MockModels = {
      test: {
        seeds: () => [defaultValue],
        create: (db, { name }) => ({ name })
      }
    }

    const router: MockRouter<typeof models> = [
      {
        path: testPath,
        methods: {
          get: (db) => db.getCollection('test').asyncFind({})
        }
      }
    ]

    await mockServer(client, models, router)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('mock:get with params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample'
    const defaultValue = { name: 'sample' }
    const models: MockModels = {
      test: {
        seeds: () => [defaultValue, { name: 'sample2' }],
        create: (db, { name }) => ({ name })
      }
    }

    const router: MockRouter<typeof models> = [
      {
        path: testRegPath,
        methods: {
          get: (db, params) => db.getCollection('test').asyncFind(params)
        }
      }
    ]

    await mockServer(client, models, router)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })
})
