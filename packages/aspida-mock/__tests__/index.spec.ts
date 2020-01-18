import axiosClient from '@aspida/axios'
import api from '../../aspida/samples/$api'
import mock from '../../aspida/samples/$mock'

describe('initialize', () => {
  const adapter = axiosClient()
  const client = api(adapter)

  afterEach(() => adapter.detachMock())

  test('enabled mock', async () => {
    const query = { aa: 1 }
    adapter.attachMock(mock())
    const res = await client.$put({ query })
    expect(res).not.toBe(query)
    expect(res).toEqual(query)
  })

  test('get path through', async () => {
    adapter.attachMock([])
    await expect(client.$put({ query: { aa: 1 } })).rejects.toHaveProperty('response.status', 404)
  })

  test('set delayTime', async () => {
    const delayMSec = 500
    const startTime = Date.now()

    adapter.attachMock(mock(), { delayMSec })
    await client.$put({ query: { aa: 1 } })

    const elapsedTime = Date.now() - startTime
    expect(elapsedTime).toBeGreaterThanOrEqual(delayMSec - 1)
    expect(elapsedTime).toBeLessThan(delayMSec + 20)
  })

  test('enable log', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)

    adapter.attachMock(mock(), { log: true })
    await client.get()

    expect(console.log).toHaveBeenCalled()

    spyLog.mockReset()
    adapter.detachMock()
    adapter.attachMock(mock())
    await client.get()
    expect(console.log).not.toHaveBeenCalled()

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
