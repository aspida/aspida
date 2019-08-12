import axios, { AxiosInstance } from 'axios'
import mockServer from '~/src'

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
    const models = {
      test: {
        seeds: () => [defaultValue],
        create: (db, { name }) => ({ name })
      }
    }

    const router = [
      {
        path: testPath,
        methods: {
          get: (db) => db.getCollection('test').asyncFind()
        }
      }
    ]

    await mockServer(client, models, router)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })
})
