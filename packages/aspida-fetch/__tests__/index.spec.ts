import qs from 'qs'
import api from '../../aspida/samples/array/$api'
import aspida, { FetchConfig } from '../index'
describe('paramsSerializer', () => {
  test('default', async () => {
    const fetch = jest.fn().mockResolvedValue({ headers: new Map(), status: 200, json: () => [] })
    const client = api(aspida(fetch))
    await client.users.$get({ query: { ids: [1, 2, 3] } })
    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/users?ids=1&ids=2&ids=3',
      expect.anything()
    )
  })
  test('qs', async () => {
    const fetch = jest.fn().mockResolvedValue({ headers: new Map(), status: 200, json: () => [] })
    const config: FetchConfig = {
      paramsSerializer: params => qs.stringify(params)
    }
    const client = api(aspida(fetch, config))
    await client.users.$get({ query: { ids: [1, 2, 3] } })
    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/users?ids%5B0%5D=1&ids%5B1%5D=2&ids%5B2%5D=3',
      expect.anything()
    )
  })
})
