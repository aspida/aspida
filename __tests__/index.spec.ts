import axios, { AxiosInstance } from 'axios'
import fs from 'fs'
import path from 'path'
import mockServer, { MockModels, MockRouter, Datastore } from '~/src'
import formToBuffer from '~/testLibs/formToBuffer'

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
    const router: any[] = []

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
          get: db => db.getCollection('test').asyncFind({})
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
          get: (db, params) => db.getCollection('test').asyncFind(params),
          post: (db, { name }, { title }) =>
            db.getCollection('test').asyncInsert(models.test.create(db, { name, title }))
        }
      }
    ]

    db = (await mockServer(client, models, router)).db
    const mockedData = await client.post(testPath, { title: 'bbb' })

    expect(mockedData.data).toEqual({ ...defaultValue, _id: expect.any(String) })

    const mockedData2 = await client.get(testPath)
    expect(mockedData2.data).toHaveLength(1)
    expect(mockedData2.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('post with multipart/form-data', async () => {
    const testPath = '/test'
    const name = 'sample-name'
    const imageBinary = fs.readFileSync(path.join(__dirname, './assets/logo.png'))
    const formData: [string, string | number | Buffer][] = [
      ['name', name],
      ['num', 123],
      ['file', imageBinary]
    ]
    const imageDataURI = fs.readFileSync(path.join(__dirname, './assets/logo.b64'), 'utf-8')
    const models: MockModels = {
      test: {
        seeds: () => [],
        create: (db, { file }) => ({ logo: file })
      }
    }

    const router: MockRouter = [
      {
        path: testPath,
        methods: {
          get: db => db.getCollection('test').asyncFind({}),
          post: (db, _, { file }) =>
            db.getCollection('test').asyncInsert(models.test.create(db, { file }))
        }
      }
    ]

    db = (await mockServer(client, models, router)).db
    const { boundary, buffer } = formToBuffer(formData)
    const mockedData = await client.post(testPath, buffer, {
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` }
    })
    expect(mockedData.data).toEqual({ logo: imageDataURI, _id: expect.any(String) })

    const mockedData2 = await client.get(testPath)
    expect(mockedData2.data).toHaveLength(1)
    expect(mockedData2.data[0]).toEqual({ logo: imageDataURI, _id: expect.any(String) })
  })
})
