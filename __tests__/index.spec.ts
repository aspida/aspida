import axios, { AxiosInstance } from 'axios'
import mockServer, { MockModels, MockRouter, Datastore } from '~/src'

describe('initialize', () => {
  let client: AxiosInstance
  let db: Datastore

  beforeEach(() => {
    client = axios.create({
      baseURL: 'https://google.com'
    })
  })

  afterEach(() => db.deleteAll())

  test('enabled mock', async () => {
    const models = {}
    const router = []

    db = (await mockServer(client, models, router)).db
    await expect(client.get('/')).rejects.toHaveProperty('response.status', 404)
  })

  test('get', async () => {
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const models: MockModels = {
      test: {
        seeds: () => [defaultValue],
        create: (db, { name }) => ({ name })
      }
    }

    const router: MockRouter = [
      {
        path: testPath,
        methods: {
          get: (db) => db.getCollection('test').asyncFind({})
        }
      }
    ]

    db = (await mockServer(client, models, router)).db
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('get with params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample'
    const defaultValue = { name: 'sample' }
    const models: MockModels = {
      test: {
        seeds: () => [defaultValue, { name: 'sample2' }],
        create: (db, { name }) => ({ name })
      }
    }

    const router: MockRouter = [
      {
        path: testRegPath,
        methods: {
          get: (db, params) => db.getCollection('test').asyncFind(params)
        }
      }
    ]

    db = (await mockServer(client, models, router)).db
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('post with data and params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample2'
    const defaultValue = { name: 'sample2', title: 'bbb' }
    const models: MockModels = {
      test: {
        seeds: () => [{ name: 'sample', title: 'aaa' }],
        create: (db, { name, title }) => ({ name, title })
      }
    }

    const router: MockRouter = [
      {
        path: testRegPath,
        methods: {
          get: (db) => db.getCollection('test').asyncFind({}),
          post: (db, { name }, { title }) => db.getCollection('test').asyncInsert(
            models.test.create(db, { name, title })
          )
        }
      }
    ]

    db = (await mockServer(client, models, router)).db
    const mockedData = await client.post(testPath, { title: 'bbb' })

    expect(mockedData.data).toEqual({ ...defaultValue, _id: expect.any(String) })

    const mockedData2 = await client.get(testPath)
    expect(mockedData2.data).toHaveLength(2)
    expect(mockedData2.data[1]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })
})
