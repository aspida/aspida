import axios, { AxiosInstance } from 'axios'
import fs from 'fs'
import path from 'path'
import mockServer, { MockRouter, DataStore, Seeds, asyncResponse } from '~/src'
import formToBuffer from './libs/formToBuffer'

describe('initialize', () => {
  let client: AxiosInstance
  let dataStore: DataStore

  beforeEach(() => {
    client = axios.create({ baseURL: 'https://google.com' })
    dataStore = new DataStore()
  })

  afterEach(() => dataStore.deleteAll())

  test('enabled mock', async () => {
    const router: MockRouter = []

    await mockServer(client, router)
    await expect(client.get('/')).rejects.toHaveProperty('response.status', 404)
  })

  test('get', async () => {
    const testPath = '/test'
    const defaultValue = { name: 'test' }
    const seeds: Seeds = { test: [defaultValue] }
    const router: MockRouter = [
      {
        path: testPath,
        methods: {
          get: () => asyncResponse(200, dataStore.getCollection('test').asyncFind({}))
        }
      }
    ]

    dataStore.initCollectionsAndSeeds(seeds)
    await mockServer(client, router)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('404 request', async () => {
    const testPath = '/test'
    const router: MockRouter = [
      {
        path: testPath,
        methods: {}
      }
    ]

    await mockServer(client, router)
    await expect(client.get(testPath)).rejects.toHaveProperty('response.status', 404)
  })

  test('get with params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample'
    const defaultValue = { name: 'sample' }
    const seeds: Seeds = { test: [defaultValue, { name: 'sample2' }] }
    const router: MockRouter = [
      {
        path: testRegPath,
        methods: {
          get: ({ params }) => asyncResponse(200, dataStore.getCollection('test').asyncFind(params))
        }
      }
    ]

    dataStore.initCollectionsAndSeeds(seeds)
    await mockServer(client, router)
    const mockedData = await client.get(testPath)

    expect(mockedData.data).toHaveLength(1)
    expect(mockedData.data[0]).toEqual({ ...defaultValue, _id: expect.any(String) })
  })

  test('post with data and params', async () => {
    const testRegPath = '/test/_name'
    const testPath = '/test/sample2'
    const defaultValue = { name: 'sample2', title: 'bbb' }
    const seeds: Seeds = { test: [{ name: 'sample', title: 'aaa' }] }
    const router: MockRouter = [
      {
        path: testRegPath,
        methods: {
          get: ({ params }) =>
            asyncResponse(200, dataStore.getCollection('test').asyncFind(params)),
          post: ({ params: { name }, data: { title } }) =>
            asyncResponse(201, dataStore.getCollection('test').asyncInsert({ name, title }))
        }
      }
    ]

    dataStore.initCollectionsAndSeeds(seeds)
    await mockServer(client, router)
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
    const seeds: Seeds = { test: [] }
    const router: MockRouter = [
      {
        path: testPath,
        methods: {
          get: () => asyncResponse(200, dataStore.getCollection('test').asyncFind({})),
          post: ({ data: { file } }) =>
            asyncResponse(201, dataStore.getCollection('test').asyncInsert({ file }))
        }
      }
    ]

    dataStore.initCollectionsAndSeeds(seeds)
    await mockServer(client, router)
    const { boundary, buffer } = formToBuffer(formData)
    const mockedData = await client.post(testPath, buffer, {
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` }
    })
    expect(mockedData.data).toEqual({ file: imageDataURI, _id: expect.any(String) })

    const mockedData2 = await client.get(testPath)
    expect(mockedData2.data).toHaveLength(1)
    expect(mockedData2.data[0]).toEqual({ file: imageDataURI, _id: expect.any(String) })
  })
})
