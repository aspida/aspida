import { fork, ChildProcess } from 'child_process'
import aspida from '@aspida/axios'
import api from '../apis/$api'

const client = api(aspida(undefined, { baseURL: 'http://localhost:10000' }))
let server: ChildProcess

beforeAll(() => {
  server = fork(`${__dirname}/../.aspida/$server`)
})
afterAll(() => {
  server.kill()
})

test('success', async () => {
  const res = await client.$get({ query: { id: '1', disable: 'false' } })
  expect(res?.id).toBe(1)
})

test('error 400', async () => {
  await Promise.all([
    expect(client.get({ query: { id: '1', disable: 'no boolean' } })).rejects.toHaveProperty(
      'response.status',
      400
    ),
    expect(client.get({ query: { id: 'no number', disable: 'true' } })).rejects.toHaveProperty(
      'response.status',
      400
    )
  ])
})
