import axiosClient from '@aspida/axios'
import api from '../samples/$api'

describe('axios client test', () => {
  test('axios', async () => {
    const target = api(axiosClient()).v1_1.$2._hogeId('hoge').entries_json
    await expect(target.get()).rejects.toHaveProperty('response.status', 404)
  })
})
