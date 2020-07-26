import mockClient from '../../aspida-axios/src/mockClient'
import { MockRoute } from '../src'
import api from '../../aspida/sample1/$api'

describe('initialize', () => {
  const adapter = mockClient()
  const client = api(adapter)

  afterEach(() => adapter.detachRoutes())

  test('enabled mock', async () => {
    adapter.attachRoutes([
      {
        path: '',
        methods: { put: ({ query }) => ({ status: 200, resBody: query }) }
      }
    ])

    const query = { aa: 1 }
    const res = await client.$put({ query })
    expect(res).not.toBe(query)
    expect(res).toEqual(query)
  })

  test('get path through', async () => {
    adapter.attachRoutes([])
    await expect(
      client.get({ config: { baseURL: 'https://www.google.com/' } })
    ).resolves.toHaveProperty('status', 200)
  })

  test('response 400 error', async () => {
    const status = 400
    adapter.attachRoutes([{ path: '', methods: { get: () => ({ status }) } }])
    await expect(client.get()).rejects.toHaveProperty('response.status', status)
  })

  test('response 500 error', async () => {
    const status = 500
    adapter.attachRoutes([{ path: '', methods: { get: () => ({ status }) } }])
    await expect(client.get()).rejects.toHaveProperty('response.status', status)
  })

  test('set delayTime', async () => {
    const delayMSec = 500
    const startTime = Date.now()

    adapter.attachRoutes(
      [
        {
          path: '',
          methods: { put: ({ query }) => ({ status: 200, resBody: query }) }
        }
      ],
      { delayMSec }
    )
    await client.$put({ query: { aa: 1 } })

    const elapsedTime = Date.now() - startTime
    expect(elapsedTime).toBeGreaterThanOrEqual(delayMSec - 1)
    expect(elapsedTime).toBeLessThan(delayMSec + 20)
  })

  test('post json data', async () => {
    adapter.attachRoutes([
      {
        path: '',
        methods: {
          post: ({ query, reqBody }) => ({ status: 200, resBody: query.aa * reqBody.val })
        }
      }
    ])

    expect(await client.$post({ query: { aa: 2 }, body: { val: 3 } })).toEqual(6)
  })

  test('middleware path through', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    adapter.attachRoutes(
      [
        {
          path: '',
          methods: { get: ({ query }) => ({ status: 200, resBody: query }) }
        }
      ],
      {
        middleware: [
          (_req, _res, next) => {
            console.log('a')
            next()
          },
          (_req, _res, next) => {
            console.log('b')
            next()
          }
        ]
      }
    )

    await client.$get()

    expect(console.log).toHaveBeenNthCalledWith(1, 'a')
    expect(console.log).toHaveBeenNthCalledWith(2, 'b')

    spyLog.mockReset()
    spyLog.mockRestore()
  })

  test('intercept the response with middleware', async () => {
    adapter.attachRoutes(
      [
        {
          path: '',
          methods: { put: ({ query }) => ({ status: 200, resBody: query }) }
        }
      ],
      {
        middleware: [
          (req, _res, next) => {
            next({ ...req, query: { aa: req.query.aa + 2 } })
          },
          (req, res) => {
            res({ status: 200, resBody: { aa: req.query.aa + 4 } })
          },
          (req, res) => {
            res({ status: 200, resBody: { aa: req.query.aa + 8 } })
          }
        ]
      }
    )

    expect(await client.$put({ query: { aa: 1 } })).toEqual({ aa: 7 })
  })

  test('enable log', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    const routes: MockRoute[] = [{ path: '', methods: { get: () => ({ status: 200 }) } }]

    adapter.attachRoutes(routes, { log: true })
    await client.get()

    expect(console.log).toHaveBeenCalled()

    spyLog.mockReset()
    adapter.detachRoutes()
    adapter.attachRoutes(routes)
    await client.get()
    expect(console.log).not.toHaveBeenCalled()

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
