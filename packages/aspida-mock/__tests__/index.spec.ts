import { mockClient } from '@aspida/axios'
import api from '../../aspida/samples/$api'

describe('initialize', () => {
  const adapter = mockClient()
  const client = api(adapter)

  afterEach(() => adapter.detachRoutes())

  test('enabled mock', async () => {
    adapter.attachRoutes([
      {
        path: '/',
        methods: { put: ({ query }) => ({ status: 200, resData: query }) }
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

  test('set delayTime', async () => {
    const delayMSec = 500
    const startTime = Date.now()

    adapter.attachRoutes(
      [
        {
          path: '/',
          methods: { put: ({ query }) => ({ status: 200, resData: query }) }
        }
      ],
      { delayMSec }
    )
    await client.$put({ query: { aa: 1 } })

    const elapsedTime = Date.now() - startTime
    expect(elapsedTime).toBeGreaterThanOrEqual(delayMSec - 1)
    expect(elapsedTime).toBeLessThan(delayMSec + 20)
  })

  test('enable log', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    const routes = [{ path: '/', methods: { get: () => ({ status: 200 }) } }]

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
